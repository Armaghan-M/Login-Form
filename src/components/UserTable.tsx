import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper
} from "@tanstack/react-table";
import { useState, useEffect } from "react";
import React from "react";
export interface User {
  firstName: string;
  password: string;
  phone: string;
}

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("firstName", {
    header: "Firstname",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("password", {
    header: "Password",
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    cell: (info) => info.getValue()
  })
];

const UserTable: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    // Fake API call
    fetch("https://dummyjson.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data.users.slice(0, 10)))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  console.log(data);
  return (
    <table className="table-auto min-w-full shadow-lg bg-blue-300 text-center">
      <tbody>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border border-b-4 bg-yellow-500">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-4">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}

        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border border-b-4">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-4">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserTable;
