// tsx file: type script with react components

function Message() {
  // JSX: JavaSript XML: this code is going to get converted to JS under the hood
  const name = "Natalie";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello World</h1>;
}

export default Message; // export as default object from this module
