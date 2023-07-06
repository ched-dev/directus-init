import { defineHook } from "@directus/extensions-sdk";
import * as config from "../../utils/config";

export default defineHook(({ filter, action }, context) => {
  const { services, exceptions, env } = context;
  const { InvalidPayloadException } = exceptions;

  // before login
  filter("auth.login", async (payload, meta, context) => {
    console.log("filter: auth.login", {
      payload, meta, context: Object.keys(context)
    });

    console.log("meta.user", meta.user);
  });

  // after login success
  action("auth.login", async (meta, context) => {
    const { payload, user } = meta;

    console.log("action: auth.login", {
      meta, context: Object.keys(context)
    });
  });

  // before creating a user
  filter("users.create", async (payload, meta, context) => {
    console.log("filter: users.create", {
      payload, meta, context: Object.keys(context)
    });
  });

  // after creating a user
  action("users.create", async (meta, context) => {
    const { payload } = meta;

    console.log("action: users.create", {
      meta, context: Object.keys(context)
    });
  });
});
