import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeParagraph, setChangeParagraph] = useState(false);
  const changeParagraphHandler = () => {
    setChangeParagraph(true);
  };

  return (
    <div>
      <h2>Greetings Testers</h2>
      {!changeParagraph && <Output>Welcome to Unit Testing</Output>}
      {changeParagraph && <Output>Your Paragraph Text has Changed.</Output>}
      <button onClick={changeParagraphHandler}>Change Paragraph</button>
    </div>
  );
};

export default Greeting;
