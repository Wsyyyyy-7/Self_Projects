import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  //   const display = true;
  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }
  let messageOne = <h1>This is message one</h1>;
  let messageTwo = <h1>This is message two</h1>;

  const display = true;
  return display ? <Welcome /> : <Code />;
}
