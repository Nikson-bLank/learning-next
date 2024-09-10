import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
    weight: ["400", "300", "500", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next App",
    description: "Learning Next JS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <nav className="flex justify-between items-center bg-white container mx-auto py-10">
                    <h1 className="text-xl text-gray-800 font-bold">
                        Learn NextJS
                    </h1>
                    <div className="flex items-center">
                        <ul className="flex space-x-6">
                            <li className="font-semibold text-gray-700">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className="font-semibold text-gray-700">
                                <Link href={"/users"}>Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
