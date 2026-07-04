# Bonequest PHP SDK Reference

Complete API reference for the Bonequest PHP SDK.


## BonequestSDK

### Constructor

```php
require_once __DIR__ . '/bonequest_sdk.php';

$client = new BonequestSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `BonequestSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = BonequestSDK::test();
```


### Instance Methods

#### `Episode($data = null)`

Create a new `EpisodeEntity` instance. Pass `null` for no initial data.

#### `Quote($data = null)`

Create a new `QuoteEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## EpisodeEntity

```php
$episode = $client->Episode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episode` | ``$ARRAY`` | No |  |
| `meta` | ``$OBJECT`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Episode()->load(["id" => "episode_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EpisodeEntity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## QuoteEntity

```php
$quote = $client->Quote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | ``$INTEGER`` | No |  |
| `dialog` | ``$ARRAY`` | No |  |
| `episode` | ``$INTEGER`` | No |  |
| `hd` | ``$ARRAY`` | No |  |
| `height` | ``$INTEGER`` | No |  |
| `hifi` | ``$OBJECT`` | No |  |
| `image` | ``$STRING`` | No |  |
| `month` | ``$INTEGER`` | No |  |
| `navigation` | ``$OBJECT`` | No |  |
| `player` | ``$ARRAY`` | No |  |
| `tag` | ``$ARRAY`` | No |  |
| `thumb` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `width` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Quote()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): QuoteEntity`

Create a new `QuoteEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | ``$INTEGER`` | No |  |
| `dialog` | ``$ARRAY`` | No |  |
| `episode` | ``$INTEGER`` | No |  |
| `hd` | ``$ARRAY`` | No |  |
| `height` | ``$INTEGER`` | No |  |
| `hifi` | ``$OBJECT`` | No |  |
| `image` | ``$STRING`` | No |  |
| `month` | ``$INTEGER`` | No |  |
| `navigation` | ``$OBJECT`` | No |  |
| `player` | ``$ARRAY`` | No |  |
| `tag` | ``$ARRAY`` | No |  |
| `thumb` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `width` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Search()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new BonequestSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

