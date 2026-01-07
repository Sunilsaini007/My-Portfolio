// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// import { useState } from "react";

// export default function UsersPage() {
//     const [some, setSome] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch("https://dummyjson.com/users");
//                 const data = await response.json();
//                 console.log(data.users);
//                 setSome(data.users);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const someData = async (id) => {
//         if (!id || isNaN(id)) {
//             console.error("invalid id for delete", id);
//             return;
//         }
//         try {
//             const response = await fetch(`https://dummyjson.com/users/${id}`, {
//                 method: "DELETE",
//             });
//             if (!response.ok) {
//                 throw new error("Failed to delete user");
//             }

//             const result = await response.json();
//             console.log("Deleted user:", result);

//             setSome((prevUsers) => prevUsers.filter((some) => some.id !== id));

//         }
//         catch (error) {
//             console.error("error in delete", error);
//         }
//     };

//     return (
//         <div className="p-4 mt-8 lg:mt-20">
//             <h1 className="text-2xl font-bold mb-4">User List</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (

//                 <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 ">
//                         {some.map((some) => (
//                             <div key={some.id} className="border p-4 rounded shadow">
//                                 <Image className="mx-auto w-50 h-50"
//                                 src={some.image}
//                                 alt={some.firstName}
//                                 width={100}
//                                 height={100}
//                                 />
//                                 <p><strong>Name:</strong> {some.firstName} {some.lastName}</p>
//                                 <p><strong>Email:</strong> {some.email}</p>
//                                 <p className=""><strong>Phone:</strong>{some.phone}</p>
//                                 <p><strong>Gender:</strong>{some.gender}</p>
//                                 <p><strong>Age:</strong> {some.age}</p>
//                                 <button
//                                     onClick={() => someData(some.id)} className="bg-red-700 px-5 rounded-lg py-1"
//                                 >
//                                     delete
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </>

//             )}
//         </div>
//     );
// }

// "use client";


// import { useEffect, useState } from "react";

// export default function Page() {
//     const [first, setFirst] = useState([]);

//     useEffect(() => {
//         const someData = async () => {
//             try {
//                 const action = await fetch("https://api.restful-api.dev/objects");
//                 const data = await action.json();
//                 console.log(`fetch api :`, data);
//                 setFirst(data);
//             }
//             catch (error) {
//                 console.error("some error API", error);

//             }
//         };
//         someData();
//     }, []);
//     const deleteData = async (id) => {
//         if (!id || isNaN(id)) {
//             console.error("some error in id", error);
//             return;
//         }

//         try {
//             const methods = await fetch(`https://api.restful-api.dev/objects/${id}`, {
//                 method: "DELETE",
//             });
//             setFirst((prevUsers) => prevUsers.filter((first) => first.id !== id));
//         }
//         catch (error) {
//             console.error("some kind of error in delete", error);

//         }
//     };


//     return (
//         <div className="mt-13 px-3">
//             {first.map((first) => (
//                 <div key={first.id}>
//                     <p>{first.name}</p>
//                     <button
//                         onClick={() => deleteData(first.id)} className="bg-neutral-400 shadow-sm shadow-amber-300"
//                     >
//                         <span className="bg-gradient-to-bl from-red-700 to-yellow-400 text-transparent bg-clip-text font-semibold">delete</span>
//                     </button>
//                 </div>
//             ))}

//         </div>
//     );
// }



// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Page() {
//     const [first, setFirst] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const secondData = async () => {
//             try {
//                 const active = await fetch('https://dummyjson.com/products')
//                 const data = await active.json();
//                 console.log(`fetch api :`, data);
//                 setFirst(data.products);
//                 setLoading(false);
//             }
//             catch (error) {
//                 console.error("error in api", error);
//                 setLoading(false)
//             }
//         };
//         secondData();
//     }, [])

//     return (
//         <div>
//             {loading ? (
//                 <div className="h-screen text-2xl flex justify-center items-center text-black">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.3 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 2, }}
//                         className="flex gap-3">
//                         <div className="w-7 h-7 border-3 border-t-transparent rounded-full border-b-blue-500 animate-spin" />
//                         loading....
//                     </motion.div>
//                 </div>
//             ) : (
//                 <>
//                     <div className=" grid grid-cols-1 md:grid-cols-3  mt-15 lg:mt-25 p-3">
//                         {first.map((products) => (
//                             <div key={products.id} className="border p-3">
//                                 {/* <Image
//                         className="w-100 h-50"
//                         src={products.images[0]}
//                         alt={products.brand || `Product ${products.id}`}
//                         width={100}
//                         height={100}
//                     /> */}
//                                 <div className="flex">
//                                     <span>{products.id}.</span>
//                                     <p>{products.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }





      
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    return (
        <motion.div
            initial={false}
            animate={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}
            className="min-h-screen flex items-center justify-center transition-colors duration-1000"
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-4 rounded-full bg-gray-200 dark:bg-black"
            >
                <AnimatePresence mode="wait"> 
                    {isDark ? (
                        <motion.span
                            key="moon"
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 180, opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            🌙
                        </motion.span>
                    ) : (
                        <motion.span
                            key="sun"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            ☀️
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </motion.div>
    );
}