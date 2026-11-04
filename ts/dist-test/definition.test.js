"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/episodes/random/{count}",
        "args": [
            {
                "name": "count",
                "wire": "count",
                "value": 1
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "episodes": [
                {
                    "episode": 6969,
                    "day": 20,
                    "month": 4,
                    "year": 2018,
                    "title": "sex change",
                    "dialog": [
                        [
                            "deuce",
                            "I WANT A SEX CHANGE"
                        ],
                        [
                            "pants",
                            "WHICH DIRECTION"
                        ],
                        [
                            "deuce",
                            "SURPRISE ME"
                        ]
                    ],
                    "players": [
                        "deuce",
                        "pants"
                    ],
                    "tags": [
                        "bonequest-hi-fi",
                        "deuce-pants",
                        "sex-change"
                    ],
                    "image": "/6969.gif",
                    "thumb": "/thumb/6969.gif",
                    "width": 575,
                    "height": 574,
                    "hd": [
                        {
                            "id": 2787,
                            "author": "eyetooth",
                            "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
                            "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
                            "mirror_url": "/hd/1.2787.jpg",
                            "thumb_url": "/hd/t/1.2787.jpg",
                            "width": 144,
                            "height": 200,
                            "link_status": ""
                        }
                    ],
                    "hifi": {
                        "hifi_id": 501,
                        "audio_url": "http://bonequesthifi.com/6969.mp3",
                        "page_url": "https://bonequesthifi.com/6969",
                        "author": "BoneQuest Hi-Fi",
                        "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
                        "duration": "0:30",
                        "create_date": 1550592000
                    },
                    "navigation": {
                        "back": [
                            {}
                        ],
                        "next": [
                            {}
                        ]
                    }
                }
            ],
            "meta": {
                "version": "bq/4.0.0",
                "contact": "root@bonequest.com",
                "url": "https://www.bonequest.com",
                "repo": "https://github.com/bonequest",
                "high": 8340,
                "queue": {
                    "empty": {
                        "day": 1,
                        "month": 1,
                        "year": 1
                    },
                    "episodes": [
                        1
                    ],
                    "size": 1
                },
                "gay": true
            }
        },
        "idField": "id"
    },
    {
        "entity": "quote",
        "accessor": "Quote",
        "op": "list",
        "method": "GET",
        "path": "/quote/random",
        "action": "random",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "episodes": [
                {
                    "episode": 6969,
                    "day": 20,
                    "month": 4,
                    "year": 2018,
                    "title": "sex change",
                    "dialog": [
                        [
                            "deuce",
                            "I WANT A SEX CHANGE"
                        ],
                        [
                            "pants",
                            "WHICH DIRECTION"
                        ],
                        [
                            "deuce",
                            "SURPRISE ME"
                        ]
                    ],
                    "players": [
                        "deuce",
                        "pants"
                    ],
                    "tags": [
                        "bonequest-hi-fi",
                        "deuce-pants",
                        "sex-change"
                    ],
                    "image": "/6969.gif",
                    "thumb": "/thumb/6969.gif",
                    "width": 575,
                    "height": 574,
                    "hd": [
                        {
                            "id": 2787,
                            "author": "eyetooth",
                            "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
                            "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
                            "mirror_url": "/hd/1.2787.jpg",
                            "thumb_url": "/hd/t/1.2787.jpg",
                            "width": 144,
                            "height": 200,
                            "link_status": ""
                        }
                    ],
                    "hifi": {
                        "hifi_id": 501,
                        "audio_url": "http://bonequesthifi.com/6969.mp3",
                        "page_url": "https://bonequesthifi.com/6969",
                        "author": "BoneQuest Hi-Fi",
                        "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
                        "duration": "0:30",
                        "create_date": 1550592000
                    },
                    "navigation": {
                        "back": [
                            {}
                        ],
                        "next": [
                            {}
                        ]
                    }
                }
            ],
            "quote": {},
            "meta": {
                "version": "bq/4.0.0",
                "contact": "root@bonequest.com",
                "url": "https://www.bonequest.com",
                "repo": "https://github.com/bonequest",
                "high": 8340,
                "queue": {
                    "empty": {
                        "day": 1,
                        "month": 1,
                        "year": 1
                    },
                    "episodes": [
                        1
                    ],
                    "size": 1
                },
                "gay": true
            }
        },
        "idField": "id"
    },
    {
        "entity": "search",
        "accessor": "Search",
        "op": "list",
        "method": "GET",
        "path": "/search/",
        "args": [],
        "select": {
            "q": "\"what about nuts\""
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "q"
        ],
        "queryArgs": [
            {
                "name": "q",
                "wire": "q"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "episodes": [
                {
                    "episode": 6969,
                    "day": 20,
                    "month": 4,
                    "year": 2018,
                    "title": "sex change",
                    "dialog": [
                        [
                            "deuce",
                            "I WANT A SEX CHANGE"
                        ],
                        [
                            "pants",
                            "WHICH DIRECTION"
                        ],
                        [
                            "deuce",
                            "SURPRISE ME"
                        ]
                    ],
                    "players": [
                        "deuce",
                        "pants"
                    ],
                    "tags": [
                        "bonequest-hi-fi",
                        "deuce-pants",
                        "sex-change"
                    ],
                    "image": "/6969.gif",
                    "thumb": "/thumb/6969.gif",
                    "width": 575,
                    "height": 574,
                    "hd": [
                        {
                            "id": 2787,
                            "author": "eyetooth",
                            "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
                            "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
                            "mirror_url": "/hd/1.2787.jpg",
                            "thumb_url": "/hd/t/1.2787.jpg",
                            "width": 144,
                            "height": 200,
                            "link_status": ""
                        }
                    ],
                    "hifi": {
                        "hifi_id": 501,
                        "audio_url": "http://bonequesthifi.com/6969.mp3",
                        "page_url": "https://bonequesthifi.com/6969",
                        "author": "BoneQuest Hi-Fi",
                        "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
                        "duration": "0:30",
                        "create_date": 1550592000
                    },
                    "navigation": {
                        "back": [
                            {}
                        ],
                        "next": [
                            {}
                        ]
                    }
                }
            ],
            "search": {
                "query": "\"what about nuts\"",
                "runtime": 0.0002644062042236328,
                "version": "4",
                "sums": {
                    "dates": 0,
                    "episodes": 0,
                    "tags": 0,
                    "titles": 0,
                    "words": 1
                }
            },
            "meta": {
                "version": "bq/4.0.0",
                "contact": "root@bonequest.com",
                "url": "https://www.bonequest.com",
                "repo": "https://github.com/bonequest",
                "high": 8340,
                "queue": {
                    "empty": {
                        "day": 1,
                        "month": 1,
                        "year": 1
                    },
                    "episodes": [
                        1
                    ],
                    "size": 1
                },
                "gay": true
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map