import { CalenderColumn } from "@/components/common/CalenderColumn";
import { InputColumn } from "@/components/common/InputColumn";
import { SelectColumn } from "@/components/common/SelectColumn";
import { TextareaColumn } from "@/components/common/TextareaColumn";
import Footer from "@/components/Footer";
import { currencyItems, serviceItems } from "@/components/lib/constant";
import MaintenanceInstructionTable from "@/components/MaintenanceInstructionTable";
import PersonalInfo from "@/components/PersonalInfo";
import PricingTable from "@/components/PricingTable";
import { TitleInfo } from "@/components/TitleInfo";

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
            <div className="px-10 py-4 border-l-2 border-l-blue-800 min-w-[210mm] flex">
                <section className="pr-10">
                    <h2 className="font-extrabold text-[17px] mb-4">
                        基本信息:
                    </h2>
                    <InputColumn
                        title="报价单号"
                        placeholder="输入报价单号"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="联系人"
                        defaultValue="宗培芳"
                        placeholder="输入联系人姓名"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="姓名"
                        defaultValue="宗培芳"
                        placeholder="输入报价人姓名"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="邮箱"
                        defaultValue="peifang.zong@esamber.com"
                        placeholder="输入联系人电话"
                        inputType="email"
                        inputClassName="w-70"
                    />
                    <InputColumn
                        title="电话"
                        defaultValue="18676737950"
                        placeholder="输入联系人电话"
                        inputClassName="w-70"
                    />
                    <SelectColumn
                        title="业务"
                        placeholder="请选择服务业务"
                        dropdownItems={serviceItems}
                        selectorClassName="w-70"
                    />
                    <SelectColumn
                        title="币别"
                        placeholder="请选择币别"
                        dropdownItems={currencyItems}
                        selectorClassName="w-70"
                    />

                    <CalenderColumn title="日期" placeholder={"请选择日期"} />
                </section>
                <section className="pl-10">
                    <h2 className="font-extrabold text-[17px] mb-4">
                        故障说明:
                    </h2>
                    <InputColumn
                        title="ID号"
                        placeholder="请输入ID号"
                        inputClassName="w-100"
                    />
                    <InputColumn
                        title="需求单位"
                        placeholder="请输入需求单位"
                        inputClassName="w-100"
                    />
                    <InputColumn
                        title="设备名称"
                        placeholder="请输入设备名称"
                        inputClassName="w-100"
                    />
                    <InputColumn
                        title="设备型号"
                        placeholder="请输入设备型号"
                        inputClassName="w-100"
                    />
                    <InputColumn
                        title="用户反馈"
                        placeholder="请填写用户反馈内容"
                        inputClassName="w-100"
                    />
                    <TextareaColumn
                        title="送修检测"
                        placeholder="请填写送修检测内容"
                    />
                    <CalenderColumn
                        title="出货时间"
                        placeholder={"请选择出货日期"}
                        selectorClassName="w-100"
                    />
                </section>
            </div>
        </main>
    );
}
