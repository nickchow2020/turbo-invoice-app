"use client";
import {
    ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/components/ui/table";

import { useState } from "react";

type Pricing = {
    serialNo: number;
    serviceDescription: string;
    quantity: number;
    unitPrice: number;
    amount: number;
    remarks: string;
};

const defaultData: Pricing[] = [
    {
        serialNo: 1,
        serviceDescription: "整机故障排查费",
        quantity: 1,
        unitPrice: 100,
        amount: 100,
        remarks: "",
    },
    {
        serialNo: 2,
        serviceDescription: "更换储存系统芯片",
        quantity: 1,
        unitPrice: 200,
        amount: 200,
        remarks: "",
    },
    {
        serialNo: 3,
        serviceDescription: "更换变形模块",
        quantity: 1,
        unitPrice: 300,
        amount: 300,
        remarks: "",
    },
    {
        serialNo: 4,
        serviceDescription: "更换左右两边延长杆",
        quantity: 1,
        unitPrice: 400,
        amount: 400,
        remarks: "",
    },
    {
        serialNo: 5,
        serviceDescription: "更换数据指示灯",
        quantity: 1,
        unitPrice: 500,
        amount: 500,
        remarks: "",
    },
];

const columnHelper = createColumnHelper<Pricing>();

const columns: ColumnDef<Pricing, any>[] = [
    columnHelper.accessor("serialNo", {
        header: () => "序号",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("serviceDescription", {
        header: () => "维护内容",
        cell: (info) => <span className="flex">{info.getValue()}</span>,
    }),
    columnHelper.accessor("quantity", {
        header: () => "数量",
        cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("unitPrice", {
        header: () => "单价 (未税)",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
        header: "金额 (未税)",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("remarks", {
        header: "备注",
        cell: (info) => info.getValue(),
    }),
];

export default function PricingTable() {
    const [fromData, setFromData] = useState<Pricing[]>(defaultData);

    const table = useReactTable({
        data: fromData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <Table className="rounded-md border border-black">
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
            <TableFooter>
                <TableRow className="bg-[#fff]">
                    <TableCell
                        colSpan={3}
                        className="text-[13px] text-center border border-black"
                    ></TableCell>
                    <TableCell className="text-right border border-black">
                        总价 (未税)
                    </TableCell>
                    <TableCell
                        colSpan={2}
                        className="text-left border border-black"
                    >
                        $2,500.00
                    </TableCell>
                </TableRow>
                <TableRow className="bg-[#fff]">
                    <TableCell
                        colSpan={3}
                        className="text-[13px] text-center border border-black"
                    ></TableCell>
                    <TableCell className="text-right border border-black">
                        总价 (含税)
                    </TableCell>
                    <TableCell
                        colSpan={2}
                        className="text-left border border-black"
                    >
                        $2,500.00
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
