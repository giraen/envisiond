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
            <div className="grid grid-cols-1 gap-4 [&>*:last-child]:mt-0 mx-8 my-20 px-8 py-4 rounded-3xl bg-[var(--color-foreground)] text-[var(--background)]">
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

                <h1 className="font-bold text-center">Log in to your account</h1>

                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <label htmlFor="">Email: </label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border w-full px-4 py-2 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="">Password: </label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border w-full px-4 py-2 rounded"
                        />
                    </div>

                    <div
                        className="flex flex-col text-center gap-2"
                    >
                        <button
                            type="submit"
                            className="bg-blue-700 px-16 py-1 rounded-2xl text-white self-center"
                        >
                            Login
                        </button>
                        <Link href="#" className="text-xs">Forgot Password?</Link>
                    </div>
                    
                </form>
            </div>
        </>
        
    )
}