import Image from "next/image";
import React, { Suspense } from "react";
import getUserData from "@/lib/getUserData";
import getUserPosts from "@/lib/getUserPosts";
import Posts from "@/components/Post/Posts";
import { Metadata } from "next";
import getAllUser from "@/lib/getAllUser";

type Params = {
    params: {
        userId: string;
    };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { userId } = params;
    const userData: Promise<User> = getUserData(userId);
    const user = await userData;

    return {
        title: user.name,
        description: `Posts created by ${user.name}`,
    };
}

export default async function UserDetail({ params }: Params) {
    const { userId } = params;
    const userData: Promise<User> = getUserData(userId);
    const user = await userData;
    return (
        <div className="container mx-auto">
            <div className="shadow-lg rounded-xl w-100 p-4 bg-white relative overflow-hidden">
                <div className="flex items-center  mb-2 py-2">
                    <Image
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    />

                    <div className="pl-3">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-gray-600 text-sm">
                            {user.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Suspense
                    fallback={
                        <h1 className="text-gray-600 text-xl">Loading...</h1>
                    }
                >
                    <Posts userId={user.id} />
                </Suspense>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const usersRequest: Promise<User[]> = getAllUser();
    const users = await usersRequest;

    return users.map((user) => ({ userId: user.id.toString() }));
}
