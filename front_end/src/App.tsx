import { useState } from "react";
import "./App.css";

type DataRow = { [key: string]: any }; // Generic type for any table row

function App() {
  const [data, setData] = useState<DataRow[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedTable, setSelectedTable] = useState("profiles"); // Default table

  // Function to fetch data from any table
  const fetchData = async () => {
    try {
      if (!showTable) {
        const response = await fetch(`http://localhost:8080/${selectedTable}`);
        if (!response.ok) throw new Error(`Failed to fetch ${selectedTable}`);

        const fetchedData: DataRow[] = await response.json();
        setData(fetchedData);
        console.log(`Fetched data from ${selectedTable}:`, fetchedData);
      }
    } catch (error) {
      console.error(`Error fetching ${selectedTable}:`, error);
    }
    setShowTable(!showTable);
  };

  return (
    <div>
      {/* Dropdown to select table */}
      <select
        value={selectedTable}
        onChange={(e) => setSelectedTable(e.target.value)}
      >
        <option value="profiles">Profiles</option>
        <option value="notifications">Notifications</option>
        <option value="posts">Posts</option>
        <option value="subforums">Sub Forums</option>
        <option value="comments">Comments</option>
        <option value="resources">Resources</option>
        <option value="matching_request_forms">Matching Request Forms</option>
        {/* Add more tables here */}
      </select>

      {/* Fetch Data Button */}
      <button className="customButton" onClick={fetchData}>
        {showTable ? "Hide Table" : "Load Table"}
      </button>

      {/* Dynamic Table Rendering */}
      {showTable && data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th> // Generate table headers dynamically
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td> // Generate table cells dynamically
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
