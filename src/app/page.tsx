"use client";
import BasicInfo from "@/components/BasicInfo";
import Footer from "@/components/Footer";
import Instruction from "@/components/Instruction";
import { Invoice, InvoiceDetail } from "@/components/InvoiceDetail";
import MaintenanceInstructionTable from "@/components/MaintenanceInstructionTable";
import PersonalInfo from "@/components/PersonalInfo";
import PricingTable from "@/components/PricingTable";
import { TitleInfo } from "@/components/TitleInfo";
import { FormProvider, useForm } from "react-hook-form";

export type FormValues = {
    quoteNo: string;
    contactName: string;
    name: string;
    email: string;
    phone: string;
    clientName: string;
    service: string;
    currencyType: string;
    serviceDate: string;
    quoteID: string;
    clientOrganization: string;
    deviceName: string;
    deviceModel: string;
    userFeedback: string;
    repairServices: string;
    deliveryTime: string;
    fctTax: string;
    pricingInstructions: Invoice[];
};

export default function Page() {
    const methods = useForm<FormValues>({
        defaultValues: {
            //base info
            quoteNo: "",
            contactName: "宗培芳",
            name: "宗培芳",
            email: "peifang.zong@esamber.com",
            phone: "18676737950",
            clientName: "",
            service: "",
            currencyType: "人民币",
            serviceDate: "",

            //instruction info
            quoteID: "",
            clientOrganization: "",
            deviceName: "",
            deviceModel: "",
            userFeedback: "",
            repairServices: "",
            deliveryTime: "",

            //tax info
            fctTax: "false",

            //pricing info
            pricingInstructions: [],
        },
    });
    return (
        <FormProvider {...methods}>
            <main className="flex">
                <div className="w-[210mm] px-6 py-4">
                    <section className="flex flex-col items-center justify-center">
                        <TitleInfo />
                    </section>
                    <section>
                        <PersonalInfo />
                    </section>
                    <section className="mb-3">
                        <h2 className="font-extrabold text-[17px]">
                            故障说明:
                        </h2>
                        <MaintenanceInstructionTable />
                    </section>
                    <section className="mb-5">
                        <h2 className="font-extrabold text-[17px]">
                            报价说明:
                        </h2>
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
                        <InvoiceDetail />
                    </article>
                </div>
            </main>
        </FormProvider>
    );
}
