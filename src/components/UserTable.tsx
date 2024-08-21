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
      .then((data) => setData(data.users.slice(0, 5)))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  console.log(data);
  return (
    <table>
      <tbody>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}

        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
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
