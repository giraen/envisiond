"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EceLayouts = {
    bill_id: string
    title: string
    date: string
    status: "pending" | "done"
}

export const columns: ColumnDef<EceLayouts>[] = [
    { accessorKey: "status", header: "Status", 
      cell: ({ row }) => {
        return (
            <span
                className={`
                    ${row.original.status == "done" ? "bg-green-600" : "bg-orange-500"}
                    text-white px-2 py-1 rounded-xl text-xs font-normal uppercase
                `}
            >
                {row.original.status}
            </span>
        )
      }  
    },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "date", 
        header: ({ column }) => {
            return (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex"
                >
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    Date
                </button>
            )
        }
    },
]