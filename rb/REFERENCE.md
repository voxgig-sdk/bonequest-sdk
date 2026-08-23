# Bonequest Ruby SDK Reference

Complete API reference for the Bonequest Ruby SDK.


## BonequestSDK

### Constructor

```ruby
require_relative 'Bonequest_sdk'

client = BonequestSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `BonequestSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = BonequestSDK.test
```


### Instance Methods

#### `Episode(data = nil)`

Create a new `Episode` entity instance. Pass `nil` for no initial data.

#### `Quote(data = nil)`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## EpisodeEntity

```ruby
episode = client.Episode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episodes` | `Array` | No |  |
| `meta` | `Hash` | No | API metadata wrapper |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Episode.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QuoteEntity

```ruby
quote = client.Quote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `Integer` | No | Day of month published |
| `dialog` | `Array` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `Integer` | No | Episode number |
| `hd` | `Array` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `Integer` | No | Image height |
| `hifi` | `Hash` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `String` | No | Partial URL to episode image |
| `month` | `Integer` | No | Month published, number between 1-12 |
| `navigation` | `Hash` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `Array` | No | Array of player names |
| `tags` | `Array` | No | Array of tags applied |
| `thumb` | `String` | No | Partial URL to thumbnail of episode image |
| `title` | `String` | No | Episode title |
| `width` | `Integer` | No | Image width |
| `year` | `Integer` | No | Year published |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Quote.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `Integer` | No | Day of month published |
| `dialog` | `Array` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `Integer` | No | Episode number |
| `hd` | `Array` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `Integer` | No | Image height |
| `hifi` | `Hash` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `String` | No | Partial URL to episode image |
| `month` | `Integer` | No | Month published, number between 1-12 |
| `navigation` | `Hash` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `Array` | No | Array of player names |
| `tags` | `Array` | No | Array of tags applied |
| `thumb` | `String` | No | Partial URL to thumbnail of episode image |
| `title` | `String` | No | Episode title |
| `width` | `Integer` | No | Image width |
| `year` | `Integer` | No | Year published |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Search.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = BonequestSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

