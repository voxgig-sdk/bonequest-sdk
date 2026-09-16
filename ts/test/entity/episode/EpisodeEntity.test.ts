

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"episodes","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"meta","req":false,"short":"API metadata wrapper","type":"`$OBJECT`","index$":2}],"id":{"field":"id","name":"id"},"name":"episode","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"count","orig":"count","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /episodes/random/{count}","json":"{\"operationId\":\"getRandomEpisodes\",\"parameters\":[{\"description\":\"The number of random episodes to retrieve\",\"in\":\"path\",\"name\":\"count\",\"required\":true,\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"episodes\":{\"items\":{\"properties\":{\"day\":{\"description\":\"Day of month published\",\"example\":20,\"maximum\":31,\"minimum\":1,\"type\":\"integer\"},\"dialog\":{\"description\":\"Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog\",\"example\":[[\"deuce\",\"I WANT A SEX CHANGE\"],[\"pants\",\"WHICH DIRECTION\"],[\"deuce\",\"SURPRISE ME\"]],\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"array\"},\"episode\":{\"description\":\"Episode number\",\"example\":6969,\"type\":\"integer\"},\"hd\":{\"description\":\"Optional array containing details about associated BoneQuest HD images\",\"items\":{\"description\":\"Details about an associated BoneQuest HD image\",\"properties\":{\"author\":{\"description\":\"Original author, typically a Tumblr username\",\"example\":\"eyetooth\",\"type\":\"string\"},\"height\":{\"description\":\"Image height\",\"example\":200,\"type\":\"integer\"},\"id\":{\"description\":\"Episode number\",\"example\":2787,\"type\":\"integer\"},\"image\":{\"description\":\"URL to full-size image\",\"example\":\"http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png\",\"type\":\"string\"},\"link_status\":{\"description\":\"Empty string if URL is valid\",\"example\":\"\",\"type\":\"string\"},\"mirror_url\":{\"description\":\"Partial URL to image if link_status is bad\",\"example\":\"/hd/1.2787.jpg\",\"type\":\"string\"},\"thumb_url\":{\"description\":\"Partial URL to thumbnail image\",\"example\":\"/hd/t/1.2787.jpg\",\"type\":\"string\"},\"url\":{\"description\":\"Fully-qualified URL to HD page\",\"example\":\"http://jerkcityhd.tumblr.com/post/48734349486/up-late\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":144,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"height\":{\"description\":\"Image height\",\"example\":574,\"type\":\"integer\"},\"hifi\":{\"description\":\"Optional details about an associated BoneQuest HiFi episode\",\"properties\":{\"audio_url\":{\"description\":\"URL to mp3 file\",\"example\":\"http://bonequesthifi.com/6969.mp3\",\"type\":\"string\"},\"author\":{\"description\":\"Who made the HiFi episode\",\"example\":\"BoneQuest Hi-Fi\",\"type\":\"string\"},\"create_date\":{\"description\":\"Date of creation in seconds since UNIX epoch\",\"example\":1550592000,\"type\":\"integer\"},\"description\":{\"description\":\"Details about the episode in plain text\",\"example\":\"an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\\nit's time.\\n~BoneQuest Hi-Fi\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration in HH:MM:SS format\",\"example\":\"0:30\",\"type\":\"string\"},\"hifi_id\":{\"description\":\"Unique HiFi ID number\",\"example\":501,\"type\":\"integer\"},\"page_url\":{\"description\":\"URL to bonequesthifi.com page\",\"example\":\"https://bonequesthifi.com/6969\",\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"description\":\"Partial URL to episode image\",\"example\":\"/6969.gif\",\"type\":\"string\"},\"month\":{\"description\":\"Month published, number between 1-12\",\"example\":4,\"maximum\":12,\"minimum\":1,\"type\":\"integer\"},\"navigation\":{\"description\":\"Back and next keys contain fully-formed episode for surrounding episodes\",\"properties\":{\"back\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"players\":{\"description\":\"Array of player names\",\"example\":[\"deuce\",\"pants\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Array of tags applied\",\"example\":[\"bonequest-hi-fi\",\"deuce-pants\",\"sex-change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"thumb\":{\"description\":\"Partial URL to thumbnail of episode image\",\"example\":\"/thumb/6969.gif\",\"type\":\"string\"},\"title\":{\"description\":\"Episode title\",\"example\":\"sex change\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":575,\"type\":\"integer\"},\"year\":{\"description\":\"Year published\",\"example\":2018,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"API metadata wrapper\",\"properties\":{\"contact\":{\"description\":\"Preferred email address\",\"example\":\"root@bonequest.com\",\"type\":\"string\"},\"gay\":{\"example\":true,\"type\":\"boolean\"},\"high\":{\"description\":\"Highest episode number published so far\",\"example\":8340,\"type\":\"integer\"},\"queue\":{\"description\":\"Information about episode queue\",\"properties\":{\"empty\":{\"description\":\"Date when we run out of episodes queued for publication\",\"properties\":{\"day\":{\"type\":\"integer\"},\"month\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"episodes\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"size\":{\"type\":\"integer\"}},\"type\":\"object\"},\"repo\":{\"description\":\"URL to repository\",\"example\":\"https://github.com/bonequest\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails\",\"example\":\"https://www.bonequest.com\",\"type\":\"string\"},\"version\":{\"description\":\"API version\",\"example\":\"bq/4.0.0\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episodes/random/{count}","segments":[{"lit":"episodes"},{"lit":"random"},{"var":"count"}],"select":{"exist":["count"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":420,"kind":"param","name":"id","orig":"episode_number","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /episode/{episodeNumber}","json":"{\"operationId\":\"getEpisode\",\"parameters\":[{\"description\":\"The episode number to retrieve\",\"in\":\"path\",\"name\":\"episodeNumber\",\"required\":true,\"schema\":{\"example\":420,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"episodes\":{\"items\":{\"properties\":{\"day\":{\"description\":\"Day of month published\",\"example\":20,\"maximum\":31,\"minimum\":1,\"type\":\"integer\"},\"dialog\":{\"description\":\"Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog\",\"example\":[[\"deuce\",\"I WANT A SEX CHANGE\"],[\"pants\",\"WHICH DIRECTION\"],[\"deuce\",\"SURPRISE ME\"]],\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"array\"},\"episode\":{\"description\":\"Episode number\",\"example\":6969,\"type\":\"integer\"},\"hd\":{\"description\":\"Optional array containing details about associated BoneQuest HD images\",\"items\":{\"description\":\"Details about an associated BoneQuest HD image\",\"properties\":{\"author\":{\"description\":\"Original author, typically a Tumblr username\",\"example\":\"eyetooth\",\"type\":\"string\"},\"height\":{\"description\":\"Image height\",\"example\":200,\"type\":\"integer\"},\"id\":{\"description\":\"Episode number\",\"example\":2787,\"type\":\"integer\"},\"image\":{\"description\":\"URL to full-size image\",\"example\":\"http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png\",\"type\":\"string\"},\"link_status\":{\"description\":\"Empty string if URL is valid\",\"example\":\"\",\"type\":\"string\"},\"mirror_url\":{\"description\":\"Partial URL to image if link_status is bad\",\"example\":\"/hd/1.2787.jpg\",\"type\":\"string\"},\"thumb_url\":{\"description\":\"Partial URL to thumbnail image\",\"example\":\"/hd/t/1.2787.jpg\",\"type\":\"string\"},\"url\":{\"description\":\"Fully-qualified URL to HD page\",\"example\":\"http://jerkcityhd.tumblr.com/post/48734349486/up-late\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":144,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"height\":{\"description\":\"Image height\",\"example\":574,\"type\":\"integer\"},\"hifi\":{\"description\":\"Optional details about an associated BoneQuest HiFi episode\",\"properties\":{\"audio_url\":{\"description\":\"URL to mp3 file\",\"example\":\"http://bonequesthifi.com/6969.mp3\",\"type\":\"string\"},\"author\":{\"description\":\"Who made the HiFi episode\",\"example\":\"BoneQuest Hi-Fi\",\"type\":\"string\"},\"create_date\":{\"description\":\"Date of creation in seconds since UNIX epoch\",\"example\":1550592000,\"type\":\"integer\"},\"description\":{\"description\":\"Details about the episode in plain text\",\"example\":\"an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\\nit's time.\\n~BoneQuest Hi-Fi\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration in HH:MM:SS format\",\"example\":\"0:30\",\"type\":\"string\"},\"hifi_id\":{\"description\":\"Unique HiFi ID number\",\"example\":501,\"type\":\"integer\"},\"page_url\":{\"description\":\"URL to bonequesthifi.com page\",\"example\":\"https://bonequesthifi.com/6969\",\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"description\":\"Partial URL to episode image\",\"example\":\"/6969.gif\",\"type\":\"string\"},\"month\":{\"description\":\"Month published, number between 1-12\",\"example\":4,\"maximum\":12,\"minimum\":1,\"type\":\"integer\"},\"navigation\":{\"description\":\"Back and next keys contain fully-formed episode for surrounding episodes\",\"properties\":{\"back\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"players\":{\"description\":\"Array of player names\",\"example\":[\"deuce\",\"pants\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Array of tags applied\",\"example\":[\"bonequest-hi-fi\",\"deuce-pants\",\"sex-change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"thumb\":{\"description\":\"Partial URL to thumbnail of episode image\",\"example\":\"/thumb/6969.gif\",\"type\":\"string\"},\"title\":{\"description\":\"Episode title\",\"example\":\"sex change\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":575,\"type\":\"integer\"},\"year\":{\"description\":\"Year published\",\"example\":2018,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"API metadata wrapper\",\"properties\":{\"contact\":{\"description\":\"Preferred email address\",\"example\":\"root@bonequest.com\",\"type\":\"string\"},\"gay\":{\"example\":true,\"type\":\"boolean\"},\"high\":{\"description\":\"Highest episode number published so far\",\"example\":8340,\"type\":\"integer\"},\"queue\":{\"description\":\"Information about episode queue\",\"properties\":{\"empty\":{\"description\":\"Date when we run out of episodes queued for publication\",\"properties\":{\"day\":{\"type\":\"integer\"},\"month\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"episodes\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"size\":{\"type\":\"integer\"}},\"type\":\"object\"},\"repo\":{\"description\":\"URL to repository\",\"example\":\"https://github.com/bonequest\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails\",\"example\":\"https://www.bonequest.com\",\"type\":\"string\"},\"version\":{\"description\":\"API version\",\"example\":\"bq/4.0.0\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episode/{episodeNumber}","rename":{"param":{"episodeNumber":"id"}},"segments":[{"lit":"episode"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"666,667","kind":"param","name":"id","orig":"episode_number","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /episodes/{episodeNumbers}","json":"{\"operationId\":\"getEpisodes\",\"parameters\":[{\"description\":\"Comma-separated list of episode numbers to retrieve\",\"in\":\"path\",\"name\":\"episodeNumbers\",\"required\":true,\"schema\":{\"example\":\"666,667\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"episodes\":{\"items\":{\"properties\":{\"day\":{\"description\":\"Day of month published\",\"example\":20,\"maximum\":31,\"minimum\":1,\"type\":\"integer\"},\"dialog\":{\"description\":\"Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog\",\"example\":[[\"deuce\",\"I WANT A SEX CHANGE\"],[\"pants\",\"WHICH DIRECTION\"],[\"deuce\",\"SURPRISE ME\"]],\"items\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"array\"},\"episode\":{\"description\":\"Episode number\",\"example\":6969,\"type\":\"integer\"},\"hd\":{\"description\":\"Optional array containing details about associated BoneQuest HD images\",\"items\":{\"description\":\"Details about an associated BoneQuest HD image\",\"properties\":{\"author\":{\"description\":\"Original author, typically a Tumblr username\",\"example\":\"eyetooth\",\"type\":\"string\"},\"height\":{\"description\":\"Image height\",\"example\":200,\"type\":\"integer\"},\"id\":{\"description\":\"Episode number\",\"example\":2787,\"type\":\"integer\"},\"image\":{\"description\":\"URL to full-size image\",\"example\":\"http://31.media.tumblr.com/389cf0c4c9d36943f0a9aa7007e70bbf/tumblr_mlkg3kfWHP1snfhwio1_1280.png\",\"type\":\"string\"},\"link_status\":{\"description\":\"Empty string if URL is valid\",\"example\":\"\",\"type\":\"string\"},\"mirror_url\":{\"description\":\"Partial URL to image if link_status is bad\",\"example\":\"/hd/1.2787.jpg\",\"type\":\"string\"},\"thumb_url\":{\"description\":\"Partial URL to thumbnail image\",\"example\":\"/hd/t/1.2787.jpg\",\"type\":\"string\"},\"url\":{\"description\":\"Fully-qualified URL to HD page\",\"example\":\"http://jerkcityhd.tumblr.com/post/48734349486/up-late\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":144,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"height\":{\"description\":\"Image height\",\"example\":574,\"type\":\"integer\"},\"hifi\":{\"description\":\"Optional details about an associated BoneQuest HiFi episode\",\"properties\":{\"audio_url\":{\"description\":\"URL to mp3 file\",\"example\":\"http://bonequesthifi.com/6969.mp3\",\"type\":\"string\"},\"author\":{\"description\":\"Who made the HiFi episode\",\"example\":\"BoneQuest Hi-Fi\",\"type\":\"string\"},\"create_date\":{\"description\":\"Date of creation in seconds since UNIX epoch\",\"example\":1550592000,\"type\":\"integer\"},\"description\":{\"description\":\"Details about the episode in plain text\",\"example\":\"an audio production of BoneQuest #6969, featuring: @hydra2134, bonus suspended @IHaveShitMyself.\\nit's time.\\n~BoneQuest Hi-Fi\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration in HH:MM:SS format\",\"example\":\"0:30\",\"type\":\"string\"},\"hifi_id\":{\"description\":\"Unique HiFi ID number\",\"example\":501,\"type\":\"integer\"},\"page_url\":{\"description\":\"URL to bonequesthifi.com page\",\"example\":\"https://bonequesthifi.com/6969\",\"type\":\"string\"}},\"type\":\"object\"},\"image\":{\"description\":\"Partial URL to episode image\",\"example\":\"/6969.gif\",\"type\":\"string\"},\"month\":{\"description\":\"Month published, number between 1-12\",\"example\":4,\"maximum\":12,\"minimum\":1,\"type\":\"integer\"},\"navigation\":{\"description\":\"Back and next keys contain fully-formed episode for surrounding episodes\",\"properties\":{\"back\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"items\":{\"properties\":\"[Circular *paths./episode/{episodeNumber}.get.responses.200.content.application/json.schema.properties.episodes.items.properties]\",\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"players\":{\"description\":\"Array of player names\",\"example\":[\"deuce\",\"pants\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tags\":{\"description\":\"Array of tags applied\",\"example\":[\"bonequest-hi-fi\",\"deuce-pants\",\"sex-change\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"thumb\":{\"description\":\"Partial URL to thumbnail of episode image\",\"example\":\"/thumb/6969.gif\",\"type\":\"string\"},\"title\":{\"description\":\"Episode title\",\"example\":\"sex change\",\"type\":\"string\"},\"width\":{\"description\":\"Image width\",\"example\":575,\"type\":\"integer\"},\"year\":{\"description\":\"Year published\",\"example\":2018,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"meta\":{\"description\":\"API metadata wrapper\",\"properties\":{\"contact\":{\"description\":\"Preferred email address\",\"example\":\"root@bonequest.com\",\"type\":\"string\"},\"gay\":{\"example\":true,\"type\":\"boolean\"},\"high\":{\"description\":\"Highest episode number published so far\",\"example\":8340,\"type\":\"integer\"},\"queue\":{\"description\":\"Information about episode queue\",\"properties\":{\"empty\":{\"description\":\"Date when we run out of episodes queued for publication\",\"properties\":{\"day\":{\"type\":\"integer\"},\"month\":{\"type\":\"integer\"},\"year\":{\"type\":\"integer\"}},\"type\":\"object\"},\"episodes\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"size\":{\"type\":\"integer\"}},\"type\":\"object\"},\"repo\":{\"description\":\"URL to repository\",\"example\":\"https://github.com/bonequest\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL to website, use this to construct a fully-qualified URL for loading images and thumbnails\",\"example\":\"https://www.bonequest.com\",\"type\":\"string\"},\"version\":{\"description\":\"API version\",\"example\":\"bq/4.0.0\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episodes/{episodeNumbers}","rename":{"param":{"episodeNumbers":"id"}},"segments":[{"lit":"episodes"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["random"]]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":0}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"match":{"id":"episode01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":0}]}, 'Episode')
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
    ['episode01','episode02','episode03','random01','random02','random03'],
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
  
