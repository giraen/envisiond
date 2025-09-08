"use client"

import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EceLayouts } from "./columns"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

function RowActions({ item }: { item: EceLayouts }) {
    return (
        <div
            className="flex justify-end md:justify-center gap-4"
        >
            <button
                className={`${item.status == "pending" ? "hidden" : "border rounded-md px-2 py-1 text-sm"}`}
                onClick={() => console.log("Viewing images for ", item.bill_id)}
            >
                View
            </button>

            <button
                className={`${item.status == "pending" ? "hidden" : "bg-green-700 rounded-md px-2 py-1 text-sm"}`}
                onClick={() => console.log("Downloading file for ", item.bill_id)}
            >
                Download
            </button>
        </div>
    )
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="overflow-hidden rounded md:px-8 lg:px-48">
            <div className="flex items-center pb-4">
                <input
                    placeholder="Filter emails..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm px-4 py-2 border-b focus:outline-none"
                />
            </div>

            {/* DESKTOP AND TABLET VIEW */}
            <div className="hidden md:block">
                <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead 
                                        key={header.id}
                                        className="font-bold"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                        }
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}

                                <TableCell>
                                    <RowActions item={row.original as EceLayouts} />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                You have no ECE plans to evaluate or billings to view.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>
            
            {/* MOBILE VIEW */}
            <div className="md:hidden space-y-2">
                {data.length ? (
                    (data as EceLayouts[]).map((row) => (
                        <div
                            key={row.bill_id}
                            className="border rounded-sm px-4 py-4 flex flex-col gap-4"
                        >
                            <div
                                className="flex justify-between text-sm"
                            >
                                <p className="font-bold">
                                    <span 
                                        className={`
                                            ${row.status == "done" ? "bg-green-500" : "bg-orange-400"}
                                            text-black px-2 py-1 rounded-xl text-xs font-normal uppercase
                                        `}
                                    >
                                        {row.status}
                                    </span> 
                                    {" " + row.title.substring(0, 8) + "..."}
                                </p>
                                <p>
                                    {row.date}
                                </p>
                            </div>

                            {RowActions({ item: row })}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xs border rounded-sm px-4 py-4">You have no ECE plans to evaluate or billings to view.</p>
                )}
            </div>

            <div
                className="flex justify-around mt-8 mb-4"
            >
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={`
                        ${!table.getCanPreviousPage()
                            ? "hidden cursor-not-allowed"
                            : "border rounded-xl px-8 py-2 text-sm"
                        }
                    `}
                >
                    Previous
                </button>

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={`
                        ${!table.getCanNextPage()
                            ? "hidden cursor-not-allowed"
                            : "rounded-xl px-8 py-2 text-sm bg-blue-900"
                        }
                    `}
                >
                    Next
                </button>
            </div>
        </div>
    )
}