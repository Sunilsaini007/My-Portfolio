'use client';
import Link from "next/link";
import { useState } from "react";
import { useTheme } from '../context/theme-context';



export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="dark:bg-black text-black dark:text-black">
            <div className="hidden lg:block">
                <nav className="fixed top-5 left-1/2 lg:w-4xl w-7xl transform -translate-x-1/2 z-30 flex justify-around items-center backdrop-blur-2xl bg-white/60 container mx-auto py-4 rounded-lg shadow-md">
                    <Link href="/">
                        <p className="text-xl font-semibold">Material Tailwind</p>
                    </Link>
                    <div className="space-x-7 mt-2">
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Page </Link>
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Account </Link>
                        <Link className="hover:bg-white/60 px-3 py-2 rounded-lg font-semibold" href="">Docs </Link>
                        <label
                            className="relative inline-block w-[3.5em] h-[2em] animate-toggle"
                        >
                            <input
                                type="checkbox"
                                className="opacity-0 w-0 h-0 peer"
                            />
                            {/* slider */}
                            <span
                                onClick={toggleTheme}
                                className="
          absolute cursor-pointer top-0 left-0 right-0 bottom-0
          rounded-[30px] transition duration-400
          bg-[#fdfefedc]
          before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em]
          before:left-[0.3em] before:bottom-[0.35em]
          before:transition-all before:duration-400
          before:rounded-full
          before:shadow-[inset_0px_-10px_10px_0px_rgba(0,0,0,0.17),0px_-1px_15px_-8px_rgba(0,0,0,0.09)]
          before:bg-[#ff99fd]
          peer-checked:before:translate-x-[1.5em]
            "
                            ></span>
                        </label>
                    </div>
                    <div className="space-x-7 flex">
                        <div className="relative group overflow-hidden inline-block">
                            <span className="absolute rounded-lg w-0 top-0 group-hover:bg-white bg-gray-400 left-0 h-full transition-all duration-1000 group-hover:w-full z-0" />
                            <button className="relative black transition-colors w-fit px-4 py-2 cursor-pointer font-semibold uppercase z-1">Login</button>
                        </div>
                        <button className="relative group bg-black rounded-lg">
                            <span className="absolute top-0 rounded-lg z-1 duration-1000 left-0 w-0 h-full transition-all group-hover:bg-white bg-gray-400 group-hover:w-full"/>
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
                        <label
                            className="relative inline-block w-[3.5em] h-[2em] [transform-style:preserve-3d] [perspective:500px] animate-toggle"
                        >
                            <input
                                type="checkbox"
                                className="opacity-0 w-0 h-0 peer"
                            />
                            {/* slider */}
                            <span
                                onClick={toggleTheme}
                                className="
          absolute cursor-pointer top-0 left-0 right-0 bottom-0
          rounded-[30px] transition duration-400
          bg-[#fdfefedc]
          before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em]
          before:left-[0.3em] before:bottom-[0.35em]
          before:transition-all before:duration-400
          before:rounded-full
          before:shadow-[inset_0px_-10px_10px_0px_rgba(0,0,0,0.17),0px_-1px_15px_-8px_rgba(0,0,0,0.09)]
          before:bg-[#ff99fd]
          peer-checked:before:translate-x-[1.5em]
            "
                            ></span>
                        </label>
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