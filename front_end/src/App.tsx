import { useState } from "react";
import Button from "./components/Button";
import './App.css';

// Define the Note type
type Note = {
  StudentID: number;
  StudentName: string;
  CourseNum: string;
  CourseName: string;
  Grade: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Function to fetch notes from Express
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/notes"); // Replace with your backend URL
      if (!response.ok) throw new Error("Failed to fetch notes");

      // const data: Note[] explicitly tells TypeScript that data is an array of Note objects.
      const data: Note[] = await response.json(); // converts the fetched response from JSON format to a JavaScript object
      setNotes(data);
      console.log("Fetched notes:", data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div>
      <Button onClick={fetchNotes}>Click me!</Button>

      {/* Display fetched notes */}
      <ul>
        {notes.map((note) => (
          <li key={note.StudentID}>
            <strong>{note.StudentName}</strong> - {note.CourseNum} (
            {note.CourseName}) - Grade: {note.Grade}
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
          <body>
            <tr>
              <td>John</td>
              <td>30</td>
              <td>USA</td>
            </tr>
          </body>
        </thead>
        
      </table>
    </div>
  );
}

export default App;
