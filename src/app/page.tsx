import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import Footer from "@/components/Footer";
import MaintenanceInstructionTable from "@/components/MaintenanceInstructionTable";
import PersonalInfo from "@/components/PersonalInfo";
import PricingTable from "@/components/PricingTable";
import { TitleInfo } from "@/components/TitleInfo";
import { cn } from "utility/helper";

function InputColumn({
    className,
    labelClassName,
    inputClassName,
    title,
    value,
    defaultValue,
    placeholder,
    inputType = "text",
}: {
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    title: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    inputType?: string;
}) {
    return (
        <div className={cn("flex items-center mb-3", className)}>
            <Label
                htmlFor={title}
                className={cn(
                    " whitespace-nowrap font-bold text-[14px]",
                    labelClassName
                )}
            >
                {title}
            </Label>
            <span>:</span>
            <Input
                value={value}
                defaultValue={defaultValue}
                className={cn("ml-2 w-40", inputClassName)}
                placeholder={placeholder}
                id={title}
                type={inputType}
            />
        </div>
    );
}

export default function Page() {
    return (
        <main className="flex">
            <div className="w-[210mm] px-6 py-4">
                <section className="flex flex-col items-center justify-center">
                    <TitleInfo />
                </section>
                <section>
                    <PersonalInfo />
                </section>
                <section className="mb-3">
                    <h2 className="font-extrabold text-[17px]">故障说明:</h2>
                    <MaintenanceInstructionTable />
                </section>
                <section className="mb-5">
                    <h2 className="font-extrabold text-[17px]">报价说明:</h2>
                    <PricingTable />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
            <div className="w-[210mm] px-6 py-4 border-l-2 border-l-blue-800">
                <InputColumn
                    title="姓名"
                    defaultValue="宗培芳"
                    placeholder="输入报价人姓名"
                />
                <InputColumn
                    title="邮箱"
                    defaultValue="peifang.zong@esamber.com"
                    placeholder="输入联系人电话"
                    inputType="email"
                    inputClassName="w-52"
                />
                <InputColumn
                    title="联系人"
                    defaultValue="宗培芳"
                    placeholder="输入联系人姓名"
                />
                <InputColumn
                    title="电话"
                    defaultValue="18676737950"
                    placeholder="输入联系人电话"
                />
                <InputColumn title="报价单号" placeholder="输入报价单号" />
                <div>
                    <Label>业务:</Label>
                </div>
            </div>
        </main>
    );
}
