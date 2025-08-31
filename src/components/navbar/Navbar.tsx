"use client"

import { useState } from "react";
import Link from "next/link";
import { House, StickyNote, FileClock, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: House
    },
    {
        id: 2,
        title: "Evaluate Plan",
        url: "/evaluate",
        icon: StickyNote
    },
    {
        id: 3,
        title: "History",
        url: "/history",
        icon: FileClock
    }
]

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div>
            {/* MOBILE VIEW NAVBAR */}
            <div className="flex items-center justify-between p-4 bg-[var(--color-background)] text-[var(--color-foreground)] md:hidden">
                <button 
                    onClick={() => setIsOpen(true)} 
                    className="text-3xl font-extrabold"
                >
                    ☰
                </button>

                <h1 className="text-xl font-bold">LOGO HERE</h1>
            </div>

            <div
                className={
                    `fixed top-0 left-0 h-full w-full bg-[var(--color-foreground)] text-[var(--color-background)] 
                    shadow-lg transform transition-transform duration-500 ease-out md:hidden
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                }
            >
                <div 
                    className="flex justify-start p-4"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-extrabold"
                    >
                        ✕
                    </button>
                </div>
                
                <nav className="flex flex-col gap-4 p-4 font-bold text-xl">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return(
                            <Link 
                                key={link.id} 
                                href={link.url}
                                className="flex items-center gap-2"
                            >
                                <span className="block md:hidden">
                                    <Icon size={22}/>
                                </span>
                                {link.title}
                            </Link>
                        )
                    })}
                    <button 
                        onClick={() => {console.log("logged out")}}
                        className="flex items-center gap-2 text-left w-fit"
                    >
                        <span className="block md:hidden">
                            <LogOut size={22} />
                        </span>
                        Logout
                    </button>
                </nav>
            </div>

            {/* TABLET AND DESKTOP NAVBAR VIEW */}
            <div
                className="hidden md:flex items-center justify-between px-12 pt-8 
                bg-[var(--color-background)] text-[var(--color-foreground)] shadow"
            >
                <h1 className="text-3xl font-bold">LOGO HERE</h1>

                <nav className="flex items-center gap-6 font-bold">
                    {links.map((link) => {
                        const isActive = pathname === link.url;
                        return(
                            <Link
                                key={link.id} 
                                href={link.url}
                                className={
                                    `flex items-center gap-2 hover:opacity-80 relative
                                    ${isActive ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:content-['']"
                                    : "hover:text-blue-900"}`
                                }
                            >
                                {link.title}
                            </Link>
                        )
                    })}
                    <button
                        onClick={() => console.log("logged out")}
                        className="flex items-center gap-2 hover:opacity-80 hover:text-blue-900"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    )
}