import PricingTable from "@/components/PricingTable";
import { cn } from "utility/helper";

function ColumnDisplay({
    label,
    value,
    className,
    labelClassName,
    valueClassName,
}: {
    label: string;
    value: string;
    className?: string;
    labelClassName?: string;
    valueClassName?: string;
}) {
    return (
        <div className={cn("flex text-blue-800", className)}>
            <div className={labelClassName}>{label}</div>
            <span className="font-medium">:</span>
            <div className={valueClassName}>{value}</div>
        </div>
    );
}

export default function Page() {
    return (
        <main className="w-[210mm] px-6">
            <section className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-2xl mb-1">
                    苏州慕翰电子科技有限公司
                </h1>
                <div className="flex border-b-1 border-b-blue-800 text-[13px]">
                    <ColumnDisplay
                        label="联系人"
                        value="宗培芳"
                        className="mr-3"
                    />
                    <ColumnDisplay
                        label="Tel"
                        value="18676737950"
                        className="mr-3"
                    />

                    <ColumnDisplay
                        label="Email"
                        value="peifang.zong@esamber.com"
                    />
                </div>
            </section>
            <section>
                <div className="flex flex-col my-3">
                    <h2 className="text-center font-extrabold text-[17px] mt-2">
                        设备维护报价单
                    </h2>
                    <div className="flex justify-between">
                        <div>
                            <ColumnDisplay
                                label="报价单号"
                                value="2023100901"
                                className="text-black mb-1"
                                labelClassName="w-[70px]"
                                valueClassName="ml-3"
                            />
                            <ColumnDisplay
                                label="客户"
                                value="peifang.zong@esamber.com"
                                className="text-black mb-1"
                                labelClassName="w-[70px]"
                                valueClassName="ml-3"
                            />
                            <ColumnDisplay
                                label="联系人"
                                value="peifang.zong@esamber.com"
                                className="text-black mb-1"
                                labelClassName="w-[70px]"
                                valueClassName="ml-3"
                            />
                            <ColumnDisplay
                                label="电话"
                                value="peifang.zong@esamber.com"
                                className="text-black"
                                labelClassName="w-[70px]"
                                valueClassName="ml-3"
                            />
                        </div>
                        <div>
                            <ColumnDisplay
                                label="日期"
                                value="peifang.zong@esamber.com"
                                className="text-black mb-1"
                                labelClassName="w-[40px]"
                                valueClassName="ml-3"
                            />
                            <ColumnDisplay
                                label="业务"
                                value="peifang.zong@esamber.com"
                                className="text-black mb-1"
                                labelClassName="w-[40px]"
                                valueClassName="ml-3"
                            />
                            <ColumnDisplay
                                label="币别"
                                value="peifang.zong@esamber.com"
                                className="text-black"
                                labelClassName="w-[40px]"
                                valueClassName="ml-3"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="font-extrabold text-[17px]">故障说明:</h2>
            </section>
            <section className="mb-10">
                <h2 className="font-extrabold text-[17px]">报价说明:</h2>
                <PricingTable />
            </section>
            <section>
                <h4 className=" text-[13px]">注意事项：</h4>
                <div className="flex justify-start">
                    <ul className="ml-5 mr-30">
                        <li className="text-[13px] mb-1">
                            1.付款条件 : 100% 预付
                        </li>
                        <li className="text-[13px] mb-1">
                            2.维护时间 : 确认维修后7个工作日
                        </li>
                        <li className="text-[13px] mb-1">
                            3.维护保固期 : 3个月(非人为损坏)
                        </li>
                        <li className="text-[13px] mb-1">
                            4.该报价单位为企业商业机密，未经允许禁止对外传播
                        </li>
                        <li className="text-[13px]">
                            5.如确认维护请将报价单签字盖章回传
                        </li>
                    </ul>
                    <ul className="mt-3">
                        <li className="text-[13px] mb-1">客户确认 :</li>
                        <li className="text-[13px] mb-1">(签字盖章)</li>
                        <li className="text-[13px]">确认日期 :</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
