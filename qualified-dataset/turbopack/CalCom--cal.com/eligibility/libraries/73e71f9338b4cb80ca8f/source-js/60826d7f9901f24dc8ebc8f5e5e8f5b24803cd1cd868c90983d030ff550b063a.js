"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsController = void 0;
const mixpanel_1 = __importDefault(require("mixpanel"));
const crypto_1 = require("crypto");
const idKey = 'heartbeat';
const sentKey = 'lastSent';
class AnalyticsController {
    constructor({ opts, analyticsStore, connectionAPIController, directorySyncController }) {
        this.analyticsStore = analyticsStore;
        this.client = mixpanel_1.default.init('1028494897a5520b90e7344344060fa7');
        this.connectionAPIController = connectionAPIController;
        this.directorySyncController = directorySyncController;
        this.anonymousId = '';
        this.opts = opts;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.anonymousId = yield this.analyticsStore.get(idKey);
            if (!this.anonymousId || this.anonymousId === '') {
                this.anonymousId = (0, crypto_1.randomUUID)();
                this.analyticsStore.put(idKey, this.anonymousId);
            }
            const sent = yield this.analyticsStore.get(sentKey);
            const msBetweenDates = Math.abs(new Date().getTime() - new Date(sent || 0).getTime());
            const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
            if (hoursBetweenDates >= 24) {
                yield this.send();
            }
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                yield this.send();
            }), 60 * 60 * 24 * 1000);
        });
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sso_connections_count = yield this.connectionAPIController.getCount();
                const dsync_connections_count = yield this.directorySyncController.directories.getCount();
                const events = [
                    {
                        event: idKey,
                        properties: {
                            distinct_id: this.anonymousId,
                        },
                    },
                ];
                if (sso_connections_count || dsync_connections_count) {
                    events.push({
                        event: 'usage',
                        properties: {
                            distinct_id: this.anonymousId,
                            'SSO Connections': sso_connections_count,
                            'Directory Sync Connections': dsync_connections_count,
                        },
                    });
                }
                this.client.track_batch(events, (err) => {
                    if (err === null || err === void 0 ? void 0 : err.length) {
                        setTimeout(() => {
                            this.send();
                        }, 1000 * 60 * 60);
                        return;
                    }
                    this.analyticsStore.put(sentKey, new Date().toISOString());
                });
            }
            catch (err) {
                this.opts.logger.error('Error sending analytics', err);
            }
        });
    }
}
exports.AnalyticsController = AnalyticsController;
//# sourceMappingURL=analytics.js.map