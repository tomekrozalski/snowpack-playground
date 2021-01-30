import React, { useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Welcome in React App</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </>
  );
};

export default App;
