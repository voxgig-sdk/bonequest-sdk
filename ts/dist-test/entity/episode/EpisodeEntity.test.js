"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('EpisodeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BONEQUEST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BONEQUEST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BonequestSDK.test();
        const ent = testsdk.Episode();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BonequestSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Episode().list({ "episode_number": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BONEQUEST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'episode.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "day": { "a": true, "h": "Day", "n": "day", "r": false, "sh": "Day of month published", "t": "`$INTEGER`", "key$": "day", "index$": 0 }, "dialog": { "a": true, "h": "Dialog", "n": "dialog", "r": false, "sh": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "t": "`$ARRAY`", "key$": "dialog", "index$": 1 }, "episode": { "a": true, "h": "Episode", "n": "episode", "r": false, "sh": "Episode number", "t": "`$INTEGER`", "key$": "episode", "index$": 2 }, "hd": { "a": true, "h": "Hd", "n": "hd", "r": false, "sh": "Optional array containing details about associated BoneQuest HD images", "t": "`$ARRAY`", "key$": "hd", "index$": 3 }, "height": { "a": true, "h": "Height", "n": "height", "r": false, "sh": "Image height", "t": "`$INTEGER`", "key$": "height", "index$": 4 }, "hifi": { "a": true, "h": "Hifi", "n": "hifi", "r": false, "sh": "Optional details about an associated BoneQuest HiFi episode", "t": "`$OBJECT`", "key$": "hifi", "index$": 5 }, "image": { "a": true, "h": "Image", "n": "image", "r": false, "sh": "Partial URL to episode image", "t": "`$STRING`", "key$": "image", "index$": 6 }, "month": { "a": true, "h": "Month", "n": "month", "r": false, "sh": "Month published, number between 1-12", "t": "`$INTEGER`", "key$": "month", "index$": 7 }, "navigation": { "a": true, "h": "Navigation", "n": "navigation", "r": false, "sh": "Back and next keys contain fully-formed episode for surrounding episodes", "t": "`$OBJECT`", "key$": "navigation", "index$": 8 }, "players": { "a": true, "h": "Players", "n": "players", "r": false, "sh": "Array of player names", "t": "`$ARRAY`", "key$": "players", "index$": 9 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Array of tags applied", "t": "`$ARRAY`", "key$": "tags", "index$": 10 }, "thumb": { "a": true, "h": "Thumb", "n": "thumb", "r": false, "sh": "Partial URL to thumbnail of episode image", "t": "`$STRING`", "key$": "thumb", "index$": 11 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Episode title", "t": "`$STRING`", "key$": "title", "index$": 12 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "sh": "Image width", "t": "`$INTEGER`", "key$": "width", "index$": 13 }, "year": { "a": true, "h": "Year", "n": "year", "r": false, "sh": "Year published", "t": "`$INTEGER`", "key$": "year", "index$": 14 } }, "name": "episode", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /episodes/random/{count}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 1, "k": "param", "n": "count", "or": "count", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episodes/random/{count}", "q": { "exist": ["count"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "episodes" }, { "lit": "random" }, { "var": "count" }], "t": { "req": "`reqdata`", "res": "`body.episodes`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /episode/{episodeNumber}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 420, "k": "param", "n": "episode_number", "or": "episodeNumber", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episode/{episodeNumber}", "q": { "exist": ["episode_number"] }, "r": { "param": { "episodeNumber": "episode_number" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "episode" }, { "var": "episode_number" }], "t": { "req": "`reqdata`", "res": "`body.episodes`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /episodes/{episodeNumbers}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "666,667", "k": "param", "n": "episode_number", "or": "episodeNumbers", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episodes/{episodeNumbers}", "q": { "exist": ["episode_number"] }, "r": { "param": { "episodeNumbers": "episode_number" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "episodes" }, { "var": "episode_number" }], "t": { "req": "`reqdata`", "res": "`body.episodes`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "episode", "name__orig": "episode", "Name": "Episode", "name_": "episode", "name-": "episode", "NAME": "EPISODE", "index$": 0 }, { "active": true, "entity": "episode", "key$": "BasicEpisodeFlow", "kind": "basic", "name": "BasicEpisodeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "episode_number": "episode_number01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "episode_ref01" } }], "index$": 0 }] }, 'Episode', { "GET /episodes/random/{count}": { "protocol": "http", "parameters": [{ "name": "count", "in": "path", "required": true, "description": "The number of random episodes to retrieve", "schema": { "type": "integer", "minimum": 1, "example": 1 }, "index$": 0 }] }, "GET /episode/{episodeNumber}": { "protocol": "http", "parameters": [{ "name": "episodeNumber", "in": "path", "required": true, "description": "The episode number to retrieve", "schema": { "type": "integer", "example": 420 }, "index$": 0 }] }, "GET /episodes/{episodeNumbers}": { "protocol": "http", "parameters": [{ "name": "episodeNumbers", "in": "path", "required": true, "description": "Comma-separated list of episode numbers to retrieve", "schema": { "type": "string", "example": "666,667" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let episode_ref01_data = Object.values(setup.data.existing.episode)[0];
        // LIST
        const episode_ref01_ent = client.Episode();
        const episode_ref01_match = {};
        episode_ref01_match['episode_number'] = setup.idmap['episode_number01'];
        const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/episode/EpisodeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BonequestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['episode01', 'episode02', 'episode03', 'episode_number01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BONEQUEST_TEST_EPISODE_ENTID': idmap,
        'BONEQUEST_TEST_LIVE': 'FALSE',
        'BONEQUEST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BONEQUEST_TEST_EPISODE_ENTID'];
    const live = 'TRUE' === env.BONEQUEST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BONEQUEST_TEST_EPISODE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BonequestSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BONEQUEST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=EpisodeEntity.test.js.map