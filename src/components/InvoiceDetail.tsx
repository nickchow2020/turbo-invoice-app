"use client";

import {
    ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import React, { useState } from "react";

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
import { InputColumn, InputColumnRegular } from "./common/InputColumn";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "app/page";

export type Invoice = {
    id?: number;
    maintenanceTitle: string;
    quantity: string;
    unitPrice: number;
    totalAmount: number;
    remarks: string;
    action?: string;
};

export function InvoiceDetail() {
    const { control } = useFormContext<FormValues>();
    const {
        fields: data,
        append,
        remove,
    } = useFieldArray<FormValues, "pricingInstructions">({
        control,
        name: "pricingInstructions",
    });

    const [currentInvoice, setCurrentInvoice] = useState<Invoice>();

    const columnHelper = createColumnHelper<Invoice>();

    const columns: ColumnDef<Invoice, any>[] = [
        columnHelper.accessor("id", {
            header: "序号",
            cell: ({ row }) => row.index + 1,
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

    const handleAddInvoiceItem = () => {
        if (currentInvoice) {
            append({
                maintenanceTitle: currentInvoice.maintenanceTitle,
                quantity: currentInvoice.quantity,
                unitPrice: Number(currentInvoice.unitPrice),
                totalAmount: Number(currentInvoice.totalAmount),
                remarks: currentInvoice.remarks,
            });
            setCurrentInvoice(null);
        } else {
            {
                setCurrentInvoice({
                    maintenanceTitle: "",
                    quantity: "",
                    unitPrice: 0,
                    totalAmount: 0,
                    remarks: "",
                });
            }
        }
    };

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentInvoice((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                {currentInvoice && (
                    <section className="grid grid-cols-2 gap-2 my-2">
                        <InputColumnRegular
                            title="维护内容"
                            placeholder="输入维护内容"
                            inputClassName="w-70"
                            value={currentInvoice.maintenanceTitle}
                            onChange={handleOnInputChange}
                            name="maintenanceTitle"
                        />
                        <InputColumnRegular
                            title="数量"
                            placeholder="输入数量"
                            inputClassName="w-70"
                            onChange={handleOnInputChange}
                            name="quantity"
                            inputType="number"
                        />
                        <InputColumnRegular
                            title="单价"
                            placeholder="输入单价"
                            inputClassName="w-70"
                            onChange={handleOnInputChange}
                            name="unitPrice"
                            inputType="number"
                        />
                        <InputColumnRegular
                            title="金额"
                            placeholder="输入金额"
                            inputClassName="w-70"
                            onChange={handleOnInputChange}
                            name="totalAmount"
                            inputType="number"
                        />
                        <InputColumnRegular
                            title="备注"
                            placeholder="输入备注"
                            inputClassName="w-70"
                            onChange={handleOnInputChange}
                            name="remarks"
                        />
                    </section>
                )}

                <Button
                    className="h-8 cursor-pointer"
                    onClick={handleAddInvoiceItem}
                >
                    {currentInvoice ? (
                        <span>保存报价说明</span>
                    ) : (
                        <span>添加报价说明</span>
                    )}
                    <CirclePlus />
                </Button>
            </div>
        </div>
    );
}
