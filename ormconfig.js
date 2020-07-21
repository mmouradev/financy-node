module.exports = {
  "type": "postgres",
  "host": process.env.host,
  "port": process.env.post || 5432,
  "username": process.env.username,
  "password": process.env.password,
  "database": process.env.database,
  "entities": ["./src/models/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
