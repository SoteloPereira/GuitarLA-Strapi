module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdvmfmpa6gdsa679djug-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_obi7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'NIHaYqCBHJnxKoUZfULjDVk2qVsKxZgr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
