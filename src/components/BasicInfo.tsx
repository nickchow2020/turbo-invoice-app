import { CalenderColumn } from "./common/CalenderColumn";
import { InputColumn } from "./common/InputColumn";
import { SelectColumn } from "./common/SelectColumn";
import { currencyItems, serviceItems } from "./lib/constant";

export default function BasicInfo() {
    return (
        <section className="pr-10">
            <h2 className="font-extrabold text-[17px] mb-4">基本信息:</h2>
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
    );
}
