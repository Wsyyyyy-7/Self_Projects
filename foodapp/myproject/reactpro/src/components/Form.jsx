import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", laseName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  //   function handleChange(e) {
  //     setName(e.target.value);
  //   }
  return (
    <div>
      {name.firstname} - {name.laseName}
      <form>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, laseName: e.target.value })}
          value={name.laseName}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
