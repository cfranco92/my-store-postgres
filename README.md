## How to run docker-compose file
```terminal
  $ docker-compose up -d postgres
```

## Check container
```terminal
  $ docker-compose ps
```

## Shut down container
```terminal
$ docker-compose down
```

## Manage Postgres from terminal
### Access to Postgress container
```terminal
  $ docker-compose exec postgres bash
```

### Connect with Postgres DB
```terminal
  $ psql -h localhost -d my_store -U postgres
```

### Get Database structure - relations
```terminal
 $# \d+
```

### Close DB connection
```terminal
  $# \q
```

### Get out of the container
```terminal
  $# exit
```

## Get container host
### Get container id
```terminal
  $ docker ps
```

### Inspect container
```terminal
  $ docker inspect [container-id]
```

## Create a table in the DB
```sql
  CREATE TABLE tasks (
    id serial PRIMARY KEY,
    title VARCHAR ( 255 ) NOT null,
    completed boolean DEFAULT false
  )
```

## MIGRATIONS - SEQUELIZE-CLI
```terminal
  $ npm run migrations:generate create-user
```
