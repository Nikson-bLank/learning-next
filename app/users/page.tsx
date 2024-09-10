/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import getAllUser from "@/lib/getAllUser";
import UserCard from "@/components/User/UserCard";

type Props = {};

export const metadata: Metadata = {
    title: "User List",
    description: "List of user fetched from API",
};

export default async function Users({}: Props) {
    const usersRequest: Promise<User[]> = getAllUser();
    const users = await usersRequest;
    return (
        <main className="container mx-auto">
            <h1 className="text-4xl">Users</h1>
            <div className="grid grid-cols-4 gap-4">
                {users?.map((user) => {
                    return <UserCard key={user.id} user={user} />;
                })}
            </div>
        </main>
    );
}
