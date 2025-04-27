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

const inspectionReport =
    "主机、主架外观检查：\n1. 主架外观有磕碰、划痕及脏污\n2. 主架搭边已脱落，延长杆处有变形现象\n\n主机功能检测:\n1. 按键启动仪器各指示灯无指示\n2. 连接电脑时，电源指示灯无指示，数据条灯无指示\n3. 主板曾超温处于116℃或更高, 电池已丢失\n4. 装上电池后无法进入测试记录，且无法删除数据\n5. 经检测，存储系统芯片损坏导致\n6. 经更换存储系统芯片测试验证后，变形模块已损坏，导致数据异常";

function IDColumn({
    cellContent,
    IDValue,
}: {
    cellContent: string;
    IDValue: string;
}) {
    return (
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
    );
}

function RepairSubMissionContent({
    repairSubMissionContent,
    shippingDate,
}: {
    repairSubMissionContent: string;
    shippingDate: string;
}) {
    return (
        <div className="grid grid-cols-[3fr_1fr] min-h-8">
            <section className="whitespace-pre-line p-2 leading-5  border-black border-r flex-3">
                {repairSubMissionContent}
            </section>
            <section className="flex-1 flex flex-col pt-2 pl-2">
                <div className="mb-1">出货时间：</div>
                <div>{shippingDate}</div>
            </section>
        </div>
    );
}

function RowContent({
    headerTitle,
    cellContent,
    className,
    headerClassName,
    cellClassName,
    ID,
    IDValue,
    repairSubMission,
    repairSubMissionContent,
    shippingDate,
}: {
    headerTitle: string;
    cellContent?: string;
    className?: string;
    headerClassName?: string;
    cellClassName?: string;
    ID?: boolean;
    IDValue?: string;
    repairSubMission?: boolean;
    repairSubMissionContent?: string;
    shippingDate?: string;
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
                    { " p-0 m-0": ID || repairSubMission },
                    cellClassName
                )}
            >
                {ID ? (
                    <IDColumn cellContent={cellContent} IDValue={IDValue!} />
                ) : repairSubMission ? (
                    <RepairSubMissionContent
                        repairSubMissionContent={repairSubMissionContent}
                        shippingDate={shippingDate}
                    />
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
                    headerTitle="送修检测"
                    repairSubMission={true}
                    repairSubMissionContent={inspectionReport}
                    shippingDate="2023-10-09"
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
