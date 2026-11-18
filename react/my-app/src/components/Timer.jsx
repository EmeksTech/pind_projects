import { useState } from "react";

function Timer() {
  const [stateCount, setStateCount] = useState(0);
  let variableCount = 0;
  console.log("variableCount:", variableCount);

  return (
    <>
      <h2>useState value: {stateCount}</h2>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setStateCount((count) => count + 1)}>
        Increment state
      </button>

      <h2>Normal variable value: {variableCount}</h2>
      <button className="bg-green-500 text-white p-2 rounded" onClick={() => variableCount++}>
        Increment variable
      </button>
    </>
  );
}

export default Timer;
