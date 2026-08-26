# Bonequest TypeScript SDK Reference

Complete API reference for the Bonequest TypeScript SDK.


## BonequestSDK

### Constructor

```ts
new BonequestSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `BonequestSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = BonequestSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `BonequestSDK` instance in test mode.


### Instance Methods

#### `Episode(data?: object)`

Create a new `Episode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeEntity` instance.

#### `Quote(data?: object)`

Create a new `Quote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuoteEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `BonequestSDK.test()`.

**Returns:** `BonequestSDK` instance in test mode.


---

## EpisodeEntity

```ts
const episode = client.Episode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episodes` | `any[]` | No |  |
| `id` | `string` | No |  |
| `meta` | `Record<string, any>` | No | API metadata wrapper |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Episode().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BonequestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuoteEntity

```ts
const quote = client.Quote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `number` | No | Day of month published |
| `dialog` | `any[]` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `number` | No | Episode number |
| `hd` | `any[]` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `number` | No | Image height |
| `hifi` | `Record<string, any>` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `string` | No | Partial URL to episode image |
| `month` | `number` | No | Month published, number between 1-12 |
| `navigation` | `Record<string, any>` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `any[]` | No | Array of player names |
| `tags` | `any[]` | No | Array of tags applied |
| `thumb` | `string` | No | Partial URL to thumbnail of episode image |
| `title` | `string` | No | Episode title |
| `width` | `number` | No | Image width |
| `year` | `number` | No | Year published |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `random` | `/quote/random` | `client.Quote().list({ $action: 'random', ... })` |

An action returns that action's OWN response, which is not necessarily a
Quote record — check the API definition for its shape.

```ts
const result = await client.Quote().list({
  $action: 'random',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Quote().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `BonequestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `number` | No | Day of month published |
| `dialog` | `any[]` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `number` | No | Episode number |
| `hd` | `any[]` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `number` | No | Image height |
| `hifi` | `Record<string, any>` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `string` | No | Partial URL to episode image |
| `month` | `number` | No | Month published, number between 1-12 |
| `navigation` | `Record<string, any>` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `any[]` | No | Array of player names |
| `tags` | `any[]` | No | Array of tags applied |
| `thumb` | `string` | No | Partial URL to thumbnail of episode image |
| `title` | `string` | No | Episode title |
| `width` | `number` | No | Image width |
| `year` | `number` | No | Year published |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `BonequestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new BonequestSDK({
  feature: {
    test: { active: true },
  }
})
```

