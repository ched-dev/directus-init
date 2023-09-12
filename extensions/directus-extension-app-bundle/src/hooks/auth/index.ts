import { defineHook } from "@directus/extensions-sdk";
import { createError } from "@directus/errors";

// NOTE: This file is for code demo purposes and has no actual functionality

// use `@directus/errors` to create custom errors
const RegistrationsClosedError = createError(`REGISTRATIONS_CLOSED`, `User registrations are currently closed.`, 404);

// filter is before (blocking), action is after (non-blocking)
export default defineHook(({ filter, action }, context) => {
  const { services, env } = context;

  // before login
  filter("auth.login", async (payload, meta, context) => {
    // return updated `payload` to continue change
  });

  // after login success
  action("auth.login", async (meta, context) => {
    const { payload, user } = meta;
  });

  // before creating a user
  filter("users.create", async (payload, meta, context) => {
    // throw an error to cancel update
    // if (!allowRegistrations) {
    //   throw new RegistrationsClosedError()
    // }

    // return updated `payload` to continue change
  });

  // after creating a user
  action("users.create", async (meta, context) => {
    const { payload } = meta;
  });
});
