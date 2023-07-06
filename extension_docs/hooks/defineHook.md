# `defineHook()`

The entrypoint to define custom hooks within Directus.

```js
export default defineHook((hookEvents, hookContext) => {
  // event hooks
  hookEvents.filter("auth.login", (payload, meta, context) => ...)
  hookEvents.action("auth.login", (meta, context) => ...)
  hookEvents.init("middlewares.after", (meta) => ...)
  hookEvents.schedule("*/15 * * * *", () => ...)
  hookEvents.embed("head", () => ...)
});
```

## Context `hookContext`

See the full explanation of the `hookContext` in the [context documentation](./context.md).