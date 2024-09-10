import React from "react";
import getUserPosts from "@/lib/getUserPosts";
import PostCard from "./PostCard";

type Props = {
    userId: number;
};

export default async function PostList({ userId }: Props) {
    const userPosts: Promise<Post[]> = getUserPosts(userId);
    const posts = await userPosts;
    return (
        <>
            <h2 className="text-2xl mb-2">Posts</h2>
            <div className="flex flex-col gap-5">
                {posts.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    );
                })}
            </div>
        </>
    );
}
