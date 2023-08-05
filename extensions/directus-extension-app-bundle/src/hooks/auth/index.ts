import { defineHook } from "@directus/extensions-sdk";
import * as config from "../../utils/config";

export default defineHook(({ filter, action }, context) => {
  const { services, exceptions, env } = context;
  const { InvalidPayloadException } = exceptions;

  // before login
  filter("auth.login", async (payload, meta, context) => {

  });

  // after login success
  action("auth.login", async (meta, context) => {
    const { payload, user } = meta;
  });

  // before creating a user
  filter("users.create", async (payload, meta, context) => {

  });

  // after creating a user
  action("users.create", async (meta, context) => {
    const { payload } = meta;
  });
});
