import mysql from 'mysql2'

import dotenv from 'dotenv' // values for the envoirmental variables are stored in a .env file, run 'npm i dotenv' command
dotenv.config()

// pool is a collection of collections to a database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user:  process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise() // allows to use promise API version of MYSQL instead of having to use coolback version


const [rows] = await pool.query("SELECT * FROM test1")
  console.log(rows);