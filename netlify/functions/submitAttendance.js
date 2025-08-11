const { Client } = require('pg');

exports.handler = async (event, context) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // Use your connection string
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();

  try {
    const { email, username, fullname, contact, place, zipcode, entryTime, entryPhoto, exitTime, exitPhoto, status } = JSON.parse(event.body);
    const result = await client.query(
      `INSERT INTO attendance (email, username, fullname, contact, place, zipcode, entry_time, entry_photo, exit_time, exit_photo, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [email, username, fullname, contact, place, zipcode, entryTime, entryPhoto, exitTime, exitPhoto, status]
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows[0]), // Return the inserted data
    };
  } catch (err) {
    await client.end();
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
