export default async function getUserPost(userId) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) throw Error("Oops! something went wrong");
    return res.json();
}
