# Directus Upgrade Notes

> An abbreviation of the full [Directus Release Notes](https://github.com/directus/directus/releases) highlighting breaking changes and new features

\*\* Denotes a breaking change

| Version | Notes |
| ------- | ----- |
| 10.8.3 [^](https://github.com/directus/directus/releases/tag/v10.8.3) | Fixed GraphQL Content Versions \*\*, Renamed the type `ExtensionItem` to `DirectusExtension`, Added `EXTENSIONS_MUST_LOAD` config option [^](https://docs.directus.io/self-hosted/config-options.html#extensions) |
| 10.8.0 [^](https://github.com/directus/directus/releases/tag/v10.8.0) | Lots of new theming options with theme-selector \*\*, Added theme extension type [^](https://docs.directus.io/extensions/themes.html) |
| 10.7.2 [^](https://github.com/directus/directus/releases/tag/v10.7.2) | Added support for navigation dividers, configurable borders |
| 10.7.1 [^](https://github.com/directus/directus/releases/tag/v10.7.1) | `create-directus-project` switched from CJS to ESM, changed license from GPL to MIT \*\* |
| 10.7.0 [^](https://github.com/directus/directus/releases/tag/v10.7.0) | Allow enabling/disable extensions through app and api (see settings page) \*\*, Added support for Content Versioning [^](https://docs.directus.io/guides/headless-cms/content-versioning.html), Support for uploading custom favicons [^](https://docs.directus.io/user-guide/settings/theming.html#branding) |
| 10.6.4 [^](https://github.com/directus/directus/releases/tag/v10.6.4) | Moved `@directus/constants`, `@directus/types`, `@directus/utils` into one package `@directus/extensions` \*\* [^](https://github.com/directus/directus/pull/19922), Added `readAssetRaw()` to `@directus/sdk` [^](https://github.com/directus/directus/pull/20041/files#diff-c49a51d0dd22dafbfce0de626c647b15c90a81b0b763539cb0f6fd016e917c3bR160), Move all errors to `@directus/errors` [^](https://github.com/directus/directus/tree/main/packages/errors) |
| 10.6.3 [^](https://github.com/directus/directus/releases/tag/v10.6.3) | If you saved field conditions in 10.6.2 release they need to be manually fixed in 10.6.3+ \*\* [^](https://github.com/directus/directus/issues/19757#issuecomment-1734162756) |
| 10.6.2 [^](https://github.com/directus/directus/releases/tag/v10.6.2) | `@directus/sdk` changed `asSearch` to `withSearch` \*\* [^](https://github.com/directus/directus/pull/19354), Fix for including auth credentials with fetch [^](https://github.com/directus/directus/pull/19354) |
| 10.6 [^](https://github.com/directus/directus/releases/tag/v10.6.0) | Replaced vm2 with isolated-vm for sandboxing the "Run Script"-Operation in Flows (removes npm package use in Flows)\*\* [^](https://github.com/directus/directus/pull/19332), Added (JWT) operation to Flows [^](https://docs.directus.io/app/flows/operations.html#json-web-token-jwt) |
| 10.5 [^](https://github.com/directus/directus/releases/tag/v10.5.0) | New SDK released [^](https://docs.directus.io/packages/@directus/sdk/), Supabase storage for files [^](https://docs.directus.io/self-hosted/config-options.html#supabase-supabase) |
| 10.4 [^](https://github.com/directus/directus/releases/tag/v10.4.0) | Removed `context.exceptions` in extensions\*\*, Added `@directus/errors` instead [^](https://docs.directus.io/packages/@directus/errors/), Moved Redis env vars\*\* [^](https://github.com/directus/directus/releases/tag/v10.4.0), Drop memcached support\*\*, Beta SDK |
| 10.3 [^](https://github.com/directus/directus/releases/tag/v10.3.0) | Added Websocket support to REST and GraphQL [^](https://docs.directus.io/guides/real-time/getting-started/) |
| 10.2 [^](https://github.com/directus/directus/releases/tag/v10.2.0) | Live preview functionality [^](https://docs.directus.io/guides/headless-cms/live-preview/), added env vars `FILES_MAX_UPLOAD_SIZE` and `FILES_MIME_TYPE_ALLOW_LIST` [^](https://docs.directus.io/self-hosted/config-options.html#upload-limits) |
| 10.1.1 [^](https://github.com/directus/directus/releases/tag/v10.1.1) | Vue 3.3 in Admin |
| 10.1 [^](https://github.com/directus/directus/releases/tag/v10.1.0) | Added Kanban Layout [^](https://docs.directus.io/user-guide/content-module/layouts.html#kanban-layout), Additional Insight Panels [^](https://docs.directus.io/user-guide/insights/panels.html), Block editor interface [^](https://docs.directus.io/app/data-model/fields/text-numbers.html#block-editor), Pressure based rate limiter [^](https://docs.directus.io/self-hosted/config-options.html#pressure-based-rate-limiter), Extensions building to ESM |
| 10.0 [^](https://github.com/directus/directus/releases/tag/v10.0.0) | New BSL 1.1 License [^](https://directus.io/bsl-faq/) |
| 9.26 [^](https://github.com/directus/directus/releases/tag/v9.26.0) | Mail templates in Flows [^](https://docs.directus.io/extensions/email-templates.html) |
| 9.25 [^](https://github.com/directus/directus/releases/tag/v9.25.0) | API changed from CJS to ESM (re-test extensions)\*\*, support for AVIF files, Migrate to Material Symbols (more icons) [^](https://docs.directus.io/user-guide/overview/glossary.html#material-icons) |
| 9.23.4 [^](https://github.com/directus/directus/releases/tag/v9.23.4) | GraphQL `expires` property changed from int to string\*\* [^](https://github.com/directus/directus/releases/tag/v9.23.4) |
| 9.23.2 [^](https://github.com/directus/directus/releases/tag/v9.23.2) | Global rate limiter introduced [^](https://docs.directus.io/self-hosted/config-options.html#rate-limiting) |
| 9.23 [^](https://github.com/directus/directus/releases/tag/v9.23.0) | New `/schema` endpoints [^](https://docs.directus.io/reference/system/schema.html) |
| 9.22.2 [^](https://github.com/directus/directus/releases/tag/v9.22.2) | Top level extensions support Ex: `extensions/directus-extension-*` |
| 9.22 [^](https://github.com/directus/directus/releases/tag/v9.22.0) | Node v18 requirement\*\*, Replace `@directus/drive`\*\*, Add `REGION` for S3 env config, File metadata abstraction replaced |
| 9.21 [^](https://github.com/directus/directus/releases/tag/v9.21.0) | Add Bundle extension type [^](https://docs.directus.io/extensions/bundles.html) |
| 9.20 [^](https://github.com/directus/directus/releases/tag/v9.20.0) | Add SAML support in Auth [^](https://docs.directus.io/self-hosted/sso-examples.html#saml-examples) |
| 9.17.1 [^](https://github.com/directus/directus/releases/tag/v9.17.1) | Add SendGrid email transport [^](https://docs.directus.io/self-hosted/config-options.html#sendgrid-sendgrid) |
| 9.13 [^](https://github.com/directus/directus/releases/tag/v9.13.0) | Insights 2.0 [^](https://docs.directus.io/user-guide/insights/dashboards.html) |
| 9.12 [^](https://github.com/directus/directus/releases/tag/v9.12.0) | Added Data Flows [^](https://docs.directus.io/app/flows.html) |
| 9.7 [^](https://github.com/directus/directus/releases/tag/v9.7.0) | Update `CORS_ENABLED` and `CORS_ORIGIN` env vars to default disabled\*\* [^](https://docs.directus.io/self-hosted/config-options.html#cors) |
| 9.6 [^](https://github.com/directus/directus/releases/tag/v9.6.0) | New base theme in Data Studio [^](https://docs.directus.io/extensions/themes.html) |
| 9.5.2 [^](https://github.com/directus/directus/releases/tag/v9.5.2) | Changed SDK `.readMany()` to `.readByQuery()` |
