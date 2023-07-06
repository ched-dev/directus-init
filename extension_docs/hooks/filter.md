# Filter (Blocking) Extensions

In Directus, a Filter is a before hook allowing you to modify the payload before being processed, among other things.

## Example Filter

```js
filter("auth.login", async (payload, meta, context) => {
  console.log("filter: auth.login", {
    payload, meta, context: Object.keys(context)
  });
});
```

## Example Payloads

Payloads change based on the event and data submitted. Here is a general example:

```js
// filter: auth.login
{
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

See a full list of responses in the `./events/*.md` files.