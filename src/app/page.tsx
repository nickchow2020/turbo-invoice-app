import Footer from "@/components/Footer";
import MaintenanceInstructionTable from "@/components/MaintenanceInstructionTable";
import PersonalInfo from "@/components/PersonalInfo";
import PricingTable from "@/components/PricingTable";
import { TitleInfo } from "@/components/TitleInfo";

export default function Page() {
    return (
        <main className="w-[210mm] px-6 py-4">
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
        </main>
    );
}
