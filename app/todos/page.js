"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
                const data = await response.json();
                console.log(`hfvhv : `, data)
                setTodos(data);
                const filtered = data.filter(todo => todo.completed === true);
                setTodos(filtered);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching todos:", error);
                setLoading(true);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="p-3 mt-20">
            {loading ? (
                <div className="flex justify-center items-center h-screen space-x-5">
                    <div className="w-10 h-10 border-3 border-r-amber-300 rounded-full border-x-transparent animate-spin" />
                    <p className="text-2xl">Loading....</p>
                </div>
            ) : (
                <>
                    <h2 className="text-center text-2xl text-gray-300">Todo List</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {todos.map(todo => (
                            <div key={todo.id} className="flex flex-col justify-between border text-xl bg-gray-300 space-y-3">
                                <p className="p-2 capitalize"> {todo.title} </p>
                                <div className="flex items-end p-2">
                                    <p className="">Completed: {todo.completed ? "✔️" : "❌"}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
