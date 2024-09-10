export default async function getAllUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw Error("Oops! something went wrong");
    return res.json();
}
