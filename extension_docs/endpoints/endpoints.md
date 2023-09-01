# Extensions: Endpoints

Endpoints are basically passed as middleware to ExpressJS under the hood. You should be familiar enough with ExpressJS to use the `router`, `req` and `res` APIs.

## `req` properties

Additional properties from Directus:
```js
req.schema; // Directus Schema access (req.schema.collections)
req.token; // Directus authorization token (no bearer)
req.accountablility; // Directus authenticated user permissions
```

Common ExpressJS properties:
```js
req.body; // Body contents of the request, already parsed
req.params; // Query params from URL (`/endpoint/:param`)
req.query; // Query string params from URL (`?example=true`)
```

__Full `req` Schema__
```sh
GET /test/dynamic?queryParam=true

req <ref *2> IncomingMessage {
  rawHeaders: [
    'Host',
    'localhost:8055',
    'User-Agent',
    'insomnia/2023.4.0',
    'Content-Type',
    'application/json',
    'Authorization',
    'Bearer ey......yE',
    'Accept',
    '*/*',
    'Content-Length',
    '41'
  ],
  url: '/dynamic?queryParam=true',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  # Express Client `req.client`
  client: <ref *1> Socket {
    connecting: false,
    allowHalfOpen: true,
    server: Server {
      ...
    },
    parser: HTTPParser {
      ...
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    setEncoding: [Function: socketSetEncoding],
  },
  next: [Function: next],
  baseUrl: '/test',
  originalUrl: '/test/dynamic?queryParam=true',
  params: { testParam: 'dynamic' }, # Endpoint `/test/:testParam`
  query: { queryParam: 'true' }, # `?queryParam=true`
  id: 3,
  log: EventEmitter {
    trace: [Function: noop],
    debug: [Function: noop],
    info: [Function: LOG],
    warn: [Function: LOG],
    error: [Function: LOG],
    fatal: [Function (anonymous)],
  },
  allLogs: [
    EventEmitter {
      trace: [Function: noop],
      debug: [Function: noop],
      info: [Function: LOG],
      warn: [Function: LOG],
      error: [Function: LOG],
      fatal: [Function (anonymous)],
    }
  ],
  # Express `req.body`
  body: { email: 'test@gmail.com' },
  length: undefined,
  secret: undefined,
  cookies: [Object: null prototype] {},
  signedCookies: [Object: null prototype] {},
  token: 'ey......yE',
  # Directus Accountability of logged in user `req.accountability`
  accountability: {
    user: 'ea19d63c-xxxx-xxxx-xxxx-ad24bc2b98ad', # or `null`
    role: '62c04234-xxxx-xxxx-xxxx-01600e46de49', # or `null`
    admin: true,
    app: true,
    ip: '::1',
    userAgent: 'insomnia/2023.4.0',
    permissions: []
  },
  sanitizedQuery: { fields: [ '*' ] },
  # Directus Schema access `req.schema`
  schema: {
    collections: {
      # System collections
      directus_roles: [Object],
      directus_folders: [Object],
      directus_activity: [Object],
      directus_files: [Object],
      directus_collections: [Object],
      directus_users: [Object],
      directus_fields: [Object],
      directus_permissions: [Object],
      directus_settings: [Object],
      directus_sessions: [Object],
      directus_revisions: [Object],
      directus_webhooks: [Object],
      directus_migrations: [Object],
      directus_presets: [Object],
      directus_relations: [Object],
      directus_panels: [Object],
      directus_flows: [Object],
      directus_notifications: [Object],
      directus_shares: [Object],
      directus_translations: [Object],
      directus_operations: [Object],
      directus_dashboards: [Object],
      # Created collections
      topics: [Object],
      video_pages: [Object],
      video_pages_topics: [Object],
      video_pages_directus_roles: [Object],
      test_collection: [Object]
    },
    relations: [
      [Object], ...
    ]
  },
  route: Route {
    path: '/:testParam',
    stack: [ [Layer] ],
    methods: { get: true }
  },
}
```