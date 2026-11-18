import {useState, useEffect, useMemo} from "react";


const STORAGE_KEY = "genius-hub-react-students";
function readStudents(){
    try{
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
    useEffect( () => {
        localStorage.setItem(STORAGE_KEY, 
            JSON.stringify(students));
    }, [students]);

    // filter students based on search and status
    const visible = useMemo(
        () => students.filter((student) => 
            student.name.toLowerCase().includes(search.toLowerCase()) && (status === "all" || (status === "passed" && student.score >= 50) || (status === "failed" && student.score < 50))),
        [students, search, status]
    );
    //function to add student
    function addStudent(student) {
        setStudents((previous) =>[...previous, student]);
    }
    //function to delete student
    function deleteStudent(id) {
        setStudents((previous) => previous.filter(
            (student) => student.id !== id
        ));
    }

  return (
    <div className="bg-slate-100 text-slate-900">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
         <h1>Student Management Dashboard</h1>

        </div>
    </div>
  );
}
