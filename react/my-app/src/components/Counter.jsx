import {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <p >You clicked {count} times</p>
      <button className="bg-blue-500 p-2 rounded-2xl" onClick={() => setCount(count + 1)}>
        increment
      </button>
      {/* decrement button */}
      <button className="bg-red-500 p-2 rounded-2xl" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;