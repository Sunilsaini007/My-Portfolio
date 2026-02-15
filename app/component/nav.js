'use client';
import Link from "next/link";
import { useState } from "react";
import { useTheme } from '../context/theme-context';
import { useEffect } from "react";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    // const { theme, toggleTheme } = useTheme();


    const [mounted, setMounted] = useState(false)
    const [dark, setDark] = useState(false)

    useEffect(() => {
        setMounted(true)

        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark")
            setDark(true)
        }
    }, [])

    if (!mounted) return null

    const toggleTheme = () => {
        const html = document.documentElement

        if (html.classList.contains("dark")) {
            html.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setDark(false)
        } else {
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setDark(true)
        }
    }

    return (
        <div className="dark:bg-black text-black dark:text-black">
            <div className="hidden lg:block">
                <nav className="fixed top-5 left-1/2 lg:w-4xl w-7xl transform -translate-x-1/2 z-30 flex justify-around items-center backdrop-blur-2xl bg-white/60 container mx-auto py-4 rounded-lg shadow-md">
                    <Link href="/">
                        <p className="text-xl font-semibold">Material Tailwind</p>
                    </Link>
                    <div className="space-x-7 mt-2 flex items-center ">
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Page </Link>
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Account </Link>
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Docs </Link>
                        <button
                            onClick={toggleTheme}
                            className="relative w-14 h-7 rounded-full 
                 bg-gray-900 dark:bg-gray-600
                 flex items-center px-1
                 transition-colors duration-200"
                            aria-label="Toggle Dark Mode"
                            >
                            <span
                                className={`w-5 h-5 bg-gray-500 rounded-full
                    transform transition-transform duration-200
                    ${dark ? "translate-x-7" : ""}`}
                            />
                        </button>
                    </div>
                    <div className="space-x-7 flex">
                        <div className="relative group overflow-hidden inline-block">
                            <span className="absolute rounded-lg w-0 top-0 group-hover:bg-white bg-gray-400 left-0 h-full transition-all duration-1000 group-hover:w-full z-0" />
                            <button className="relative black transition-colors w-fit px-4 py-2 cursor-pointer font-semibold uppercase z-1">Login</button>
                        </div>

                        <button className="relative group bg-black rounded-lg">
                            <span className="absolute top-0 rounded-lg z-1 duration-1000 left-0 w-0 h-full transition-all group-hover:bg-white bg-gray-400 group-hover:w-full" />
                            <span className="relative transition-colors z-2 group-hover:text-black font-semibold uppercase px-3 py-1 text-white rounded-lg cursor-pointer">
                                Blocks
                            </span>
                        </button>
                    </div>

                </nav>
            </div>
            {/* Mobile Nav */}
            <div className="lg:hidden dark:bg-black text-black dark:text-white">
                <div className="flex fixed z-50 top-0 left-0 right-0 justify-between items-center backdrop-blur-2xl bg-white/60 px-4 py-3 shadow-md">
                    <p className="font-semibold">Material Tailwind</p>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"

                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>


                {menuOpen && (
                    <div className=""
                        onClick={() => setMenuOpen(true)}
                    />
                )}
                <div
                    className={`fixed z-40 top-0 overflow-hidden left-0 right-0 transform transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="flex flex-col bg-white/90 backdrop-blur-lg rounded-b-lg shadow-md px-4 py-3 space-y-2 mt-13">
                        <a className="" href="#">Page</a>
                        <a className="" href="#">Account</a>
                        <a className="" href="#">Docs</a>
                        <button
                            onClick={toggleTheme}
                            className="relative w-14 h-7 rounded-full 
                 bg-gray-900 dark:bg-gray-600
                 flex items-center px-1
                 transition-colors duration-200"
                            aria-label="Toggle Dark Mode"
                        >
                            <span
                                className={`w-5 h-5 bg-white rounded-full
                    transform transition-transform duration-200
                    ${dark ? "translate-x-7" : ""}`}
                            />
                        </button>
                        <div className="space-x-5">

                            <button className="">Login</button>
                            <button className="bg-black px-3 py-1 text-white rounded-lg">Blocks</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}