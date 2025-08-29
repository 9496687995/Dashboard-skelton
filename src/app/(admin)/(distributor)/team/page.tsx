import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MemberList from "@/components/distributor/team/MemberList";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Mellbizz | Team members",
    description:
        "Team members listing page.",
    // other metadata
};

export default function MemberListPage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="Team Members List" />
            <div className="space-y-6">
                <ComponentCard title="Delivery Partner">
                    <MemberList />
                </ComponentCard>
            </div>
        </div>
    );
}
