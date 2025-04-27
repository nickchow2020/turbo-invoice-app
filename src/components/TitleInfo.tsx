import { ColumnDisplay } from "./common/ColumnDisplay";

export function TitleInfo() {
    return (
        <>
            <h1 className="font-extrabold text-2xl mb-1">
                苏州慕翰电子科技有限公司
            </h1>
            <div className="flex border-b-1 border-b-blue-800 text-[13px]">
                <ColumnDisplay label="联系人" value="宗培芳" className="mr-3" />
                <ColumnDisplay
                    label="Tel"
                    value="18676737950"
                    className="mr-3"
                />

                <ColumnDisplay label="Email" value="peifang.zong@esamber.com" />
            </div>
        </>
    );
}
