// i want to fetch users from jasonplaceholder and display them in a list using react
import { useState, useEffect } from "react";

function DisplayUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
        {/* kindly add tailwind classes */}
      <h2 className="text-xl font-bold mb-2">Users</h2>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id} className="mb-1">
            <strong className="text-lg">{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUser;
