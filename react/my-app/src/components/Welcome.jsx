function Welcome() {
    const handleClick = () => {
        alert("Welcome to React!");
    };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <button className="bg-green-200 p-2 rounded-2xl" onClick={handleClick}>click me</button>
    </div>
  );
}

export default Welcome;