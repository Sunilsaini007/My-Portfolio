 // import Image from "next/image";
 // export default function Page() {
 //     const firstSection = [
 //         {
 //             img: "/pixels.png",
 //         },
 //     ];
 //     return (
 //         <div className="mt-25">
 //             {firstSection.map((items, id) => (
 //                 <div key={id} >
 //                     <Image
 //                         className=""
 //                         src={items.img}
 //                         alt={items.name}
 //                         height={100}
 //                         width={100}
 //                     />
 //                 </div>
 //             ))}
 //             <h1 className="text-3xl">Registration from</h1>
 //             <div className="flex flex-col space-y-10">
 //                 <input className="focus:outline-0 border px-4 py-2 rounded-xl" type="text" placeholder="Name">
 //                 </input>
 //                 <input className="focus:outline-0 border px-4 py-2 rounded-xl" type="text" placeholder="Last Name">
 //                 </input>
 //                 <input className="uppercase focus:outline-0 border px-4 py-2 rounded-xl" type="date"></input>
 //             </div>
 //         </div>
 //     );
 



// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// export default function Page() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetchUsers();
//     }, []);
//     const fetchUsers = async () => {
//         try {
//             const response = await fetch("https://dummyjson.com/users");
//             const data = await response.json();
//             setUsers(data.users);
//         } catch (error) {
//             console.error("API error", error);
//         }
//     };
//     const addUser = async () => {
//         const newUser = {
//             firstName: "John",
//             middleName: "kumar",
//             lastName: "Doe",
//             age: 30,
//             image: "https://robohash.org/johndoe.png?size=200x200"
//         };
//         try {
//             const res = await fetch("https://dummyjson.com/users/add", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newUser),
//             });
//             const result = await res.json();
//             console.log("Added user:", result);
//             setUsers((prev) => [...prev, result]);
//         } catch (error) {
//             console.error("Failed to add user", error);
//         }
//     };
//     return (
//         <div className="p-6 mt-18">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//                 {users.map((user, index) => (
//                     <div key={`${user.id}-${index}`} className="rounded shadow-md shadow-gray-500">
//                         <div className="bg-cyan-500 p-3">
//                             <Image
//                                 src={user.image}
//                                 alt={user.lastName}
//                                 width={400}
//                                 height={300}
//                                 className="w-full h-full border object-cover"
//                             />
//                             <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
//                             <p className="text-sm text-white">Age: {user.age}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button
//                 onClick={addUser}
//                 className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-5"
//             >
//                 Add John Doe
//             </button>
//         </div>
//     );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Page() {
//     const [users, setUsers] = useState([]);
//      const [lastDeletedUser, setLastDeletedUser] = useState(null);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await fetch("https://dummyjson.com/users");
//             const data = await response.json();
//             console.log(data.users);
//             setUsers(data.users);

//         } catch (error) {
//             console.error("API error", error);
//         }
//     };


// const deleteUser = async (id) => {
//     if (!id || isNaN(id)) {
//         alert("Invalid user ID provided.");
//         console.error("Invalid user ID:", id);
//         return;
//     }

//     try {
//         const res = await fetch(`https://dummyjson.com/users/${id}`, {
//             method: "DELETE",
//         });

//         if (!res.ok) {
//             throw new Error("Server responded with status " + res.status);
//         }

//         const result = await res.json();
//         console.log("Delete result:", result);

//         // Update UI
//         setUsers((prev) => prev.filter((user) => user.id !== id));

//         // Show success message
//         alert(`User with ID ${id} has been deleted successfully.`);
//     } catch (error) {
//         console.error("Failed to delete user:", error);
//         alert("An error occurred while deleting the user. Please try again.");
//     }
// };



//     return (
//         <div className="p-6 mt-18">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//                 {users.map((user, index) => (
//                     <div key={`${user.id}-${index}`} className="rounded shadow-md shadow-gray-500">
//                         <div className="bg-cyan-500 p-3">
//                             <Image
//                                 src={user.image}
//                                 alt={user.lastName}
//                                 width={400}
//                                 height={300}
//                                 className="w-full h-full border object-cover"
//                             />
//                             <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
//                             <p className="text-sm text-white">Age: {user.age}</p>
//                             <button
//                                 onClick={() => deleteUser(user.id)}
//                                 className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [lastDeletedUser, setLastDeletedUser] = useState(null);

    // Load initial users (optional dummy load)
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data.users))
            .catch((err) => console.error("Failed to load users", err));
    }, []);   

    const deleteUser = async (id) => {
        if (!id || isNaN(id)) {
            alert("Invalid user ID provided.");
            console.error("Invalid user ID:", id);
            return;
        }

        try {
            const userToDelete = users.find((user) => user.id === id);

            const res = await fetch(`https://dummyjson.com/users/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Server responded with status " + res.status);
            }

            const result = await res.json();
            console.log("Delete result:", result);

            // Remove user from state
            setUsers((prev) => prev.filter((user) => user.id !== id));

            // Store the deleted user for potential restore
            setLastDeletedUser(userToDelete);

            // Show success message
            alert(`User with ID ${id} has been deleted successfully.`);
        } catch (error) {
            console.error("Failed to delete user:", error);
            alert("An error occurred while deleting the user. Please try again.");
        }
    };

    const undoDelete = () => {
        if (lastDeletedUser) {
            setUsers((prev) => [lastDeletedUser, ...prev]);
            setLastDeletedUser(null);
            alert(`User with ID ${lastDeletedUser.id} has been restored.`);
        }
    };

    return (
        <div className="px-3">
            <h2>User List</h2>
            {users.length === 0 ? (
                <p>Loading users...</p>
            ) : (
                <>
                <div className=" space-y-4">
                    {users.map((user, index) => (
                        <div key={`${user.id}-${index}`} className="rounded shadow-md shadow-gray-500">
                            <div className="bg-cyan-500 p-3">
                                <Image
                                    src={user.image}
                                    alt={user.lastName}
                                    width={400}
                                    height={300}
                                    className="w-50 h-50 border object-cover"
                                />
                                <p className="text-white font-semibold">{user.firstName} {user.lastName}</p>
                                <p className="text-sm text-white">Age: {user.age}</p>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>
                </>
            )}

            {/* Redo Button */}
            {lastDeletedUser && (
                <div className="bg-amber-500 px-5 py-1 w-fit mt-4">
                    <button onClick={undoDelete}>Undo Delete data </button>
                </div>
            )}
        </div>
    );
}