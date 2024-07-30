import { useState } from "react";

const Greeting = () => {
  const [changeParagraph, setChangeParagraph] = useState(false);
  const changeParagraphHandler = () => {
    setChangeParagraph(true);
  };

  return (
    <div>
      <h2>Greetings Testers</h2>
      {!changeParagraph && <p>Welcome to Unit Testing</p>}
      {changeParagraph && <p>Your Paragraph Text has Changed.</p>}
      <button onClick={changeParagraphHandler}>Change Paragraph</button>
    </div>
  );
};

export default Greeting;
