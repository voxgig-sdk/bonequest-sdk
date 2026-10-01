import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "load",
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
    "query": [],
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
              "author": "eyetooth",
              "height": 200,
              "id": 2787,
              "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
              "link_status": "",
              "mirror_url": "/hd/1.2787.jpg",
              "thumb_url": "/hd/t/1.2787.jpg",
              "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
              "width": 144
            }
          ],
          "hifi": {
            "audio_url": "http://bonequesthifi.com/6969.mp3",
            "author": "BoneQuest Hi-Fi",
            "create_date": 1550592000,
            "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
            "duration": "0:30",
            "hifi_id": 501,
            "page_url": "https://bonequesthifi.com/6969"
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
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "episodes": [
        {
          "day": 20,
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
          "episode": 6969,
          "hd": [
            {
              "author": "eyetooth",
              "height": 200,
              "id": 2787,
              "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
              "link_status": "",
              "mirror_url": "/hd/1.2787.jpg",
              "thumb_url": "/hd/t/1.2787.jpg",
              "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
              "width": 144
            }
          ],
          "height": 574,
          "hifi": {
            "audio_url": "http://bonequesthifi.com/6969.mp3",
            "author": "BoneQuest Hi-Fi",
            "create_date": 1550592000,
            "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
            "duration": "0:30",
            "hifi_id": 501,
            "page_url": "https://bonequesthifi.com/6969"
          },
          "image": "/6969.gif",
          "month": 4,
          "navigation": {
            "back": [
              {}
            ],
            "next": [
              {}
            ]
          },
          "players": [
            "deuce",
            "pants"
          ],
          "tags": [
            "bonequest-hi-fi",
            "deuce-pants",
            "sex-change"
          ],
          "thumb": "/thumb/6969.gif",
          "title": "sex change",
          "width": 575,
          "year": 2018
        }
      ],
      "quote": {},
      "meta": {
        "contact": "root@bonequest.com",
        "gay": true,
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
        "repo": "https://github.com/bonequest",
        "url": "https://www.bonequest.com",
        "version": "bq/4.0.0"
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
    "query": [
      "q"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "episodes": [
        {
          "day": 20,
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
          "episode": 6969,
          "hd": [
            {
              "author": "eyetooth",
              "height": 200,
              "id": 2787,
              "image": "http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png",
              "link_status": "",
              "mirror_url": "/hd/1.2787.jpg",
              "thumb_url": "/hd/t/1.2787.jpg",
              "url": "http://jerkcityhd.tumblr.com/post/48734349486/up-late",
              "width": 144
            }
          ],
          "height": 574,
          "hifi": {
            "audio_url": "http://bonequesthifi.com/6969.mp3",
            "author": "BoneQuest Hi-Fi",
            "create_date": 1550592000,
            "description": "an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\nit's time.\n~BoneQuest Hi-Fi",
            "duration": "0:30",
            "hifi_id": 501,
            "page_url": "https://bonequesthifi.com/6969"
          },
          "image": "/6969.gif",
          "month": 4,
          "navigation": {
            "back": [
              {}
            ],
            "next": [
              {}
            ]
          },
          "players": [
            "deuce",
            "pants"
          ],
          "tags": [
            "bonequest-hi-fi",
            "deuce-pants",
            "sex-change"
          ],
          "thumb": "/thumb/6969.gif",
          "title": "sex change",
          "width": 575,
          "year": 2018
        }
      ],
      "search": {
        "query": "\"what about nuts\"",
        "runtime": 0.0002644062042236328,
        "sums": {
          "dates": 0,
          "episodes": 0,
          "tags": 0,
          "titles": 0,
          "words": 1
        },
        "version": "4"
      },
      "meta": {
        "contact": "root@bonequest.com",
        "gay": true,
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
        "repo": "https://github.com/bonequest",
        "url": "https://www.bonequest.com",
        "version": "bq/4.0.0"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
