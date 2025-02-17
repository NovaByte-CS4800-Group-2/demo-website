import ListGroup from "./components/ListGroup"; // always import code from other files at the top of the file
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
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
// npm run dec to start the server
export default App; // export as default object from this module
