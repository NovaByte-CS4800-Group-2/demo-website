import { useState } from "react";
import "./App.css";

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
      if (!showTable) {
        // Only fetch when showing the table
        const response = await fetch("http://localhost:8080/notes");
        if (!response.ok) throw new Error("Failed to fetch notes");

        const data: Note[] = await response.json();
        setNotes(data);
        console.log("Fetched notes:", data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
    setShowTable(!showTable); // Toggle table visibility
  };

  return (
    <div>
      <button className="customButton" onClick={fetchNotes}>
        {showTable ? "Hide Database" : "Load Database"}
      </button>

      {showTable && (
        <table>
          <thead>
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
                <td>{note.CourseNum}</td>
                <td>{note.CourseName}</td>
                <td>{note.Grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
