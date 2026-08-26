# Bonequest Golang SDK Reference

Complete API reference for the Bonequest Golang SDK.


## BonequestSDK

### Constructor

```go
func NewBonequestSDK(options map[string]any) *BonequestSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *BonequestSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *BonequestSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Episode(data map[string]any) BonequestEntity`

Create a new `Episode` entity instance. Pass `nil` for no initial data.

#### `Quote(data map[string]any) BonequestEntity`

Create a new `Quote` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) BonequestEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## EpisodeEntity

```go
episode := client.Episode(nil)
fmt.Println(episode.GetName()) // "episode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episodes` | `[]any` | No |  |
| `id` | `string` | No |  |
| `meta` | `map[string]any` | No | API metadata wrapper |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Episode(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## QuoteEntity

```go
quote := client.Quote(nil)
fmt.Println(quote.GetName()) // "quote"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `int` | No | Day of month published |
| `dialog` | `[]any` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `int` | No | Episode number |
| `hd` | `[]any` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `int` | No | Image height |
| `hifi` | `map[string]any` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `string` | No | Partial URL to episode image |
| `month` | `int` | No | Month published, number between 1-12 |
| `navigation` | `map[string]any` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `[]any` | No | Array of player names |
| `tags` | `[]any` | No | Array of tags applied |
| `thumb` | `string` | No | Partial URL to thumbnail of episode image |
| `title` | `string` | No | Episode title |
| `width` | `int` | No | Image width |
| `year` | `int` | No | Year published |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Quote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `int` | No | Day of month published |
| `dialog` | `[]any` | No | Array of arrays containing episode dialog, element 0 is typically player's name and element 1 is the dialog |
| `episode` | `int` | No | Episode number |
| `hd` | `[]any` | No | Optional array containing details about associated BoneQuest HD images |
| `height` | `int` | No | Image height |
| `hifi` | `map[string]any` | No | Optional details about an associated BoneQuest HiFi episode |
| `image` | `string` | No | Partial URL to episode image |
| `month` | `int` | No | Month published, number between 1-12 |
| `navigation` | `map[string]any` | No | Back and next keys contain fully-formed episode for surrounding episodes |
| `players` | `[]any` | No | Array of player names |
| `tags` | `[]any` | No | Array of tags applied |
| `thumb` | `string` | No | Partial URL to thumbnail of episode image |
| `title` | `string` | No | Episode title |
| `width` | `int` | No | Image width |
| `year` | `int` | No | Year published |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewBonequestSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

