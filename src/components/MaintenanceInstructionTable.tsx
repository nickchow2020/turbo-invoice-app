"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/components/ui/table";
import { cn } from "utility/helper";
function RowContent({
    headerTitle,
    cellContent,
    className,
    headerClassName,
    cellClassName,
    ID,
    IDValue,
}: {
    headerTitle: string;
    cellContent: string;
    className?: string;
    headerClassName?: string;
    cellClassName?: string;
    ID?: boolean;
    IDValue?: string;
}) {
    return (
        <TableRow className={cn("h-[10px] ", className)}>
            <TableHead
                className={cn(
                    "border text-[13px] font-medium text-center border-black",
                    headerClassName
                )}
            >
                {headerTitle}
            </TableHead>
            <TableCell
                className={cn(
                    "border text-[13px] font-medium border-black text-left",
                    { " p-0 m-0": ID },
                    cellClassName
                )}
            >
                {ID ? (
                    <div className="flex h-8 items-center justify-between">
                        <section className="flex-1 border-r border-black h-full items-center flex justify-start ml-2">
                            {cellContent}
                        </section>
                        <section className="flex flex-1 h-8">
                            <div className=" flex-1 border-r border-black h-full items-center flex justify-center">
                                ID
                            </div>
                            <div className=" flex-2 h-full items-center flex justify-start ml-2">
                                {IDValue}
                            </div>
                        </section>
                    </div>
                ) : (
                    cellContent
                )}
            </TableCell>
        </TableRow>
    );
}

export default function MaintenanceInstructionTable() {
    return (
        <Table className="border border-black leading-none">
            <TableBody>
                <RowContent
                    headerTitle="设备名称"
                    cellContent="焊炉轨道测试仪"
                    headerClassName="h-2"
                />
                <RowContent
                    headerTitle="设备型号"
                    cellContent="CBP100D"
                    headerClassName="h-2"
                    ID={true}
                    IDValue="600150"
                />
                <RowContent
                    headerTitle="用户反馈"
                    cellContent="更换电池后无法使用 (寻常高温)"
                    headerClassName="h-2"
                />
                <RowContent
                    headerTitle="需求单位"
                    cellContent="越南仁宝"
                    headerClassName="h-2"
                />
            </TableBody>
        </Table>
    );
}
