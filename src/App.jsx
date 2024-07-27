import React, { useState } from "react";

const App = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  return (
    <div>
      {buttonVisible && <h1>Heading</h1>}
      <button onClick={() => setButtonVisible((prevState) => !prevState)}>
        Click
      </button>
    </div>
  );
};

export default App;
