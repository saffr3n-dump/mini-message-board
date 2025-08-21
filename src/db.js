import { Pool } from 'pg';

const dbUrl = process.env.DB_URL;
if (!dbUrl) throw new Error('DB_URL env variable is missing');

const pool = new Pool({ connectionString: dbUrl });

export const getAllMessages = async () => {
  const res = await pool.query('SELECT * FROM messages');
  return res.rows;
};

export const getOneMessage = async (id) => {
  const res = await pool.query('SELECT * from messages WHERE id = $1', [id]);
  return res.rows[0];
};

export const createMessage = async (text, user, added) => {
  const res = await pool.query(
    'INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)',
    [text, user, added],
  );
  return res.rows[0];
};
