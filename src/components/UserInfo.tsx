import UserTable from "./UserTable";

import React from "react";
const UserInfo: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      <UserTable />
    </div>
  );
};

export default UserInfo;
