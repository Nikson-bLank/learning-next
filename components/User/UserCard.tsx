import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function UserCard({ user }: { user: User }) {
    return (
        <div className="shadow-lg rounded-xl min-w-72 p-4 bg-white relative overflow-hidden">
            <Link href={`/users/${user.id}`} className="w-full h-full block">
                <div className="flex items-center border-b-2 mb-2 py-2">
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
                <div className="w-full">
                    <p className="text-gray-600 text-xl font-medium ">
                        {user.address.street}
                    </p>
                    <p className="text-gray-600 text-xs font-medium mb-2">
                        {user.address.city}
                    </p>
                </div>
            </Link>
        </div>
    );
}
