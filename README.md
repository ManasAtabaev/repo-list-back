# repo-list-back

## Project setup

- Create DB (postgres)
- Update `database.json`, add DB credentials

```
npm install
```

To create table in DB run migration:

```
node node_modules/db-migrate/bin/db-migrate up
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Lints and fixes files

```
npm run prebuild
```

### Backend Test

I will create test/api tests. I will test endpoints via submit request first to create favorite repo and then request it via `GET /favorite`, repository id from previouse test should be included in return result.
