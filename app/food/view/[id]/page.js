"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function FoodDetailPage() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const foundFood = data.recipes.find(
          (f) => f.id.toString() === id?.toString()
        );

        if (!foundFood) {
          setError("Food not found");
        } else {
          setFood(foundFood);
        }
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchFood();
  }, [id]);


  if (loading) {
    return (
      <div className="flex space-x-5 items-center justify-center h-screen">
        <div className="border-4 border-amber-400 border-y-transparent w-10 h-10 rounded-full animate-spin" />
        <span className="text-xl text-gray-700 pb-1">Loading...</span>
      </div>
    );
  }

  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;

  if (!food) return null;

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl mx-auto space-y-10 mt-15">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        {food.name}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            className="rounded-xl object-cover w-full min-h-[300px] max-h-[900px]:"
            src={food.image}
            alt={food.name}
            width={800}
            height={400}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <p className="text-gray-700">
              <strong>Ingredients:</strong>{" "}
              {Array.isArray(food.ingredients)
                ? food.ingredients.join(", ")
                : food.ingredients}
            </p>

            <p className="text-gray-700 mt-2">
              <strong>Instructions:</strong> {food.instructions}
            </p>

            <p className="text-gray-700 mt-2">
              <strong>Tags:</strong> {food.tags?.join(", ") || "None"}
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-6 text-sm sm:text-base">
            <div className="bg-orange-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-orange-600 mb-1">Calories</p>
              <p className="text-gray-700">{food.caloriesPerServing} kcal</p>
            </div>

            <div className="bg-blue-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-blue-600 mb-1">Cook Time</p>
              <p className="text-gray-700">{food.cookTimeMinutes} mins</p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-green-600 mb-1">Servings</p>
              <p className="text-gray-700">{food.servings}</p>
            </div>

            <div className="bg-red-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-red-600 mb-1">Meal Type</p>
              <p className="capitalize text-gray-700">{food.mealType}</p>
            </div>

            <div className="bg-cyan-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-cyan-600 mb-1">Reviews</p>
              <p className="text-gray-700">{food.reviewCount}</p>
            </div>


            <div className="bg-yellow-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-yellow-600 mb-1">Difficulty</p>
              <p className="capitalize text-gray-700">{food.difficulty}</p>
            </div>


            <div className="bg-purple-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-purple-600 mb-1">Rating</p>
              <p className="text-gray-700">⭐ {food.rating}</p>
            </div>

            <div className="bg-blue-100 rounded p-3 text-center">
              <p className="font-semibold text-emerald-700">Prep Time Minutes</p>
              <p>{food.prepTimeMinutes} mins</p>
            </div>

            <div className="bg-cyan-100 rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-[#940a0a] mb-1">Reviews</p>
              <p className="text-gray-700">{food.reviewCount}</p>
            </div>

          </div>

        </div>
      </div>
      <button className="bg-green-400 px-5 py-2 rounded hover:bg-white hover:border text-center text-[18px] font-semibold">Buy:- {food.caloriesPerServing}</button>
    </div>
  );
}
