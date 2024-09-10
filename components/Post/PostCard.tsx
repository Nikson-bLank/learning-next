import React from "react";

type Props = {
    title: string;
    body: string;
};

export default function PostCard({ title, body }: Props) {
    return (
        <div className="shadow-lg rounded-xl w-100 p-4 bg-white relative overflow-hidden">
            <div className="w-full">
                <p className="text-gray-700 text-xl font-medium">{title}</p>
                <p className="text-gray-500 text-lg font-medium mb-2">{body}</p>
            </div>
        </div>
    );
}
