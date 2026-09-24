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
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BONEQUEST_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'episode.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "episodes": { "a": true, "h": "Episodes", "n": "episodes", "r": false, "t": "`$ARRAY`", "key$": "episodes", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "sh": "API metadata wrapper", "t": "`$OBJECT`", "key$": "meta", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "episode", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /episodes/random/{count}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 1, "k": "param", "n": "count", "or": "count", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episodes/random/{count}", "q": { "exist": ["count"] }, "r": {}, "s": [{ "lit": "episodes" }, { "lit": "random" }, { "var": "count" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /episode/{episodeNumber}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 420, "k": "param", "n": "id", "or": "episode_number", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episode/{episodeNumber}", "q": { "exist": ["id"] }, "r": { "param": { "episodeNumber": "id" } }, "s": [{ "lit": "episode" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /episodes/{episodeNumbers}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "666,667", "k": "param", "n": "id", "or": "episode_number", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/episodes/{episodeNumbers}", "q": { "exist": ["id"] }, "r": { "param": { "episodeNumbers": "id" } }, "s": [{ "lit": "episodes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "episode", "name__orig": "episode", "Name": "Episode", "name_": "episode", "name-": "episode", "NAME": "EPISODE", "index$": 0 }, { "active": true, "entity": "episode", "key$": "BasicEpisodeFlow", "kind": "basic", "name": "BasicEpisodeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "episode_ref01", "srcdatavar": "episode_ref01_data", "suffix": "_dt0" }, "m": { "id": "episode01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-episode_ref01" } }], "index$": 0 }] }, 'Episode', { "GET /episodes/random/{count}": { "protocol": "http", "operationId": "getRandomEpisodes", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "episodes": { "type": "array", "items": { "type": "object", "properties": { "episode": { "description": "Episode number", "example": 6969, "type": "integer" }, "day": { "description": "Day of month published", "example": 20, "maximum": 31, "minimum": 1, "type": "integer" }, "month": { "description": "Month published, number between 1-12", "example": 4, "maximum": 12, "minimum": 1, "type": "integer" }, "year": { "description": "Year published", "example": 2018, "type": "integer" }, "title": { "description": "Episode title", "example": "sex change", "type": "string" }, "dialog": { "description": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "example": [["deuce", "I WANT A SEX CHANGE"], ["pants", "WHICH DIRECTION"], ["deuce", "SURPRISE ME"]], "items": { "items": { "type": "string" }, "type": "array" }, "type": "array" }, "players": { "description": "Array of player names", "example": ["deuce", "pants"], "items": { "type": "string" }, "type": "array" }, "tags": { "description": "Array of tags applied", "example": ["bonequest-hi-fi", "deuce-pants", "sex-change"], "items": { "type": "string" }, "type": "array" }, "image": { "description": "Partial URL to episode image", "example": "/6969.gif", "type": "string" }, "thumb": { "description": "Partial URL to thumbnail of episode image", "example": "/thumb/6969.gif", "type": "string" }, "width": { "description": "Image width", "example": 575, "type": "integer" }, "height": { "description": "Image height", "example": 574, "type": "integer" }, "hd": { "description": "Optional array containing details about associated BoneQuest HD images", "items": { "description": "Details about an associated BoneQuest HD image", "properties": { "author": { "description": "Original author, typically a Tumblr username", "example": "eyetooth", "type": "string" }, "height": { "description": "Image height", "example": 200, "type": "integer" }, "id": { "description": "Episode number", "example": 2787, "type": "integer" }, "image": { "description": "URL to full-size image", "example": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png", "type": "string" }, "link_status": { "description": "Empty string if URL is valid", "example": "", "type": "string" }, "mirror_url": { "description": "Partial URL to image if link_status is bad", "example": "/hd/1.2787.jpg", "type": "string" }, "thumb_url": { "description": "Partial URL to thumbnail image", "example": "/hd/t/1.2787.jpg", "type": "string" }, "url": { "description": "Fully-qualified URL to HD page", "example": "http://jerkcityhd.tumblr.com/post/48734349486/up-late", "type": "string" }, "width": { "description": "Image width", "example": 144, "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/HDImage" }, "type": "array" }, "hifi": { "description": "Optional details about an associated BoneQuest HiFi episode", "properties": { "audio_url": { "description": "URL to mp3 file", "example": "http://bonequesthifi.com/6969.mp3", "type": "string" }, "author": { "description": "Who made the HiFi episode", "example": "BoneQuest Hi-Fi", "type": "string" }, "create_date": { "description": "Date of creation in seconds since UNIX epoch", "example": 1550592000, "type": "integer" }, "description": { "description": "Details about the episode in plain text", "example": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi", "type": "string" }, "duration": { "description": "Duration in HH:MM:SS format", "example": "0:30", "type": "string" }, "hifi_id": { "description": "Unique HiFi ID number", "example": 501, "type": "integer" }, "page_url": { "description": "URL to bonequesthifi.com page", "example": "https://bonequesthifi.com/6969", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/HiFi" }, "navigation": { "description": "Back and next keys contain fully-formed episode for surrounding episodes", "properties": { "back": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" }, "next": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" } }, "type": "object" } }, "x-ref": "#/components/schemas/Episode" }, "key$": "episodes" }, "meta": { "type": "object", "description": "API metadata wrapper", "properties": { "version": { "description": "API version", "example": "bq/4.0.0", "type": "string" }, "contact": { "description": "Preferred email address", "example": "root@bonequest.com", "type": "string" }, "url": { "description": "Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails", "example": "https://www.bonequest.com", "type": "string" }, "repo": { "description": "URL to repository", "example": "https://github.com/bonequest", "type": "string" }, "high": { "description": "Highest episode number published so far", "example": 8340, "type": "integer" }, "queue": { "description": "Information about episode queue", "properties": { "empty": { "description": "Date when we run out of episodes queued for publication", "properties": { "day": { "type": "integer" }, "month": { "type": "integer" }, "year": { "type": "integer" } }, "type": "object" }, "episodes": { "items": { "type": "integer" }, "type": "array" }, "size": { "type": "integer" } }, "type": "object" }, "gay": { "example": true, "type": "boolean" } }, "x-ref": "#/components/schemas/Meta", "key$": "meta" } }, "x-ref": "#/components/schemas/EpisodeResponse", "index$": 0 } } } } }, "parameters": [{ "name": "count", "in": "path", "required": true, "description": "The number of random episodes to retrieve", "schema": { "type": "integer", "minimum": 1, "example": 1 }, "index$": 0 }], "securitySource": "unspecified" }, "GET /episode/{episodeNumber}": { "protocol": "http", "operationId": "getEpisode", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "episodes": { "type": "array", "items": { "type": "object", "properties": { "episode": { "description": "Episode number", "example": 6969, "type": "integer" }, "day": { "description": "Day of month published", "example": 20, "maximum": 31, "minimum": 1, "type": "integer" }, "month": { "description": "Month published, number between 1-12", "example": 4, "maximum": 12, "minimum": 1, "type": "integer" }, "year": { "description": "Year published", "example": 2018, "type": "integer" }, "title": { "description": "Episode title", "example": "sex change", "type": "string" }, "dialog": { "description": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "example": [["deuce", "I WANT A SEX CHANGE"], ["pants", "WHICH DIRECTION"], ["deuce", "SURPRISE ME"]], "items": { "items": { "type": "string" }, "type": "array" }, "type": "array" }, "players": { "description": "Array of player names", "example": ["deuce", "pants"], "items": { "type": "string" }, "type": "array" }, "tags": { "description": "Array of tags applied", "example": ["bonequest-hi-fi", "deuce-pants", "sex-change"], "items": { "type": "string" }, "type": "array" }, "image": { "description": "Partial URL to episode image", "example": "/6969.gif", "type": "string" }, "thumb": { "description": "Partial URL to thumbnail of episode image", "example": "/thumb/6969.gif", "type": "string" }, "width": { "description": "Image width", "example": 575, "type": "integer" }, "height": { "description": "Image height", "example": 574, "type": "integer" }, "hd": { "description": "Optional array containing details about associated BoneQuest HD images", "items": { "description": "Details about an associated BoneQuest HD image", "properties": { "author": { "description": "Original author, typically a Tumblr username", "example": "eyetooth", "type": "string" }, "height": { "description": "Image height", "example": 200, "type": "integer" }, "id": { "description": "Episode number", "example": 2787, "type": "integer" }, "image": { "description": "URL to full-size image", "example": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png", "type": "string" }, "link_status": { "description": "Empty string if URL is valid", "example": "", "type": "string" }, "mirror_url": { "description": "Partial URL to image if link_status is bad", "example": "/hd/1.2787.jpg", "type": "string" }, "thumb_url": { "description": "Partial URL to thumbnail image", "example": "/hd/t/1.2787.jpg", "type": "string" }, "url": { "description": "Fully-qualified URL to HD page", "example": "http://jerkcityhd.tumblr.com/post/48734349486/up-late", "type": "string" }, "width": { "description": "Image width", "example": 144, "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/HDImage" }, "type": "array" }, "hifi": { "description": "Optional details about an associated BoneQuest HiFi episode", "properties": { "audio_url": { "description": "URL to mp3 file", "example": "http://bonequesthifi.com/6969.mp3", "type": "string" }, "author": { "description": "Who made the HiFi episode", "example": "BoneQuest Hi-Fi", "type": "string" }, "create_date": { "description": "Date of creation in seconds since UNIX epoch", "example": 1550592000, "type": "integer" }, "description": { "description": "Details about the episode in plain text", "example": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi", "type": "string" }, "duration": { "description": "Duration in HH:MM:SS format", "example": "0:30", "type": "string" }, "hifi_id": { "description": "Unique HiFi ID number", "example": 501, "type": "integer" }, "page_url": { "description": "URL to bonequesthifi.com page", "example": "https://bonequesthifi.com/6969", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/HiFi" }, "navigation": { "description": "Back and next keys contain fully-formed episode for surrounding episodes", "properties": { "back": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" }, "next": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" } }, "type": "object" } }, "x-ref": "#/components/schemas/Episode" }, "key$": "episodes" }, "meta": { "type": "object", "description": "API metadata wrapper", "properties": { "version": { "description": "API version", "example": "bq/4.0.0", "type": "string" }, "contact": { "description": "Preferred email address", "example": "root@bonequest.com", "type": "string" }, "url": { "description": "Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails", "example": "https://www.bonequest.com", "type": "string" }, "repo": { "description": "URL to repository", "example": "https://github.com/bonequest", "type": "string" }, "high": { "description": "Highest episode number published so far", "example": 8340, "type": "integer" }, "queue": { "description": "Information about episode queue", "properties": { "empty": { "description": "Date when we run out of episodes queued for publication", "properties": { "day": { "type": "integer" }, "month": { "type": "integer" }, "year": { "type": "integer" } }, "type": "object" }, "episodes": { "items": { "type": "integer" }, "type": "array" }, "size": { "type": "integer" } }, "type": "object" }, "gay": { "example": true, "type": "boolean" } }, "x-ref": "#/components/schemas/Meta", "key$": "meta" } }, "x-ref": "#/components/schemas/EpisodeResponse", "index$": 0 } } } } }, "parameters": [{ "name": "episodeNumber", "in": "path", "required": true, "description": "The episode number to retrieve", "schema": { "type": "integer", "example": 420 }, "index$": 0 }], "securitySource": "unspecified" }, "GET /episodes/{episodeNumbers}": { "protocol": "http", "operationId": "getEpisodes", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "episodes": { "type": "array", "items": { "type": "object", "properties": { "episode": { "description": "Episode number", "example": 6969, "type": "integer" }, "day": { "description": "Day of month published", "example": 20, "maximum": 31, "minimum": 1, "type": "integer" }, "month": { "description": "Month published, number between 1-12", "example": 4, "maximum": 12, "minimum": 1, "type": "integer" }, "year": { "description": "Year published", "example": 2018, "type": "integer" }, "title": { "description": "Episode title", "example": "sex change", "type": "string" }, "dialog": { "description": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog", "example": [["deuce", "I WANT A SEX CHANGE"], ["pants", "WHICH DIRECTION"], ["deuce", "SURPRISE ME"]], "items": { "items": { "type": "string" }, "type": "array" }, "type": "array" }, "players": { "description": "Array of player names", "example": ["deuce", "pants"], "items": { "type": "string" }, "type": "array" }, "tags": { "description": "Array of tags applied", "example": ["bonequest-hi-fi", "deuce-pants", "sex-change"], "items": { "type": "string" }, "type": "array" }, "image": { "description": "Partial URL to episode image", "example": "/6969.gif", "type": "string" }, "thumb": { "description": "Partial URL to thumbnail of episode image", "example": "/thumb/6969.gif", "type": "string" }, "width": { "description": "Image width", "example": 575, "type": "integer" }, "height": { "description": "Image height", "example": 574, "type": "integer" }, "hd": { "description": "Optional array containing details about associated BoneQuest HD images", "items": { "description": "Details about an associated BoneQuest HD image", "properties": { "author": { "description": "Original author, typically a Tumblr username", "example": "eyetooth", "type": "string" }, "height": { "description": "Image height", "example": 200, "type": "integer" }, "id": { "description": "Episode number", "example": 2787, "type": "integer" }, "image": { "description": "URL to full-size image", "example": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png", "type": "string" }, "link_status": { "description": "Empty string if URL is valid", "example": "", "type": "string" }, "mirror_url": { "description": "Partial URL to image if link_status is bad", "example": "/hd/1.2787.jpg", "type": "string" }, "thumb_url": { "description": "Partial URL to thumbnail image", "example": "/hd/t/1.2787.jpg", "type": "string" }, "url": { "description": "Fully-qualified URL to HD page", "example": "http://jerkcityhd.tumblr.com/post/48734349486/up-late", "type": "string" }, "width": { "description": "Image width", "example": 144, "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/HDImage" }, "type": "array" }, "hifi": { "description": "Optional details about an associated BoneQuest HiFi episode", "properties": { "audio_url": { "description": "URL to mp3 file", "example": "http://bonequesthifi.com/6969.mp3", "type": "string" }, "author": { "description": "Who made the HiFi episode", "example": "BoneQuest Hi-Fi", "type": "string" }, "create_date": { "description": "Date of creation in seconds since UNIX epoch", "example": 1550592000, "type": "integer" }, "description": { "description": "Details about the episode in plain text", "example": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi", "type": "string" }, "duration": { "description": "Duration in HH:MM:SS format", "example": "0:30", "type": "string" }, "hifi_id": { "description": "Unique HiFi ID number", "example": 501, "type": "integer" }, "page_url": { "description": "URL to bonequesthifi.com page", "example": "https://bonequesthifi.com/6969", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/HiFi" }, "navigation": { "description": "Back and next keys contain fully-formed episode for surrounding episodes", "properties": { "back": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" }, "next": { "items": { "properties": "[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]", "type": "object", "x-ref": "#/components/schemas/Episode" }, "type": "array" } }, "type": "object" } }, "x-ref": "#/components/schemas/Episode" }, "key$": "episodes" }, "meta": { "type": "object", "description": "API metadata wrapper", "properties": { "version": { "description": "API version", "example": "bq/4.0.0", "type": "string" }, "contact": { "description": "Preferred email address", "example": "root@bonequest.com", "type": "string" }, "url": { "description": "Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails", "example": "https://www.bonequest.com", "type": "string" }, "repo": { "description": "URL to repository", "example": "https://github.com/bonequest", "type": "string" }, "high": { "description": "Highest episode number published so far", "example": 8340, "type": "integer" }, "queue": { "description": "Information about episode queue", "properties": { "empty": { "description": "Date when we run out of episodes queued for publication", "properties": { "day": { "type": "integer" }, "month": { "type": "integer" }, "year": { "type": "integer" } }, "type": "object" }, "episodes": { "items": { "type": "integer" }, "type": "array" }, "size": { "type": "integer" } }, "type": "object" }, "gay": { "example": true, "type": "boolean" } }, "x-ref": "#/components/schemas/Meta", "key$": "meta" } }, "x-ref": "#/components/schemas/EpisodeResponse", "index$": 0 } } } } }, "parameters": [{ "name": "episodeNumbers", "in": "path", "required": true, "description": "Comma-separated list of episode numbers to retrieve", "schema": { "type": "string", "example": "666,667" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let episode_ref01_data = Object.values(setup.data.existing.episode)[0];
        // LOAD
        const episode_ref01_ent = client.Episode();
        const episode_ref01_match_dt0 = {};
        episode_ref01_match_dt0.id = episode_ref01_data.id;
        const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data();
        (0, node_assert_1.default)(episode_ref01_data_dt0.id === episode_ref01_data.id);
    });
});
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
    let idmap = transform(['episode01', 'episode02', 'episode03'], {
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