import StudentCard from "./StudentCard.jsx";
export default function StudentList({ students, onDelete }) {
  if (!students.length)
    return <p className="text-slate-500 py-5">No matching students.</p>;
  return (
    <ul>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onDelete={onDelete} />
      ))}
    </ul>
  );
}
