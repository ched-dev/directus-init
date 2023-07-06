#!/usr/bin/env bash

# extract vars from local `.env`
export $(grep -v '^#' .env | xargs)

filename="pg_backup_$(date "+%F").sql"
postgres_db="$DB_HOST:$DB_PORT/$DB_DATABASE"
postgres_url="postgresql://$DB_USER:$DB_PASSWORD@$postgres_db"

if [[ $DB_SSL == "true" ]]; then
  postgres_url="$postgres_url?ssl=true"
fi

echo "Backing up postgresql://$postgres_db > $filename"

pg_dump -d $postgres_url -f $filename

echo -e "--- Backup of database \"$DB_DATABASE\"\n\nSET session_replication_role = replica;\n\n$(cat $filename)" > $filename

echo "Complete!"