"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("User is now logged in");
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-4 [&>*:last-child]:mt-0 mx-8 my-20 px-8 py-4 md:mx-42 lg:mx-124 rounded-3xl bg-[var(--color-foreground)] text-[var(--background)]">
                <div
                    className="flex justify-center"
                >
                    <Image
                        src="/logo_with_name.jpg"
                        alt="Logo"
                        width={150}
                        height={37}
                    />
                </div>

                <h1 className="font-bold text-center md:text-2xl">Log in to your account</h1>

                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 flex-wrap"
                >
                    <div
                        className="md:flex gap-16 items-center"
                    >
                        <label htmlFor="inputEmail">Email: </label>
                        <input 
                            id="inputEmail"
                            name="inputEmail"
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border w-full px-4 py-2 rounded"
                        />
                    </div>

                    <div
                        className="md:flex gap-9 items-center"
                    >
                        <label htmlFor="inputPassword">Password: </label>
                        <input 
                            id="inputPassword"
                            name="inputPassword"
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border w-full px-4 py-2 rounded"
                        />
                    </div>

                    <div
                        className="flex flex-col text-center"
                    >
                        <button
                            type="submit"
                            className="bg-blue-700 px-16 py-1 md:px-28 font-bold rounded-2xl text-white self-center hover:bg-blue-900 transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                        <Link href="#" className="no-underline mt-2 text-xs text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Forgot Password?</Link>
                    </div>
                    
                </form>
            </div>
        </>
        
    )
}