import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

// Define the Note type
type Note = {
  id: number;
  title: string;
  contents: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Function to fetch notes from Express
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/notes"); // Replace with your backend URL
      if (!response.ok) throw new Error("Failed to fetch notes");

      const data: Note[] = await response.json(); // Type the response correctly
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
          <li key={note.id}>
            {note.title}: {note.contents}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
