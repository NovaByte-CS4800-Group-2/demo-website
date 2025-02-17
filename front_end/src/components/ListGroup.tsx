import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
} // allows use to reuse the component with different props (we can use the same code for different lists)

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook: a function that lets you hook into react state and lifecycle features from function components
  const [selectedIndex, setSelectedIndex] = useState(-1); // useState is a hook that returns an array of two elements, the first element is the state and the second element is a function that updates the state

  // component cannot return multiple elements
  return (
    // in jsx we can only use HTML elements or other react componets, so we put code in curly braces to render dynalically
    // the code converts the array into a list of items, and again curly braces renders data dynamically
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } // active class highlights the selected item
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} // passing the function as a reference, whenver user clicks on the item, the function will be executed. calling the function will be done in runtime
          >
            {item}
          </li>
        ))}
      </ul>
    </> // when this compoent is rendered on the DOM, we won't have an extra element
  );
}
// command d to select multiple lines
// to wrap a block of code in a div, highlight the code and press:
// command shift p -> emmet: wrap with abbreviation -> div

// prop: input passed to componet, should be treated as an immutable value (function arguemnt)
// state: a value that can change over time, should be treated as a mutable value (local variable)

export default ListGroup;
