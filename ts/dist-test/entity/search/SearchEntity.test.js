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
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BONEQUEST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BONEQUEST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BonequestSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BONEQUEST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "day": { "a": true, "h": "Day", "n": "day", "r": false, "sh": "Day of month published", "t": "`$INTEGER`", "key$": "day", "index$": 0 }, "dialog": { "a": true, "h": "Dialog", "n": "dialog", "r": false, "sh": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "t": "`$ARRAY`", "key$": "dialog", "index$": 1 }, "episode": { "a": true, "h": "Episode", "n": "episode", "r": false, "sh": "Episode number", "t": "`$INTEGER`", "key$": "episode", "index$": 2 }, "hd": { "a": true, "h": "Hd", "n": "hd", "r": false, "sh": "Optional array containing details about associated BoneQuest HD images", "t": "`$ARRAY`", "key$": "hd", "index$": 3 }, "height": { "a": true, "h": "Height", "n": "height", "r": false, "sh": "Image height", "t": "`$INTEGER`", "key$": "height", "index$": 4 }, "hifi": { "a": true, "h": "Hifi", "n": "hifi", "r": false, "sh": "Optional details about an associated BoneQuest HiFi episode", "t": "`$OBJECT`", "key$": "hifi", "index$": 5 }, "image": { "a": true, "h": "Image", "n": "image", "r": false, "sh": "Partial URL to episode image", "t": "`$STRING`", "key$": "image", "index$": 6 }, "month": { "a": true, "h": "Month", "n": "month", "r": false, "sh": "Month published, number between 1-12", "t": "`$INTEGER`", "key$": "month", "index$": 7 }, "navigation": { "a": true, "h": "Navigation", "n": "navigation", "r": false, "sh": "Back and next keys contain fully-formed episode for surrounding episodes", "t": "`$OBJECT`", "key$": "navigation", "index$": 8 }, "players": { "a": true, "h": "Players", "n": "players", "r": false, "sh": "Array of player names", "t": "`$ARRAY`", "key$": "players", "index$": 9 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Array of tags applied", "t": "`$ARRAY`", "key$": "tags", "index$": 10 }, "thumb": { "a": true, "h": "Thumb", "n": "thumb", "r": false, "sh": "Partial URL to thumbnail of episode image", "t": "`$STRING`", "key$": "thumb", "index$": 11 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Episode title", "t": "`$STRING`", "key$": "title", "index$": 12 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "sh": "Image width", "t": "`$INTEGER`", "key$": "width", "index$": 13 }, "year": { "a": true, "h": "Year", "n": "year", "r": false, "sh": "Year published", "t": "`$INTEGER`", "key$": "year", "index$": 14 } }, "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /search/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "\"what about nuts\"", "k": "query", "n": "q", "or": "q", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/search/", "q": { "exist": ["q"] }, "r": {}, "s": [{ "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body.search`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 2 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search', { "GET /search/": { "protocol": "http", "operationId": "searchEpisodes", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "episodes": { "items": { "properties": { "day": { "description": "Day of month published", "example": 20, "maximum": 31, "minimum": 1, "type": "integer", "key$": "day" }, "dialog": { "description": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "example": [["deuce", "I WANT A SEX CHANGE"], ["pants", "WHICH DIRECTION"], ["deuce", "SURPRISE ME"]], "items": { "items": { "type": "string" }, "type": "array" }, "type": "array", "key$": "dialog" }, "episode": { "description": "Episode number", "example": 6969, "type": "integer", "key$": "episode" }, "hd": { "description": "Optional array containing details about associated BoneQuest HD images", "items": { "description": "Details about an associated BoneQuest HD image", "properties": { "author": { "description": "Original author, typically a Tumblr username", "example": "eyetooth", "type": "string" }, "height": { "description": "Image height", "example": 200, "type": "integer" }, "id": { "description": "Episode number", "example": 2787, "type": "integer" }, "image": { "description": "URL to full-size image", "example": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png", "type": "string" }, "link_status": { "description": "Empty string if URL is valid", "example": "", "type": "string" }, "mirror_url": { "description": "Partial URL to image if link_status is bad", "example": "/hd/1.2787.jpg", "type": "string" }, "thumb_url": { "description": "Partial URL to thumbnail image", "example": "/hd/t/1.2787.jpg", "type": "string" }, "url": { "description": "Fully-qualified URL to HD page", "example": "http://jerkcityhd.tumblr.com/post/48734349486/up-late", "type": "string" }, "width": { "description": "Image width", "example": 144, "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/HDImage" }, "type": "array", "key$": "hd" }, "height": { "description": "Image height", "example": 574, "type": "integer", "key$": "height" }, "hifi": { "description": "Optional details about an associated BoneQuest HiFi episode", "properties": { "audio_url": { "description": "URL to mp3 file", "example": "http://bonequesthifi.com/6969.mp3", "type": "string" }, "author": { "description": "Who made the HiFi episode", "example": "BoneQuest Hi-Fi", "type": "string" }, "create_date": { "description": "Date of creation in seconds since UNIX epoch", "example": 1550592000, "type": "integer" }, "description": { "description": "Details about the episode in plain text", "example": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi", "type": "string" }, "duration": { "description": "Duration in HH:MM:SS format", "example": "0:30", "type": "string" }, "hifi_id": { "description": "Unique HiFi ID number", "example": 501, "type": "integer" }, "page_url": { "description": "URL to bonequesthifi.com page", "example": "https://bonequesthifi.com/6969", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/HiFi", "key$": "hifi" }, "image": { "description": "Partial URL to episode image", "example": "/6969.gif", "type": "string", "key$": "image" }, "month": { "description": "Month published, number between 1-12", "example": 4, "maximum": 12, "minimum": 1, "type": "integer", "key$": "month" }, "navigation": { "description": "Back and next keys contain fully-formed episode for surrounding episodes", "properties": { "back": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" }, "next": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" } }, "type": "object", "key$": "navigation" }, "players": { "description": "Array of player names", "example": ["deuce", "pants"], "items": { "type": "string" }, "type": "array", "key$": "players" }, "tags": { "description": "Array of tags applied", "example": ["bonequest-hi-fi", "deuce-pants", "sex-change"], "items": { "type": "string" }, "type": "array", "key$": "tags" }, "thumb": { "description": "Partial URL to thumbnail of episode image", "example": "/thumb/6969.gif", "type": "string", "key$": "thumb" }, "title": { "description": "Episode title", "example": "sex change", "type": "string", "key$": "title" }, "width": { "description": "Image width", "example": 575, "type": "integer", "key$": "width" }, "year": { "description": "Year published", "example": 2018, "type": "integer", "key$": "year" } }, "type": "object", "x-ref": "#/components/schemas/Episode", "index$": 0 }, "key$": "episodes", "type": "array" }, "search": { "description": "Search metadata", "key$": "search", "properties": { "query": { "description": "The search query that was executed", "example": "\"what about nuts\"", "type": "string" }, "runtime": { "description": "Time to perform query in seconds", "example": 0.0002644062042236328, "type": "number" }, "sums": { "description": "Counts of classification of results", "properties": { "dates": { "example": 0, "type": "integer" }, "episodes": { "example": 0, "type": "integer" }, "tags": { "example": 0, "type": "integer" }, "titles": { "example": 0, "type": "integer" }, "words": { "example": 1, "type": "integer" } }, "type": "object" }, "version": { "description": "Search engine version number", "example": "4", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/SearchMeta" }, "meta": { "description": "API metadata wrapper", "key$": "meta", "properties": { "contact": { "description": "Preferred email address", "example": "root@bonequest.com", "type": "string" }, "gay": { "example": true, "type": "boolean" }, "high": { "description": "Highest episode number published so far", "example": 8340, "type": "integer" }, "queue": { "description": "Information about episode queue", "properties": { "empty": { "description": "Date when we run out of episodes queued for publication", "properties": { "day": { "type": "integer" }, "month": { "type": "integer" }, "year": { "type": "integer" } }, "type": "object" }, "episodes": { "items": { "type": "integer" }, "type": "array" }, "size": { "type": "integer" } }, "type": "object" }, "repo": { "description": "URL to repository", "example": "https://github.com/bonequest", "type": "string" }, "url": { "description": "Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails", "example": "https://www.bonequest.com", "type": "string" }, "version": { "description": "API version", "example": "bq/4.0.0", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Meta" } }, "x-ref": "#/components/schemas/SearchResponse" } } } } }, "parameters": [{ "name": "q", "in": "query", "required": true, "description": "Search query. Supports Boolean (+PERL -PISS), Tags (#PAM-GRIER), Dates (8/17), Episode # (666), and Verbatim (\"MURMPH BURMPH\")", "schema": { "type": "string", "example": "\"what about nuts\"" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BonequestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BONEQUEST_TEST_SEARCH_ENTID': idmap,
        'BONEQUEST_TEST_LIVE': 'FALSE',
        'BONEQUEST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BONEQUEST_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.BONEQUEST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BONEQUEST_TEST_SEARCH_ENTID'];
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
//# sourceMappingURL=SearchEntity.test.js.map