import * as yuccaApiClient from '@futo-org/backups-api-client';
import * as orchestrationApiClient from './fetch-client';
import { setYuccaLanguage } from './i18n';
const clients = {
    orchestrator: orchestrationApiClient,
    customer: yuccaApiClient,
};
const repositoryListers = {
    orchestrator: () => orchestrationApiClient.futoBackupsGetRepositories(),
    customer: () => yuccaApiClient.getRepositories(),
};
const KEY = '__yucca_provider__';
export const configureYucca = ({ api, baseUrl, language, }) => {
    const client = clients[api];
    if (baseUrl !== undefined) {
        client.defaults.baseUrl = baseUrl;
    }
    const provider = {
        api,
        baseUrl: client.defaults.baseUrl.replace(/\/$/, ''),
        getRepositories: repositoryListers[api],
    };
    globalThis[KEY] = provider;
    void setYuccaLanguage(language);
    return provider;
};
export const getProvider = () => {
    const provider = globalThis[KEY];
    if (!provider) {
        throw new Error('Yucca is not configured: call configureYucca() before rendering any component');
    }
    return provider;
};
