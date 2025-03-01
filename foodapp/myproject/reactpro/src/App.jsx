import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Bob",
    message: "Hi there!",
    emoji: "😁",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      {/* <Hello person={person} /> */}
      {/* <Fruits />  */}
      {/* <ConditionalComponent /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
