/**
 * FUTO Backups
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults = {
    headers: {},
    baseUrl: "/"
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
/**
 * Connect a FUTO Backups account
 */
export function futoBackupsConnectDeviceFlow(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/auth/oidc/device", {
        ...opts
    }));
}
/**
 * Sign in with FUTO Backups account
 */
export function futoBackupsSessionDeviceFlow(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/auth/session/device", {
        ...opts
    }));
}
/**
 * Create session
 */
export function futoBackupsCreateSession(createSessionRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/auth/session", oazapfts.json({
        ...opts,
        method: "POST",
        body: createSessionRequestDto
    })));
}
/**
 * Create a ticket
 */
export function futoBackupsCreateTicket(ticketCreateRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/auth/ticket", oazapfts.json({
        ...opts,
        method: "POST",
        body: ticketCreateRequestDto
    })));
}
/**
 * List backends
 */
export function futoBackupsGetBackends(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/backend", {
        ...opts
    }));
}
/**
 * Create a local backend
 */
export function futoBackupsCreateLocalBackend(createLocalBackendRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/backend/local", oazapfts.json({
        ...opts,
        method: "POST",
        body: createLocalBackendRequestDto
    })));
}
/**
 * Get backups orchestrator configuration
 */
export function futoBackupsGetConfig(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/config", {
        ...opts
    }));
}
/**
 * Update backups orchestrator configuration
 */
export function futoBackupsUpdateConfig(configUpdateRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/config", oazapfts.json({
        ...opts,
        method: "PUT",
        body: configUpdateRequestDto
    })));
}
/**
 * Reset the backups orchestrator
 */
export function futoBackupsResetOrchestrator(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/debug/reset", {
        ...opts,
        method: "POST"
    }));
}
/**
 * List files
 */
export function futoBackupsGetFileListing({ path } = {}, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/fs${QS.query(QS.explode({
        path
    }))}`, {
        ...opts
    }));
}
/**
 * Get backup integrations
 */
export function futoBackupsGetIntegrations(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/integrations", {
        ...opts
    }));
}
/**
 * Get Immich backup status
 */
export function futoBackupsGetImmichBackupStatus(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/integrations/immich/status", {
        ...opts
    }));
}
/**
 * Configure the Immich backup integration
 */
export function futoBackupsConfigureImmichIntegration(configureImmichIntegrationRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/integrations/immich", oazapfts.json({
        ...opts,
        method: "POST",
        body: configureImmichIntegrationRequestDto
    })));
}
/**
 * Ignore the Immich database dump warning
 */
export function futoBackupsIgnoreImmichDatabaseDumpWarning(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/integrations/immich/database-dump/ignore-warning", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Configure Immich database dumps
 */
export function futoBackupsConfigureImmichDatabaseDump(configureImmichDatabaseDumpRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/integrations/immich/database-dump", oazapfts.json({
        ...opts,
        method: "POST",
        body: configureImmichDatabaseDumpRequestDto
    })));
}
/**
 * Roll Immich back to a snapshot
 */
export function futoBackupsStartImmichRollback(immichRollbackRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/integrations/immich/rollback", oazapfts.json({
        ...opts,
        method: "POST",
        body: immichRollbackRequestDto
    })));
}
/**
 * List jobs
 */
export function futoBackupsGetJobs(repositoryId, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/jobs${QS.query(QS.explode({
        repositoryId
    }))}`, {
        ...opts
    }));
}
/**
 * Get a job
 */
export function futoBackupsGetJob(id, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/jobs/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
/**
 * Cancel a job
 */
export function futoBackupsCancelJob(id, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/futo-backups/jobs/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Download a job log
 */
export function futoBackupsDownloadJobLog(id, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/api/futo-backups/jobs/${encodeURIComponent(id)}/download`, {
        ...opts
    }));
}
/**
 * Download a job support log
 */
export function futoBackupsDownloadJobSupportLog(id, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/api/futo-backups/jobs/${encodeURIComponent(id)}/support-log/download`, {
        ...opts
    }));
}
/**
 * Get backup onboarding status
 */
export function futoBackupsOnboardingStatus(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/onboarding", {
        ...opts
    }));
}
/**
 * Get the backup recovery key
 */
export function futoBackupsCurrentRecoveryKey(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/onboarding/recovery-key", {
        ...opts
    }));
}
/**
 * Import a backup recovery key
 */
export function futoBackupsImportRecoveryKey(importRecoveryKeyRequest, opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/recovery-key", oazapfts.json({
        ...opts,
        method: "PUT",
        body: importRecoveryKeyRequest
    })));
}
/**
 * Confirm the backup recovery key
 */
