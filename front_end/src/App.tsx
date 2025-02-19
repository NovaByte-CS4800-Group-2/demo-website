import ListGroup from "./components/ListGroup"; // always import code from other files at the top of the file
import Alert from "./components/Alert";
import Button from "./components/Button";
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

export async function getNotes() 
{
  const [rows] = await pool.query("SELECT * FROM test1")
  console.log(rows);
  return rows
}

export async function getNote(id)
{
  const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]) // prepared statement, always use ? to be safe
  return rows[0]
}

export async function createNote(title, content) 
{
  const [result] = await pool.query('INSERT INTO notes (title, contents) VALUES (?, ?)', [title, content])
  const id = result.insertId
  return getNote(id)
}


function App() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <script type ="module" src = "Index.js"> </script>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button> Click me! </Button>
    </div>
  );
}

// ---------------All within the project folder-----------------
// npm create vite@4.1.0 ------> write the name then select react -> typescript
// npm i bootstrap@5.2.3
// npm run dev to start the server
export default App; // export as default object from this module
