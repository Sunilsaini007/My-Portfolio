"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Food() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes");
                const data = await response.json();
                console.log("Fetched data:", data);
                setFoods(data.recipes);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setLoading(true);
            }
        };
        fetchData();
    }, []);

    const handleButtonClick = (id) => {
        console.log("Selected food ID:", id);
    };

    return (
        <div className="p-5 md:p-10 mt-20">
            {loading ? (
                <div className="flex justify-center items-center h-screen space-x-5">
                    <div className="border-5 h-10 w-10 border-amber-500 border-x-transparent rounded-full animate-spin"/>
                    <p className="text-center text-2xl">Loading...</p>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        Recipes
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {foods.map((food) => (
                            <div
                                key={food.id}
                                className="group bg-gray-300 p-4 flex flex-col rounded-xl space-y-3 shadow-lg shadow-gray-400 overflow-hidden"
                            >
                                <Image
                                    className="md:w-70 md:h-70 mx-auto rounded-xl transition-all group-hover:scale-95 hover:rounded-full duration-800"
                                    src={food.image}
                                    alt="Recipe"
                                    width={400}
                                    height={300}
                                />
                                <div className="flex flex-col justify-between h-60">
                                    <div className="space-y-3">
                                        <p className="text-lg font-semibold text-center">{food.name}</p>
                                        <p className="break-words whitespace-normal">{food.ingredients}</p>
                                    </div>
                                    <div className="flex justify-between ">
                                        <Link href={`/food/view/${food.id}`}>
                                            <p className="border text-[18px] font-semibold  px-5 py-1 bg-orange-400 rounded-lg hover:bg-white cursor-pointer">
                                                Buy:- {food.caloriesPerServing}
                                            </p>
                                        </Link>
                                        <p className="text-[18px] font-semibold">⏱ {food.cookTimeMinutes}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
