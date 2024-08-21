import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fake API call
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      {user ? <UserTable user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default UserInfo;
