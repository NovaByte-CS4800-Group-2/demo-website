import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

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
  const [showTable, setShowTable] = useState(false);


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
    setShowTable(!showTable)
  };

  {
    notes.map((note) => {
      const studentID = note.StudentID;
      const studentName = note.StudentName;
    });
  }

  const [isVisible, setIsVisible] = useState(false);
  const showHeader = () => {
    setIsVisible(!isVisible);
  };

  const twoClicks = () => {
    showHeader();
    fetchNotes();
  };

  return (
    <div>
      <button className= "customButton" onClick={twoClicks} >Load database</button>
      <table >
          <thead className={isVisible ? 'header-visible': 'header-hidden'}>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Course Number</th>
              <th>Course Name</th>
              <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.StudentID}>
              <td>{note.StudentID}</td>
              <td>{note.StudentName}</td>
              <td>{note.CourseName}</td>
              <td>{note.CourseNum}</td>
              <td>{note.Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
