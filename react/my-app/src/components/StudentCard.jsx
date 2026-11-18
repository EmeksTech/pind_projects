export default function StudentCard({ student, onDelete }) {
  const passed = student.score >= 50;
  return (
    <li className="flex items-center justify-between gap-3 border-b py-3">
      <div>
        <h3 className="font-semibold">{student.name}</h3>
        <p className="text-sm text-slate-500">
          Score: {student.score}/100{" "}
          <span
            className={
              passed
                ? "text-green-700 font-semibold"
                : "text-red-700 font-semibold"
            }
          >
            · {passed ? "Passed" : "Failed"}
          </span>
        </p>
      </div>
      <button
        onClick={() => onDelete(student.id)}
        aria-label={`Delete ${student.name}`}
        className="bg-red-50 text-red-800 border border-red-200 rounded-lg px-3 py-2 hover:bg-red-100"
      >
        Delete
      </button>
    </li>
  );
}
