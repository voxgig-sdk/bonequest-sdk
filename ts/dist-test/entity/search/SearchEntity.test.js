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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "day", "req": false, "short": "Day of month published", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "dialog", "req": false, "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "episode", "req": false, "short": "Episode number", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "hd", "req": false, "short": "Optional array containing details about associated BoneQuest HD images", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "height", "req": false, "short": "Image height", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "hifi", "req": false, "short": "Optional details about an associated BoneQuest HiFi episode", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "image", "req": false, "short": "Partial URL to episode image", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "month", "req": false, "short": "Month published, number between 1-12", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "navigation", "req": false, "short": "Back and next keys contain fully-formed episode for surrounding episodes", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "players", "req": false, "short": "Array of player names", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "tags", "req": false, "short": "Array of tags applied", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "thumb", "req": false, "short": "Partial URL to thumbnail of episode image", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "title", "req": false, "short": "Episode title", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "width", "req": false, "short": "Image width", "type": "`$INTEGER`", "index$": 13 }, { "active": true, "name": "year", "req": false, "short": "Year published", "type": "`$INTEGER`", "index$": 14 }], "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "\"what about nuts\"", "kind": "query", "name": "q", "orig": "q", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /search/", "json": "{\"operationId\":\"searchEpisodes\",\"parameters\":[{\"description\":\"Search query. Supports Boolean (+PERL -PISS), Tags (#PAM-GRIER), Dates (8/17), Episode # (666), and Verbatim (\\\"MURMPH BURMPH\\\")\",\"in\":\"query\",\"name\":\"q\",\"required\":true,\"schema\":{\"example\":\"\\\"what about nuts\\\"\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"episodes\":{\"items\":{\"properties\":{\"day\":{\"description\":\"Day of month published\",\"example\":20,\"maximum\":31,\"minimum\":1,\"type\":\"integer\"},\"dialog\":{\"description\":\"Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog\",\"example\":[[\"deuce\",\"I WANT A SEX CHANGE\"],[\"pants\",\"WHICH DIRECTION\"],[\"deuce\",\"SURPRISE ME\"]],\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"array\"},\"episode\":{\"description\":\"Episode number\",\"example\":6969,\"type\":\"integer\"},\"hd\":{\"description\":\"Optional array containing details about associated BoneQuest HD images\",\"items\":{\"description\":\"Details about an associated BoneQuest HD image\",\"properties\":{\"author\":{\"description\":\"Original author, typically a Tumblr username\",\"example\":\"eyetooth\",\"type\":\"string\"},\"height\":{\"description\":\"Image height\",\"example\":200,\"type\":\"integer\"},\"id\":{\"description\":\"Episode number\",\"example\":2787,\"type\":\"integer\"},\"image\":{\"description\":\"URL to full-size image\",\"example\":\"http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png\",\"type\":\"string\"},\"link_status\":{\"description\":\"Empty string if URL is valid\",\"example\":\"\",\"type\":\"string\"},\"mirror_url\":{\"description\":\"Partial URL to image if link_status is bad\",\"example\":\"/hd/1.2787.jpg\",\"type\":\"string\"},\"thumb_url\":{\"description\":\"Partial URL to thumbnail image\",\"example\":\"/hd/t/1.2787.jpg\",\"type\":\"string\"},\"url\":{\"description\":\"Fully-qualified URL to HD page\",\"example\":\"http://jerkcityhd.tumblr.com/post/48734349486/up-late\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":144,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"height\":{\"description\":\"Image height\",\"example\":574,\"type\":\"integer\"},\"hifi\":{\"description\":\"Optional details about an associated BoneQuest HiFi episode\",\"properties\":{\"audio_url\":{\"description\":\"URL to mp3 file\",\"example\":\"http://bonequesthifi.com/6969.mp3\",\"type\":\"string\"},\"author\":{\"description\":\"Who made the HiFi episode\",\"example\":\"BoneQuest Hi-Fi\",\"type\":\"string\"},\"create_date\":{\"description\":\"Date of creation in seconds since UNIX epoch\",\"example\":1550592000,\"type\":\"integer\"},\"description\":{\"description\":\"Details about the episode in plain text\",\"example\":\"an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\\nit's time.\\n~BoneQuest Hi-Fi\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration in HH:MM:SS format\",\"example\":\"0:30\",\"type\":\"string\"},\"hifi_id\":{\"description\":\"Unique HiFi ID number\",\"example\":501,\"type\":\"integer\"},\"page_url\":{\"description\":\"URL to bonequesthifi.com page\",\"example\":\"https://bonequesthifi.com/6969\",\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"description\":\"Partial URL to episode image\",\"example\":\"/6969.gif\",\"type\":\"string\"},\"month\":{\"description\":\"Month published, number between 1-12\",\"example\":4,\"maximum\":12,\"minimum\":1,\"type\":\"integer\"},\"navigation\":{\"description\":\"Back and next keys contain fully-formed episode for surrounding episodes\",\"properties\":{\"back\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"players\":{\"description\":\"Array of player names\",\"example\":[\"deuce\",\"pants\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Array of tags applied\",\"example\":[\"bonequest-hi-fi\",\"deuce-pants\",\"sex-change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"thumb\":{\"description\":\"Partial URL to thumbnail of episode image\",\"example\":\"/thumb/6969.gif\",\"type\":\"string\"},\"title\":{\"description\":\"Episode title\",\"example\":\"sex change\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":575,\"type\":\"integer\"},\"year\":{\"description\":\"Year published\",\"example\":2018,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"API metadata wrapper\",\"properties\":{\"contact\":{\"description\":\"Preferred email address\",\"example\":\"root@bonequest.com\",\"type\":\"string\"},\"gay\":{\"example\":true,\"type\":\"boolean\"},\"high\":{\"description\":\"Highest episode number published so far\",\"example\":8340,\"type\":\"integer\"},\"queue\":{\"description\":\"Information about episode queue\",\"properties\":{\"empty\":{\"description\":\"Date when we run out of episodes queued for publication\",\"properties\":{\"day\":{\"type\":\"integer\"},\"month\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"episodes\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"size\":{\"type\":\"integer\"}},\"type\":\"object\"},\"repo\":{\"description\":\"URL to repository\",\"example\":\"https://github.com/bonequest\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails\",\"example\":\"https://www.bonequest.com\",\"type\":\"string\"},\"version\":{\"description\":\"API version\",\"example\":\"bq/4.0.0\",\"type\":\"string\"}},\"type\":\"object\"},\"search\":{\"description\":\"Search metadata\",\"properties\":{\"query\":{\"description\":\"The search query that was executed\",\"example\":\"\\\"what about nuts\\\"\",\"type\":\"string\"},\"runtime\":{\"description\":\"Time to perform query in seconds\",\"example\":0.0002644062042236328,\"type\":\"number\"},\"sums\":{\"description\":\"Counts of classification of results\",\"properties\":{\"dates\":{\"example\":0,\"type\":\"integer\"},\"episodes\":{\"example\":0,\"type\":\"integer\"},\"tags\":{\"example\":0,\"type\":\"integer\"},\"titles\":{\"example\":0,\"type\":\"integer\"},\"words\":{\"example\":1,\"type\":\"integer\"}},\"type\":\"object\"},\"version\":{\"description\":\"Search engine version number\",\"example\":\"4\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/search/", "segments": [{ "lit": "search" }], "select": { "exist": ["q"] }, "transform": { "req": "`reqdata`", "res": "`body.search`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 2 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search');
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