"use client";

import {
    ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import React from "react";

import { CirclePlus, Trash2, FilePenLine } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/components/ui/table";
import { Button } from "./components/ui/button";
import { InputColumn } from "./common/InputColumn";

type Invoice = {
    id: number;
    maintenanceTitle: string;
    quantity: string;
    unitPrice: number;
    totalAmount: number;
    remarks: string;
    action?: string;
};

export function InvoiceDetail() {
    const [data, setData] = React.useState<Invoice[]>([
        {
            id: 1,
            maintenanceTitle: "更换主板",
            quantity: "1",
            unitPrice: 1000,
            totalAmount: 1000,
            remarks: "主板损坏",
        },
        {
            id: 2,
            maintenanceTitle: "更换硬盘",
            quantity: "1",
            unitPrice: 500,
            totalAmount: 500,
            remarks: "硬盘损坏",
        },
    ]);

    const columnHelper = createColumnHelper<Invoice>();

    const columns: ColumnDef<Invoice, any>[] = [
        columnHelper.accessor("id", {
            header: "序号",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("maintenanceTitle", {
            header: "维护内容",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("quantity", {
            header: "数量",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("unitPrice", {
            header: "单价",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("totalAmount", {
            header: "金额",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("remarks", {
            header: "备注",
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor("action", {
            header: "操作",
            cell: ({ row }) => {
                return (
                    <div className="flex gap-2 justify-center">
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 cursor-pointer"
                        >
                            <FilePenLine size={16} />
                        </Button>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 cursor-pointer"
                        >
                            <Trash2 size={16} />
                        </Button>
                    </div>
                );
            },
            footer: (info) => info.column.id,
        }),
    ];

    const table = useReactTable<Invoice>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
            <h2 className="font-extrabold text-[17px] mb-4 bg-blue-800 text-white px-2 py-1 rounded-md">
                报价说明:
            </h2>
            <Table className="border border-black  leading-none">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <TableRow key={headerGroup.id} className="">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            style={{ width: header.getSize() }}
                                            className="border text-[13px] font-medium text-center border-black"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <TableCell
                                            key={cell.id}
                                            className="text-[13px] text-center border border-black"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <div className="flex flex-col gap-2 items-start mt-4">
                <section className="grid grid-cols-2 gap-3 my-2">
                    <InputColumn
                        title="维护内容"
                        placeholder="输入维护内容"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="数量"
                        placeholder="输入数量"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="单价"
                        placeholder="输入单价"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="金额"
                        placeholder="输入金额"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="备注"
                        placeholder="输入备注"
                        inputClassName="w-70"
                    />
                </section>
                <Button className="h-8">
                    <span>添加项目</span>
                    <CirclePlus />
                </Button>
            </div>
        </div>
    );
}
