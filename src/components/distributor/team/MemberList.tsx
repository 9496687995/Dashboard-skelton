import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import Image from "next/image";
//import { Button } from "@/componeFnts/ui/button";
import Button from "@/components/ui/button/Button";
import { BoxIcon, PlugInIcon, TaskIcon, EyeIcon } from "@/icons";


interface Member {

    id: number;
    user: {
        image: string;
        name: string;
        role: string;
        email: string;
        phone: string;
    };
    status: string;
}

const members: Member[] = [
    {
        id: 1,
        user: {
            image: "/images/user/user-17.jpg",
            name: "Lindsey Curtis",
            role: "Web Designer",
            email: "lindsey@example.com",
            phone: "+91 9876543210",
        },
        status: "Active",
    },
    {
        id: 2,
        user: {
            image: "/images/user/user-18.jpg",
            name: "Kaiya George",
            role: "Project Manager",
            email: "kaiya@example.com",
            phone: "+91 9988776655",
        },
        status: "Pending",
    },
];

export default function MemberList() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    User
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Email
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Phone
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Status
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {members.map((member) => (
                                <TableRow key={member.id}>
                                    {/* User */}
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={member.user.image}
                                                    alt={member.user.name}
                                                />
                                            </div>
                                            <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {member.user.name}
                                                </span>
                                                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                    {member.user.role}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Email */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {member.user.email}
                                    </TableCell>

                                    {/* Phone */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {member.user.phone}
                                    </TableCell>

                                    {/* Status */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <Badge
                                            size="sm"
                                            color={
                                                member.status === "Active"
                                                    ? "success"
                                                    : member.status === "Pending"
                                                        ? "warning"
                                                        : "error"
                                            }
                                        >
                                            {member.status}
                                        </Badge>
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <div className="flex gap-2">
                                            {<div className="flex items-center gap-5">
                                                <Button size="sm" variant="outline" endIcon={<PlugInIcon />}>
                                                    Add
                                                </Button>
                                                <Button size="sm" variant="outline" endIcon={<TaskIcon />}>
                                                    Remove
                                                </Button>
                                                <Button size="sm" variant="primary" endIcon={<EyeIcon />}>
                                                    View
                                                </Button>
                                            </div>}
                                        </div>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
