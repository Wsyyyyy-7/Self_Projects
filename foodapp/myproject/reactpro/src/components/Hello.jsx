const name = "Rob";

function displayMessage() {
  return "Wow!";
}

function Hello({ person }) {
  //   return <h1>Hello from a component! {displayMessage()}</h1>;
  //   console.log(props);
  //   const { name, message } = props;
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
