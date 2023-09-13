# Directus Init

> A preconfigured Directus install with PostgreSQL - intended for extension development or self-hosting

by [ched.dev](https://ched.dev)

Features:
- Default [Directus.io](https://directus.io) ^10.6.0 installation with PostgreSQL
- Install SQL command to support location data in PostgreSQL
- Bash script to save database backups (run `npm run backup-db`)
- Directus schema snapshots npm commands (run `npm run snapshot`)
- Example [extension bundle](https://docs.directus.io/extensions/bundles.html) to add extensions to (includes example hooks for authentication & user creation)
- [API Viewer Module](https://github.com/u12206050/directus-extension-api-viewer-module/releases/tag/1.1.1) included in extensions
- [Generate Types Module](https://github.com/maltejur/directus-extension-generate-types/releases/tag/0.5.1) included in extensions
- [Additional Directus extensions documentation](./extension_docs/) included in this repo

## Install

Steps:
- [Download a zip](https://github.com/ched-dev/directus-init/archive/refs/heads/main.zip) of this repo, extract it, and rename the folder to your project name and change into the new folder
- Create a `.env` with contents from `.env.sample` and [update config options](https://docs.directus.io/self-hosted/config-options.html) as desired
- Create your PostgreSQL DB wherever you plan to host or locally in CLI run `createdb directus`, then add connection options to `.env`
- (Optional) Run the `tasks/pg_install_postgis.sql` in your database if you want to support location data
- Run `npm run build` (installs packages & builds extensions)
- Run `npx directus bootstrap` (creates local folders and runs initial db one-time setup)
- Create an `uploads` directory if you are storing files locally, alternatively set the S3 config options in `.env`
- Run `npm start` (use this each time to boot up server)

## Directus Studio Setup

After you've installed everything and are running the Directus Studio, you should update a few things.

**In Settings > Project Settings**  
- Update Project Name as this will be used for email sender name
- Update branding and style (color) to make this instance yours
- Turn on the API Viewer Module & Generate Types Module in the sidebar (Modules > check to enable)
- Set a requirement for strong passwords (Security > Auth Password Policy) & login attempts

**In Settings > Roles & Permissions**  
- Create a role for non-admin users (if needed)
- Require 2FA on any roles you think should have it

## Extensions

We've created a bundle which can hold all of your custom extensions. This approach allows you to add it's own dependencies in one place, as well as integrate into the build process easily.

See the `extensions/directus-extension-app-bundle/README.md` file to learn more about adding extensions.

If you are developing extensions, open a second terminal to watch and rebuild with `npm run extensions`.

## Upgrading

If this repos Directus version is behind the latest, you can upgrade it following the [Directus Upgrades & Migrations Guide](https://docs.directus.io/self-hosted/upgrades-migrations.html).

We've created a [UPGRADE_NOTES.md](./UPGRADE_NOTES.md) file which outlines all the new features and breaking changes since Directus v9.5.2. This will help you decide what fixes might be required before and after you update.

# License

Directus is covered under [BSL-1.1 License](https://github.com/directus/directus/blob/main/license). Any additional code in this repo is covered under MIT license.