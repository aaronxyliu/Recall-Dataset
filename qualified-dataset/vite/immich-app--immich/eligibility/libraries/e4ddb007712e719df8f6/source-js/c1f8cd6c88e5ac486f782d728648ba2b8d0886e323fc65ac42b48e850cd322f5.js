import CreateLocalBackend from '../components/backends/dialogs/CreateLocalBackendModal.svelte';
import OAuthDeviceFlow from '../components/backends/dialogs/OAuthDeviceFlowModal.svelte';
import ReconfigureRepositoryBackendModal from '../components/backups/dialogs/ReconfigureRepositoryBackendModal.svelte';
import { SocketEvent } from '../events';
import { futoBackupsCreateLocalBackend, futoBackupsGetBackends, } from '../fetch-client';
import { queryClient } from '../query-client';
import { handleError } from '../utils/handle-error';
import { modalManager } from '@immich/ui';
import { mdiLogin } from '@mdi/js';
import { createMutation, createQuery } from '@tanstack/svelte-query';
import { gt, msg } from 'svelte-i18n-lingui';
export const backendKeys = {
    all: ['backends'],
};
export const useBackends = () => createQuery(() => ({
    queryKey: backendKeys.all,
    queryFn: () => futoBackupsGetBackends().then(({ backends }) => backends),
}), () => queryClient);
export const useBackendEventHandler = () => {
    return {
        onBackendCreate(event) {
            queryClient.setQueryData(backendKeys.all, (data) => {
                return data
                    ? [
                        ...data.filter((entry) => entry.id !== event.data.backend.id),
                        event.data.backend,
                    ]
                    : void 0;
            });
        },
    };
};
export const handleStartYuccaLogin = (onCreate) => {
    void modalManager.show(OAuthDeviceFlow, {
        onCreate,
    });
};
export const handleSetupLocalStorage = (onCreate) => {
    void modalManager.show(CreateLocalBackend, { onCreate });
};
export const useCreateLocalBackend = () => createMutation(() => ({
    mutationFn: (dto) => futoBackupsCreateLocalBackend(dto),
    onError: (error) => handleError(error, gt `Failed to create local backend`),
}), () => queryClient);
export const handleReconfigureRepositoryBackend = async (repository) => {
    await modalManager.show(ReconfigureRepositoryBackendModal, {
        repository,
    });
};
export const handleRemoveRepositoryBackend = (_backend, _repositoryBackend) => {
    alert('TODO: implement me when multi-repository-backend support is added');
};
export const getBackendActions = (repository, backend, t, repositoryBackend, onLogin) => {
    const LoginAgain = {
        icon: mdiLogin,
        title: t(msg `Login again`),
        onAction: () => onLogin?.(),
        $if: () => backend.type === 'yucca' && !backend.isOnline,
    };
    const Reconfigure = {
        icon: mdiLogin,
        title: t(msg `Reconfigure`),
        onAction: () => void handleReconfigureRepositoryBackend(repository),
        $if: () => repositoryBackend
            ? backend.isOnline &&
                !repositoryBackend.online &&
                repositoryBackend.primary === true
            : false,
    };
    const Remove = {
        icon: mdiLogin,
        title: t(msg `Remove`),
        onAction: () => void handleRemoveRepositoryBackend(backend, repositoryBackend),
        $if: () => repositoryBackend
            ? backend.isOnline &&
                !repositoryBackend.online &&
                repositoryBackend.primary === false
            : false,
    };
    return { LoginAgain, Reconfigure, Remove };
};
