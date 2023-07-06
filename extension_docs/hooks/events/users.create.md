# `users.create` Event

Triggers when a user is created in Directus. This happens with **ANY** provider configuration.

## Providers

Response varies based on the Provider.

### `default` Provider

```js
filter: users.create {
  payload: {
    first_name: 'the',
    last_name: 'dude',
    email: 'test@gmail.com',
    password: 'password'
  },
  meta: { collection: 'directus_users' }
}
```

```js
action: users.create {
  meta: {
    payload: {
      first_name: 'the',
      last_name: 'dude',
      email: 'test@gmail.com',
      password: 'password'
    },
    key: 'XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX',
    collection: 'directus_users'
  }
}
```

### `facebook` Facebook OAuth Provider

```js
filter: users.create {
  payload: {
    provider: 'facebook',
    first_name: 'ched',
    last_name: 'dev',
    email: undefined,
    external_identifier: '1234567890',
    role: 'XXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX',
    auth_data: undefined
  },
  meta: { event: 'users.create', collection: 'directus_users' }
}
```