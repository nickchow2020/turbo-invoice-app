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
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("serviceDescription", {
        header: () => "维护内容",
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("quantity", {
        header: () => "数量",
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("unitPrice", {
        header: () => "单价",
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("amount", {
        header: "金额",
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor("remarks", {
        header: "备注",
        footer: (info) => info.column.id,
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
        <Table>
            <TableHeader>
                <TableRow>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
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
                </TableRow>
            </TableHeader>
            <TableBody>
                {[].map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                            {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                            {invoice.totalAmount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