export function futoBackupsConfirmRecoveryKey(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/recovery-key", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Skip optional backup onboarding
 */
export function futoBackupsSkipOnboardingExtraConfig(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/skip", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Enable FUTO Backups telemetry
 */
export function futoBackupsEnableTelemetry(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/telemetry", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Continue after a restore
 */
export function futoBackupsContinueAfterRestore(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/restore/continue", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Report a startup error
 */
export function futoBackupsReportError(opts) {
    return oazapfts.ok(oazapfts.fetchText("/api/futo-backups/onboarding/report-error", {
        ...opts,
        method: "POST"
    }));
}
/**
 * Create a new backup
 */
export function futoBackupsCreateRepository(repositoryCreateRequestDto, { backend } = {}, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository${QS.query(QS.explode({
        backend
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: repositoryCreateRequestDto
    })));
}
/**
 * List backups
 */
export function futoBackupsGetRepositories(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/repository", {
        ...opts
    }));
}
/**
 * List remote backups
 */
export function futoBackupsInspectRepositories({ backend } = {}, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/inspect${QS.query(QS.explode({
        backend
    }))}`, {
        ...opts
    }));
}
/**
 * Update a backup
 */
export function futoBackupsUpdateRepository(id, repositoryUpdateRequestDto, { backend } = {}, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}${QS.query(QS.explode({
        backend
    }))}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: repositoryUpdateRequestDto
    })));
}
/**
 * Remove a backup
 */
export function futoBackupsDeleteRepository(id, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/futo-backups/repository/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Start a backup
 */
export function futoBackupsCreateBackup(id, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST"
    }));
}
/**
 * Sync a remote deletion
 */
export function futoBackupsSyncRepositoryDeletion(id, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/sync-deletion`, {
        ...opts,
        method: "POST"
    }));
}
/**
 * Check a repository import
 */
export function futoBackupsCheckImportRepository(id, backend, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/import${QS.query(QS.explode({
        backend
    }))}`, {
        ...opts
    }));
}
/**
 * Import a repository
 */
export function futoBackupsImportRepository(id, backend, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/import${QS.query(QS.explode({
        backend
    }))}`, {
        ...opts,
        method: "POST"
    }));
}
/**
 * Change the primary backend
 */
export function futoBackupsReconfigureRepositoryPrimaryBackend(id, repositoryPrimaryBackendReconfigureRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/backend`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: repositoryPrimaryBackendReconfigureRequestDto
    })));
}
/**
 * List snapshots
 */
export function futoBackupsGetSnapshots(id, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots`, {
        ...opts
    }));
}
/**
 * Prune a repository
 */
export function futoBackupsPruneRepository(id, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots/prune`, {
        ...opts,
        method: "POST"
    }));
}
/**
 * Restore a snapshot
 */
export function futoBackupsRestoreSnapshot(id, snapshot, repositorySnapshotRestoreRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots/${encodeURIComponent(snapshot)}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: repositorySnapshotRestoreRequestDto
    })));
}
/**
 * Delete a snapshot
 */
export function futoBackupsForgetSnapshot(id, snapshot, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots/${encodeURIComponent(snapshot)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Restore from snapshot
 */
export function futoBackupsRestoreFromPoint(id, snapshot, backend, repositorySnapshotRestoreFromPointRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots/${encodeURIComponent(snapshot)}/restore-from-point${QS.query(QS.explode({
        backend
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: repositorySnapshotRestoreFromPointRequestDto
    })));
}
/**
 * List snapshot files
 */
export function futoBackupsGetSnapshotListing(id, snapshot, { path } = {}, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/repository/${encodeURIComponent(id)}/snapshots/${encodeURIComponent(snapshot)}/listing${QS.query(QS.explode({
        path
    }))}`, {
        ...opts
    }));
}
/**
 * Create a schedule
 */
export function futoBackupsCreateSchedule(scheduleCreateRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/schedule", oazapfts.json({
        ...opts,
        method: "POST",
        body: scheduleCreateRequestDto
    })));
}
/**
 * List schedules
 */
export function futoBackupsGetSchedules(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/schedule", {
        ...opts
    }));
}
/**
 * Update a schedule
 */
export function futoBackupsUpdateSchedule(id, scheduleUpdateRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api/futo-backups/schedule/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: scheduleUpdateRequestDto
    })));
}
/**
 * Delete a schedule
 */
export function futoBackupsRemoveSchedule(id, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/api/futo-backups/schedule/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
/**
 * Get support mode
 */
export function futoBackupsGetSupportMode(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/support-mode", {
        ...opts
    }));
}
/**
 * Update support mode
 */
export function futoBackupsUpdateSupportMode(supportModeUpdateRequestDto, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api/futo-backups/support-mode", oazapfts.json({
        ...opts,
        method: "PUT",
        body: supportModeUpdateRequestDto
    })));
}
