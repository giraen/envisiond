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

    return(
        <div className="flex flex-col justify-center h-[75vh] px-8 md:px-28 lg:px-96 text-[var(--background)]">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 rounded-xl py-8 bg-[var(--color-foreground)]">
                <div className="row-start-1 flex justify-center">
                    <Image
                        src="/logo_with_name.jpg"
                        alt="Logo"
                        width={150}
                        height={37}
                    />
                </div>

                <h1 className="font-bold text-center text-xl">Log in to your account</h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 mx-auto px-6 w-full max-w-md md:max-w-lg lg:max-w-xl"
                >
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                        <label htmlFor="inputEmail" className="text-sm text-gray-600 md:w-24 md:text-right">Email: </label>
                        <input 
                            id="inputEmail"
                            name="inputEmail"
                            type="email" 
                            value={email}
                            placeholder="juandelacruz@email.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-400 w-full px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                        <label htmlFor="inputPassword" className="text-sm text-gray-600 md:w-24 md:text-right">Password: </label>
                        <input 
                            id="inputPassword"
                            name="inputPassword"
                            type="password" 
                            value={password}
                            placeholder="********"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-gray-400 w-full px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div
                        className="flex flex-col text-center"
                    >
                        <button
                            type="submit"
                            className="bg-blue-700 px-20 py-2 md:px-28 font-bold rounded-3xl text-white self-center hover:bg-blue-900 transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                        <Link href="#" className="no-underline mt-2 text-xs text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}