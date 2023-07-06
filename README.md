# Directus Init

> A preconfigured Directus Headless CMS install with PostgreSQL, intended for extension development or self-hosting

by [ched.dev](https://ched.dev)

Features:
- Default [Directus.io](https://directus.io) ^10.3.0 installation with PostgreSQL
- Install SQL command to support location data in PostgreSQL
- Bash script to save database backups (run `npm run backup-db`)
- Example bundle to add extensions to (includes hook for authentication & user creation)
- [API Viewer Module](https://github.com/u12206050/directus-extension-api-viewer-module/releases/tag/1.1.1) included in extensions

## Install

Steps:
- Clone this repo into a folder with your project name
- Create a `.env` with contents from `.env.sample` and [update config options](https://docs.directus.io/self-hosted/config-options.html) as desired
- Create your PostgreSQL DB from the command line `createdb directus`
- (Optional) Run the `tasks/pg_install_postgis.sql` in your database if you want to support location data
- Run `npm install`
- Run `npx directus bootstrap` (creates local folders and runs initial db setup; one-time step)
- Create an `uploads` directory if you are storing locally, alternatively set the S3 config options in `.env`
- Run `npm start` (use this each time to boot up server)

## Extensions

We've created a bundle which can hold all of your custom extensions. This approach allows you to add it's own dependencies in one place, as well as integrate into the build process easily.

See the `extensions/directus-extension-app-bundle/README.md` file to learn more about adding extensions.

If you are developing extensions, open a second terminal to watch and rebuild with `npm run extensions`.

# License

Directus is covered under [BSL-1.1 License](https://github.com/directus/directus/blob/main/license). Any additional code in this repo is covered under MIT license.