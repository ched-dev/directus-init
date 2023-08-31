# Context usage in Hooks

The `context` argument contains access to Directus internals which are useful when developing extensions.

The `context` argument is used in two formats:
- Inside a `defineHook()` callback (better described as Hook `context`)
- Inside a `filter()` or `action()` callback (better described as Event `context`)

`defineHook()` callback runs when the application is started up and does not have information about the logged in user.

`filter()` and `action()` callbacks run when an event is emitted by Directus and will have user information included.

## `defineHook()` context

The `defineHook()` is used to create the default export for a Hook extension. Within it, you will have a specific hook event such as `filter()`, `action()`, etc.

```js
defineHook.context [
  'services',
  'exceptions',
  'env',
  'database',
  'emitter',
  'logger',
  'getSchema' // async method
] // Object.keys()
```

### Services: `context.services`

Services are used to connect to Directus data.

```js
context.services [
  'ActivityService',       'AssetsService',
  'AuthenticationService', 'AuthorizationService',
  'CollectionsService',    'DashboardsService',
  'ExportService',         'FieldsService',
  'FilesService',          'FlowsService',
  'FoldersService',        'GraphQLService',
  'ImportService',         'ItemsService',
  'MailService',           'MetaService',
  'NotificationsService',  'OperationsService',
  'PanelsService',         'PayloadService',
  'PermissionsService',    'PresetsService',
  'RelationsService',      'RevisionsService',
  'RolesService',          'SchemaService',
  'ServerService',         'SettingsService',
  'SharesService',         'SpecificationService',
  'TFAService',            'TranslationsService',
  'UsersService',          'UtilsService',
  'WebhooksService'
]
```

A few services to be familiar with are documented below.

#### ItemsService: `context.services.ItemsService()`

The Service used to connect to any of your Collection's Items.

```js
// Example: Getting many items via ItemsService
const blogPostsService = new context.services.ItemsService("blog_posts", {
  schema: await context.getSchema(),
});

const blogPosts = await blogPostsService.readMany([...ids], {
  fields: [
    "title",
  ],
});
```

```js
// Example: Getting a single user via ItemsService
const userService = new context.services.ItemsService("directus_users", {
  schema: await context.getSchema(),
});

const user = await userService.readOne(user_id, {
  fields: [
    "email",
    "first_name",
    "last_name"
  ],
});
```

### Exceptions: `context.exceptions` (<= v10.3.x)

> Removed in Directus v10.4. use `@directus/errors` instead

Directus provides common exceptions for throwing in your extension code.

See a full list of available exceptions in the [exceptions/*.ts files](https://github.com/directus/directus/tree/v10.3.0/api/src/exceptions) of the github repo.

Usage:
```js
const { InvalidPayloadException } = context.exceptions;

throw new InvalidPayloadException(`Missing required "email"`);
```

### Environment: `context.env`

Environment variables can be accessed using `context.env` as well as `process.env`. You get the benefit of type casting and nesting if you use `context.env` (see [config options docs](https://docs.directus.io/self-hosted/config-options.html#type-casting-and-nesting)).

```js
context.env.PUBLIC_URL;
context.env.AUTH_DEFAULT_ROLE_ID;
context.env.SENDGRID_SENDER_ID;
```

### Schema: `context.getSchema()`

To use the Services you will need to pass the schema. You can access the schema via an async method:

```js
await context.getSchema()
```

**WARNING:** When you are within a filter or action, you will have access to the alternate `context` which will have `context.schema` as a property. Be aware of which is available and which you are using. Prefer to use `context.schema` if available over `await context.getSchema()` as it will refer to the schema available to the current user. `context.getSchema()` will return the full Directus schema.



---



## `filter()` & `action()` context

The context for filters and actions is simplified but includes information about the user making the request.

```js
context: [ 'database', 'schema', 'accountability' ] // Object.keys()
```

The values on this context are reflective the the user triggering the event. This means your values on `schema` and `accountability` will be reflective of the user's role & permissions.

### Schema: `context.schema`

The Schema available to the user who triggered this event. Mostly used to pass along to any Service that requires it.

When passing `context` to Services, it's best to pass the whole `context` object as it will include only data the user has access to.

```js
// NOTE: `hookContext` is referring to `context` from `defineHook()` while `context` is referring to the user specific context
filter("auth.login", async (payload, meta, context) => {
  const userService = new hookContext.services.ItemsService("directus_users", context);

  const user = await userService.readOne(meta.user, {
    fields: [
      "email",
      "first_name",
      "last_name"
    ],
  });
});
```

### Accountability: `context.accountability`

The role & permissions available to the user who triggered this event. Used to pass along to any Service that requires it, or if you need to allow / deny based on permissions.

When passing `context` to Services, it's best to pass the whole `context` object as it will include only data the user has access to.

```js
// NOTE: `services` is referring to `context.services` from `defineHook()`
filter("auth.login", async (payload, meta, context) => {
  const userService = new services.ItemsService("directus_users", context);

  const user = await userService.readOne(meta.user, {
    fields: [
      "email",
      "first_name",
      "last_name"
    ],
  });
});
```

If you want to override accountability to provide admin access for specific actions (such as inviting a user), you can pass it in when creating the service:

```js
const { services, getSchema } = context
		
const usersService = new services.UsersService({
  accountability: {
    // user: uuid | null, // access based on user
    // role: uuid | null, // access based on role
    admin: true, // admin access (everything)
    // app: boolean, // app access
  },
  schema: await getSchema()
})

// requires admin access
await usersService.inviteUser(email, USER_DEFAULT_ROLE_ID, INVITE_URL)
```