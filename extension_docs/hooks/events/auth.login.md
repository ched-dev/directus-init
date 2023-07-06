# `auth.login` Event

Runs when a user authenticates using **ANY** of the authentication providers.

## Providers

Response varies based on the Provider.

### `default` Provider

```js
filter: auth.login {
  payload: {
    email: 'cheddevdev@gmail.com',
    password: 'password',
    mode: 'cookie'
  },
  meta: {
    event: 'auth.login',
    status: 'pending',
    user: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX',
    provider: 'default'
  },
  context: [ 'database', 'schema', 'accountability' ] // Object.keys()
}
```

```js
action: auth.login {
  meta: {
    event: 'auth.login',
    payload: {
      email: 'cheddevdev@gmail.com',
      password: 'password',
      mode: 'cookie'
    },
    status: 'success',
    user: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX',
    provider: 'default'
  },
  context: [ 'database', 'schema', 'accountability' ] // Object.keys()
}
```

### `facebook` Facebook OAuth Provider

```js
filter: auth.login {
  payload: {
    code: 'xxxxxxxxxx',
    codeVerifier: 'xxxxxxxxxx',
    state: 'xxxxxxxxxx'
  },
  meta: {
    event: 'auth.login',
    status: 'pending',
    user: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX',
    provider: 'facebook'
  }
}
```