# Directus Extension: App Bundle

This bundle holds all the custom extensions created for this directus application.

## Adding Extensions

To add an extension, run the following command in this folder and follow the prompts:

```sh
npm run add
```

Any npm packages needed should be added within this folder's `package.json`.

## Building

To build the extensions you can run:

```sh
# npm install and build
npm run install-build
# or just build
npm run build
```

Building is required before running the application.

To watch and rebuild automatically, use:

```sh
npm run dev
```