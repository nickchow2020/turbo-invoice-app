import { ColumnDisplay } from "./common/ColumnDisplay";

export default function PersonalInfo() {
    return (
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
                        value="Công ty TNHH Compal (Việt Nam)"
                        className="text-black mb-1"
                        labelClassName="w-[70px]"
                        valueClassName="ml-3"
                    />
                    <ColumnDisplay
                        label="联系人"
                        value="宗培芳"
                        className="text-black mb-1"
                        labelClassName="w-[70px]"
                        valueClassName="ml-3"
                    />
                    <ColumnDisplay
                        label="电话"
                        value="18676737950"
                        className="text-black"
                        labelClassName="w-[70px]"
                        valueClassName="ml-3"
                    />
                </div>
                <div>
                    <ColumnDisplay
                        label="日期"
                        value="2025-04-23"
                        className="text-black mb-1"
                        labelClassName="w-[40px]"
                        valueClassName="ml-3"
                    />
                    <ColumnDisplay
                        label="业务"
                        value="设备维护"
                        className="text-black mb-1"
                        labelClassName="w-[40px]"
                        valueClassName="ml-3"
                    />
                    <ColumnDisplay
                        label="币别"
                        value="人民币"
                        className="text-black"
                        labelClassName="w-[40px]"
                        valueClassName="ml-3"
                    />
                </div>
            </div>
        </div>
    );
}
