

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


describe('EpisodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BONEQUEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('BONEQUEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BonequestSDK.test()
    const ent = testsdk.Episode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BONEQUEST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"episodes":{"a":true,"h":"Episodes","n":"episodes","r":false,"t":"`$ARRAY`","key$":"episodes","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"sh":"API metadata wrapper","t":"`$OBJECT`","key$":"meta","index$":2}},"id":{"field":"id","name":"id"},"name":"episode","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /episodes/random/{count}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"count","or":"count","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/episodes/random/{count}","q":{"exist":["count"]},"r":{},"s":[{"lit":"episodes"},{"lit":"random"},{"var":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /episode/{episodeNumber}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":420,"k":"param","n":"id","or":"episodeNumber","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/episode/{episodeNumber}","q":{"exist":["id"]},"r":{"param":{"episodeNumber":"id"}},"s":[{"lit":"episode"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /episodes/{episodeNumbers}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"666,667","k":"param","n":"id","or":"episodeNumbers","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/episodes/{episodeNumbers}","q":{"exist":["id"]},"r":{"param":{"episodeNumbers":"id"}},"s":[{"lit":"episodes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":0}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"m":{"id":"episode01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":0}]}, 'Episode', {"GET /episodes/random/{count}":{"protocol":"http","parameters":[{"name":"count","in":"path","required":true,"description":"The number of random episodes to retrieve","schema":{"type":"integer","minimum":1,"example":1},"index$":0}]},"GET /episode/{episodeNumber}":{"protocol":"http","parameters":[{"name":"episodeNumber","in":"path","required":true,"description":"The episode number to retrieve","schema":{"type":"integer","example":420},"index$":0}]},"GET /episodes/{episodeNumbers}":{"protocol":"http","parameters":[{"name":"episodeNumbers","in":"path","required":true,"description":"Comma-separated list of episode numbers to retrieve","schema":{"type":"string","example":"666,667"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_ref01_data = Object.values(setup.data.existing.episode)[0] as any

    // LOAD
    const episode_ref01_ent = client.Episode()
    const episode_ref01_match_dt0: any = {}
    episode_ref01_match_dt0.id = episode_ref01_data.id
    const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data()
    assert(episode_ref01_data_dt0.id === episode_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode/EpisodeTestData.json')

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
    ['episode01','episode02','episode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BONEQUEST_TEST_EPISODE_ENTID': idmap,
    'BONEQUEST_TEST_LIVE': 'FALSE',
    'BONEQUEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BONEQUEST_TEST_EPISODE_ENTID']

  const live = 'TRUE' === env.BONEQUEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BONEQUEST_TEST_EPISODE_ENTID']
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
  
