import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    alert(`Student: ${trimmedName}`);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter student name"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
