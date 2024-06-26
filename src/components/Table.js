import * as React from 'react'
import {useEffect, useState} from 'react'
import {flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table'
import {EditCell} from "./EditCell";
import {FooterCell} from "./FooterCell";
import {Cell} from "./Cell";

function Table() {
    return (
        <CreateTable/>
    )
}

const defaultData = [
    {
        "id": 1,
        "name": "Rihab El Amine1",
        "email": "rihab-elamine@hotmail.com",
        "phone": "71410569"
    },
    {
        "id": 2,
        "name": "Rihab El Amine2",
        "email": "rihab-elamine@hotmail.com",
        "phone": "71410569"
    },
    {
        "id": 3,
        "name": "Rihab El Amine3",
        "email": "rihab-elamine@hotmail.com",
        "phone": "71410569"
    },
    {
        "id": 4,
        "name": "Rihab El Amine4",
        "email": "rihab-elamine@hotmail.com",
        "phone": "71410569"
    }
];
const columns = [
    {
        header: 'Name',
        accessorKey: 'name',
        cell: Cell
    },
    {
        header: 'Email',
        accessorKey: 'email',
        cell: Cell
    },
    {
        header: 'Phone',
        accessorKey: 'phone',
        cell: Cell
    },
    {
        id: 'edit',
        cell: EditCell
    },
]

function CreateTable() {
    const [data, setData] = useState([...defaultData]);
    const [editedRows, setEditedRows] = useState({});

    // Get All Users
    // const getUsers = () => {
    //     fetch('http://localhost:3000/users')
    //         .then((response) => response.json())
    //         .then((result) => setData(result))
    //         .catch((error) => console.log("error", error));
    // };

    // // Add new User
    // const addUser = () => {
    //     fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({name: 'newName'})
    //     })
    //         .then((response) => response.json())
    //         .then((result) => setData(result))
    //         .catch((error) => console.log("error", error));
    // }
    //
    // // Update User
    // const UpdateUser = (id) => {
    //     fetch('http://localhost:3000/users/' + id, {
    //         method: 'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({name: "updatedName"})
    //     })
    //         .then((response) => response.json())
    //         .then((result) => setData(result))
    //         .catch((error) => console.log("error", error));
    // }
    //
    // // Delete User
    // const DeleteUser = (id) => {
    //     fetch('http://localhost:3000/users/' + id, {
    //         method: 'DELETE'
    //     })
    //         .then((response) => response.json())
    //         .catch((error) => console.log("error", error));
    // }
    //
    // // Get Users
    // useEffect(() => {
    //     getUsers();
    // }, []);


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            editedRows,
            setEditedRows,
            updateData: (rowIndex, columnId, value) => {
                const setUpdateFunc = (old) => {
                    return old.map((row, index) => {
                        if (index === rowIndex) {
                            return {
                                ...old[rowIndex],
                                [columnId]: value,
                            };
                        }
                        return row;
                    })
                }
                setData(setUpdateFunc);
                // const row = table.getRow(rowIndex);
                // useEffect(() => {
                //     UpdateUser(row.original.id);
                // }, []);
            },
            addRow: () => {
                const newRow = {
                    "id": 5,
                    "name": "Rihab El Amine5",
                    "email": "rihab-elamine@hotmail.com",
                    "phone": "71410569"
                };
                const setFunc = (old) => [...old, newRow];
                setData(setFunc);
                // useEffect(() => {
                //     addUser();
                // }, []);
            },
            removeRow: (rowIndex) => {
                const setFilterFunc = (old) =>
                    old.filter((_row, index) => index !== rowIndex);
                setData(setFilterFunc);
                // const row = table.getRow(rowIndex);
                // useEffect(() => {
                //     DeleteUser(row.original.id);
                // }, []);
            }
        }
    })

    return (
        <article className="table-container">
            <table>
                <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
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
                <tfoot>
                <tr>
                    <th colSpan={table.getCenterLeafColumns().length} align="right">
                        <FooterCell table={table}/>
                    </th>
                </tr>
                </tfoot>
            </table>
        </article>
    );
}

export default Table;
