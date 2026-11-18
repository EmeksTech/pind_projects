import { useState } from "react";
export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");
  function submit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    const value = Number(score);
    if (
      !cleanName ||
      score.trim() === "" ||
      !Number.isFinite(value) ||
      value < 0 ||
      value > 100
    ) {
      setError("Provide a name and score from 0 to 100.");
      return;
    }
    onAdd({ id: crypto.randomUUID(), name: cleanName, score: value });
    setName("");
    setScore("");
    setError("");
  }
  return (
    <section className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Add student</h2>
      <form onSubmit={submit} className="grid gap-3">
        <label className="text-sm font-medium">
          Name
          <input
            className="block w-full border rounded-lg p-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            required
          />
        </label>
        <label className="text-sm font-medium">
          Score (0–100)
          <input
            className="block w-full border rounded-lg p-2 mt-1"
            type="number"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </label>
        {error && (
          <p role="alert" className="text-red-700 text-sm">
            {error}
          </p>
        )}
        <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-2">
          Add student
        </button>
      </form>
    </section>
  );
}
