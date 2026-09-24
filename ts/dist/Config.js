"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Bonequest',
        slug: "bonequest",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.bonequest.com/api/v2",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            episode: {},
            quote: {},
            search: {},
        }
    };
    entity = {
        "episode": {
            "fields": [
                {
                    "name": "episodes",
                    "title": "Episodes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "short": "API metadata wrapper"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes/random/{count}",
                            "segments": [
                                {
                                    "lit": "episodes"
                                },
                                {
                                    "lit": "random"
                                },
                                {
                                    "var": "count"
                                }
                            ],
                            "parts": [
                                "episodes",
                                "random",
                                "{count}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "count"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episode/{episodeNumber}",
                            "segments": [
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "episode",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "episodeNumber": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 420
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/episodes/{episodeNumbers}",
                            "segments": [
                                {
                                    "lit": "episodes"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "episodes",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "episodeNumbers": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_number",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "666,667"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "quote": {
            "fields": [],
            "name": "quote",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/quote/random",
                            "segments": [
                                {
                                    "lit": "quote"
                                },
                                {
                                    "lit": "random"
                                }
                            ],
                            "parts": [
                                "quote",
                                "random"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.quote`"
                            },
                            "args": {},
                            "select": {
                                "$action": "random"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "day",
                    "title": "Day",
                    "type": "`$INTEGER`",
                    "short": "Day of month published"
                },
                {
                    "name": "dialog",
                    "title": "Dialog",
                    "type": "`$ARRAY`",
                    "short": "Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog"
                },
                {
                    "name": "episode",
                    "title": "Episode",
                    "type": "`$INTEGER`",
                    "short": "Episode number"
                },
                {
                    "name": "hd",
                    "title": "Hd",
                    "type": "`$ARRAY`",
                    "short": "Optional array containing details about associated BoneQuest HD images"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`",
                    "short": "Image height"
                },
                {
                    "name": "hifi",
                    "title": "Hifi",
                    "type": "`$OBJECT`",
                    "short": "Optional details about an associated BoneQuest HiFi episode"
                },
                {
                    "name": "image",
                    "title": "Image",
                    "type": "`$STRING`",
                    "short": "Partial URL to episode image"
                },
                {
                    "name": "month",
                    "title": "Month",
                    "type": "`$INTEGER`",
                    "short": "Month published, number between 1-12"
                },
                {
                    "name": "navigation",
                    "title": "Navigation",
                    "type": "`$OBJECT`",
                    "short": "Back and next keys contain fully-formed episode for surrounding episodes"
                },
                {
                    "name": "players",
                    "title": "Players",
                    "type": "`$ARRAY`",
                    "short": "Array of player names"
                },
                {
                    "name": "tags",
                    "title": "Tags",
                    "type": "`$ARRAY`",
                    "short": "Array of tags applied"
                },
                {
                    "name": "thumb",
                    "title": "Thumb",
                    "type": "`$STRING`",
                    "short": "Partial URL to thumbnail of episode image"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Episode title"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`",
                    "short": "Image width"
                },
                {
                    "name": "year",
                    "title": "Year",
                    "type": "`$INTEGER`",
                    "short": "Year published"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search/",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.search`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "\"what about nuts\""
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "q"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map