import BasicInfo from "@/components/BasicInfo";
import Footer from "@/components/Footer";
import Instruction from "@/components/Instruction";
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
            <div className="px-10 py-4 border-l-2 border-l-blue-800 min-w-[210mm]">
                <article className="flex h-fit w-full">
                    <BasicInfo />
                    <Instruction />
                </article>
                <article>
                    <h2 className="font-extrabold text-[17px] mb-4 bg-blue-800 text-white px-2 py-1 rounded-md">
                        报价说明:
                    </h2>
                </article>
            </div>
        </main>
    );
}
