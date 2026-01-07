"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";



export default function HomePage() {
    const [food, setFood] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respons = await fetch("https://dummyjson.com/recipes");
                const data = await respons.json();
                console.log("fetched data : ", data);
                setFood(data.recipes);
                setLoading(false);
            } catch (error) {
                console.error("failed recipes", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const itemsPerPage = 12;
    const filteredItems = food.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="lg:w-8xl mx-auto space-y-5 p-4 mt-20 dark:bg-black text-black dark:text-white">
            {loading ? (
                <div className="flex justify-center items-center min-h-screen space-x-5">
                    <div className="border-4 w-8 h-8 border-y-transparent border-amber-300 animate-spin rounded-full" />
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">Recipes</h1>
                    <input
                        className="px-3 py-2 focus:outline-cyan-950 border rounded-lg"
                        type="text"
                        id="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 dark:bg-black text-black dark:text-white">
                        {currentItems.map((food) => (
                            <div
                                key={food.id}
                                data-aos="fade-up"
                                className="group bg-gray-300 hover:bg-gray-200 p-4 flex flex-col rounded-lg space-y-3 shadow-lg shadow-gray-400 overflow-hidden dark:bg-black text-black dark:text-white"
                            >
                                <Image
                                    className="h-80 w-80 mx-auto rounded-lg transition-all group-hover:scale-95 hover:rounded-full duration-800"
                                    src={food.image}
                                    alt={food.name}
                                    width={400}
                                    height={300}
                                />
                                <div className="flex flex-col justify-between h-65">
                                    <div className="space-y-3">
                                        <p className="text-lg font-semibold text-center h-10">
                                            {food.name}
                                        </p>
                                        <p className="break-words whitespace-normal line-clamp-5">
                                            <strong>Ingredients: </strong>
                                            {food.ingredients}
                                        </p>
                                    </div>
                                    <p className="font-semibold text-end text-lg">⭐ {food.rating}</p>
                                    <div className="flex justify-between items-end ">
                                        <Link href={`/food/view/${food.id}`}>
                                            <p className="border text-[18px] font-semibold px-5 py-1 bg-orange-400 rounded-lg hover:bg-white cursor-pointer dark:bg-orange-400 text-black dark:text-white">
                                                Order :- {food.caloriesPerServing}
                                            </p>
                                        </Link>
                                        <p className="text-[18px] font-semibold">⏱ {food.cookTimeMinutes}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToPage(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}