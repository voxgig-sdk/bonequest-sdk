

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BonequestSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BONEQUEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('BONEQUEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BonequestSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BONEQUEST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"day":{"a":true,"h":"Day","n":"day","r":false,"sh":"Day of month published","t":"`$INTEGER`","key$":"day","index$":0},"dialog":{"a":true,"h":"Dialog","n":"dialog","r":false,"sh":"Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog","t":"`$ARRAY`","key$":"dialog","index$":1},"episode":{"a":true,"h":"Episode","n":"episode","r":false,"sh":"Episode number","t":"`$INTEGER`","key$":"episode","index$":2},"hd":{"a":true,"h":"Hd","n":"hd","r":false,"sh":"Optional array containing details about associated BoneQuest HD images","t":"`$ARRAY`","key$":"hd","index$":3},"height":{"a":true,"h":"Height","n":"height","r":false,"sh":"Image height","t":"`$INTEGER`","key$":"height","index$":4},"hifi":{"a":true,"h":"Hifi","n":"hifi","r":false,"sh":"Optional details about an associated BoneQuest HiFi episode","t":"`$OBJECT`","key$":"hifi","index$":5},"image":{"a":true,"h":"Image","n":"image","r":false,"sh":"Partial URL to episode image","t":"`$STRING`","key$":"image","index$":6},"month":{"a":true,"h":"Month","n":"month","r":false,"sh":"Month published, number between 1-12","t":"`$INTEGER`","key$":"month","index$":7},"navigation":{"a":true,"h":"Navigation","n":"navigation","r":false,"sh":"Back and next keys contain fully-formed episode for surrounding episodes","t":"`$OBJECT`","key$":"navigation","index$":8},"players":{"a":true,"h":"Players","n":"players","r":false,"sh":"Array of player names","t":"`$ARRAY`","key$":"players","index$":9},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Array of tags applied","t":"`$ARRAY`","key$":"tags","index$":10},"thumb":{"a":true,"h":"Thumb","n":"thumb","r":false,"sh":"Partial URL to thumbnail of episode image","t":"`$STRING`","key$":"thumb","index$":11},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Episode title","t":"`$STRING`","key$":"title","index$":12},"width":{"a":true,"h":"Width","n":"width","r":false,"sh":"Image width","t":"`$INTEGER`","key$":"width","index$":13},"year":{"a":true,"h":"Year","n":"year","r":false,"sh":"Year published","t":"`$INTEGER`","key$":"year","index$":14}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"\"what about nuts\"","k":"query","n":"q","or":"q","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/search/","q":{"exist":["q"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.search`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search/":{"protocol":"http","parameters":[{"name":"q","in":"query","required":true,"description":"Search query. Supports Boolean (+PERL -PISS), Tags (#PAM-GRIER), Dates (8/17), Episode # (666), and Verbatim (\"MURMPH BURMPH\")","schema":{"type":"string","example":"\"what about nuts\""},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BonequestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BONEQUEST_TEST_SEARCH_ENTID': idmap,
    'BONEQUEST_TEST_LIVE': 'FALSE',
    'BONEQUEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BONEQUEST_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.BONEQUEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BONEQUEST_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BonequestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
