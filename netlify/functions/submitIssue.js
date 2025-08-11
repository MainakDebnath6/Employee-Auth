const { Client } = require('pg');

exports.handler = async (event, context) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();

  try {
    const { username, fullname, message } = JSON.parse(event.body);
    const result = await client.query(
      `INSERT INTO issues (username, fullname, message) VALUES ($1, $2, $3) RETURNING *`,
      [username, fullname, message]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows[0]),
    };
  } catch (err) {
    await client.end();
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
