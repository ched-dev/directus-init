# Moving Postgres DB from one server to another

- Backup DB from existing server `npm run backup-db`
- Modify backup file:
  - If new db user has changed:
    - Replace existing db user text, ex: "postgres" to "newusername"
  - If you get timescaledb errors:
    - Comment out "timescaledb" lines
    - Comment out "COPY _timescaledb" lines
  - If you have operations with run scripts:
    - JSON fields will not accept newlines, tabs, or double quotes, to fix:
      - Within "COPY public.directus_operations":
        - Replace "\n\t" with empty string, then replace "\n" with empty string
        - Replace double quotes " with escaped single quotes \' or backticks `
      - Within "COPY public.directus_activity" and "COPY public.directus_revisions":
        - Fix unacceptable characters or remove all revisions containing invalid JSON fields
- Connect to your new database via psql cli
  - `psql -h host -d database -U user`
- Import the backup file
  - `\i 'path/to/file.sql'`
  - Fix any errors you might see
  - Verify all tables have expected data
    - May need to fix any "Run Scripts" you modified for import
- If you have pg_hba.conf error & self-signed certificate error, add the following to your env config
  - Remove DB_SSL="true" if it's there
  - DB_SSL__REJECT_UNAUTHORIZED="true"
  - DB_SSL__CA="-----BEGIN CERTIFICATE-----
  ...
  -----END CERTIFICATE-----"
- Update environment variables to new database connection info and verify Directus admin still loads, along with Flows and Operations.

## Notes

Successfully moved database from Railway to Supabase with these instructions.