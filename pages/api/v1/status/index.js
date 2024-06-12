import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const v = await database.query("SHOW server_version;");
  const database_version = v.rows[0].server_version;

  const mc = await database.query("SHOW max_connections;");
  const database_max_connections = mc.rows[0].max_connections;

  const dbOpenConnectionResult = await database.query(
    "select count(1) conexoes from pg_stat_activity where datname = 'local_db'",
  );
  const conections = dbOpenConnectionResult.rows[0].conexoes;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: database_version,
        max_connections: parseInt(database_max_connections),
        open_connections: parseInt(conections),
      },
    },
  });
}

export default status;
