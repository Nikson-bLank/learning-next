export default async function getUserData(userId) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    if (!res.ok) throw Error("Oops! something went wrong");
    return res.json();
}
