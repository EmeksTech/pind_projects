import { useState, useEffect, useMemo } from "react";
import DashboardStats from "../components/DashboardStats";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const STORAGE_KEY = "genius-hub-react-students";
function readStudents() {
  try {
    const students = localStorage.getItem(STORAGE_KEY);
    return students ? JSON.parse(students) : [];
  } catch (error) {
    console.error("Error reading students from localStorage:", error);
    return [];
  }
}
export default function Students() {
  const [students, setStudents] = useState(readStudents);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  // update localStorage when students change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  // filter students based on search and status
  const visible = useMemo(
    () =>
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(search.toLowerCase()) &&
          (status === "all" ||
            (status === "passed" && student.score >= 50) ||
            (status === "failed" && student.score < 50)),
      ),
    [students, search, status],
  );
  //function to add student
  function addStudent(student) {
    setStudents((previous) => [...previous, student]);
  }
  //function to delete student
  function deleteStudent(id) {
    setStudents((previous) => previous.filter((student) => student.id !== id));
  }

  return (
    <div className="bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <h1>Student Management Dashboard</h1>
        <DashboardStats students={students} />
        <div className="grid md:grid-cols-[320px_1fr] gap-6">
          <StudentForm onAdd={addStudent} />
          <section className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Students</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <label className="text-sm">
                Search
                <input
                  className="block w-full border rounded-lg p-2 mt-1"
                  value={search}
                  placeholder="Search by name"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <label className="text-sm">
                Status
                <select
                  className="block w-full border rounded-lg p-2 mt-1"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="all">All Students</option>
                  <option value="passed">Passed</option>
                  <option value="failed">Failed</option>
                </select>
              </label>
            </div>
            <p className="text-xs text-slate-500">
              Showing {visible.length} of {students.length} students.
            </p>
            <StudentList students={visible} onDelete={deleteStudent} />
          </section>
        </div>
      </div>
    </div>
  );
}
