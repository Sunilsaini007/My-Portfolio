import Image from "next/image";
import { Monitor } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const FirstSection = [
        {
            heading: "Subscribe to our newsletter",
            items: [
                {
                    type: "text",
                    placeholder: "First Name",
                },
                {
                    type: "text",
                    placeholder: "Email",
                    button1: "Subscribe Now",
                },
            ],
        },
    ];

    const SecondSection = [
        {
            heading: "./discord.png",
            name: "logo",
            text: "Clarity UI",
            text1: "Clarity gives you the blocks and components you need to create a truly professional website.",
            items: [
                {
                    img: "./social-icon (1).png",
                    text: "twitter",
                },
                {
                    img: "./social-icon (2).png",
                    text: "facebook",
                },
                {
                    img: "./social-icon (3).png",
                    text: "instagram",
                    href: "https://www.instagram.com/sunil_kumar_saini/"
                },
                {
                    img: "./social-icon (4).png",
                    text: "linkedin",
                    href: "https://www.linkedin.com/in/sunil-kumar-saini-902b61324/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGFIaSYYXRbCMvuROOULmkA%3D%3D"
                },
            ],
        },
    ];

    const ThirdSection = [
        {
            heading: "COMPANY",
            list1: "About   ",
            list2: "Features",
            list3: "Works   ",
            list4: "Career  ",
        },
        {
            heading: "HELP",
            list1: "Customer Support",
            list2: "Delivery Details",
            list3: "Terms & Conditions",
            list4: "Privacy Policy",
        },
        {
            heading: "Resources",
            list1: "Free eBooks",
            list2: "Development",
            list3: "How to - Blog",
            list4: "YouTube Playlist",
        },
    ];
    return (
        <footer className="dark:bg-black text-black dark:text-white">
            <div className="flex items-end md:items-center md:pb-0 pb-5 justify-center relative lg:w-4xl md:w-2xl h-115 md:h-100 lg:h-60 overflow-hidden bg-[#2664eb] mx-auto rounded-2xl mb-3">
                {FirstSection.map((Selection, index) => (
                    <div key={index} className="text-white">
                        <div className="absolute -top-15 -left-15 w-40 h-40 border-white rounded-full border-5" />
                        <div className="relative top-1/3 space-y-10 px-5">
                            <h1 className="text-center text-3xl md:text-4xl font-semibold">
                                {Selection.heading}
                            </h1>
                            <div className="flex flex-col lg:flex-row justify-center gap-5 w-full max-w-5xl mx-auto">
                                {Selection.items.map((item, idx) => (
                                    <div key={idx} className="flex flex-col lg:flex-row items-stretch gap-3 w-full">
                                        <input
                                            type="text"
                                            placeholder={item.placeholder}
                                            className="border border-white bg-transparent rounded-xl px-5 py-2 placeholder:text-white text-white font-semibold focus:outline-none w-full"
                                        />
                                        {item.button1 && (
                                            <button className="w-full lg:w-auto bg-black text-white font-semibold px-5 py-3 rounded-xl hover:bg-black/80 transition">
                                                {item.button1}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="flex items-end md:items-center md:pb-0 pb-5 justify-center relative lg:w-4xl md:w-2xl h-115 md:h-100 lg:h-60 overflow-hidden bg-[#2664eb] mx-auto rounded-2xl mb-3">
                <div className="text-white">
                    <div className="absolute -top-15 -left-15 w-40 h-40 border-white rounded-full border-5" />
                    <div className="relative top-1/3 space-y-10 px-5">
                        <h1 className="text-center text-3xl md:text-4xl font-semibold">
                            Subscribe to our newsletter
                        </h1>
                        <div className="flex flex-col lg:flex-row justify-center gap-5 w-full max-w-5xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-3 w-fit">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border border-white bg-transparent rounded-xl px-5 py-2 placeholder:text-white text-white font-semibold focus:outline-none w-full"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-3 w-fit">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border border-white bg-transparent rounded-xl px-5 py-2 placeholder:text-white text-white font-semibold focus:outline-none w-full"
                                />
                                <button className="w-full bg-black text-white font-semibold px-5 py-3 rounded-xl hover:bg-black/80 transition">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="bg-black text-white container w-full mx-auto h-174 md:h-120 lg:h-80 flex flex-col justify-center rounded-t-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-3 md:mx-10 py-5">
                    {SecondSection.map((section, index) => (
                        <div key={index} className="space-y-5">
                            <div >
                                <div className="flex gap-5 items-center">

                                    <Image
                                        className="bg-[#2664eb] rounded-full p-1 h-10 w-10"
                                        src={section.heading}
                                        alt={section.name}
                                        height={10}
                                        width={10}
                                    />

                                    <span className="text-3xl font-semibold">{section.text}</span>
                                </div>
                                <div className="mt-5">
                                    <span className="text-xl">{section.text1}</span>
                                </div>
                            </div>
                            <div className="flex space-x-5">
                                {section.items.map((items, idx) => (
                                    <div key={idx} className="" >
                                        <a href={items.href} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                className="w-8 h-8 rounded-full border border-gray-500 p-1 hover:bg-[#3e6ddc] bg-white transform transition-transform hover:scale-105"
                                                src={items.img}
                                                alt={items.text}
                                                width={10}
                                                height={10}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 md:grid-cols-3">
                        {ThirdSection.map((items, index) => (
                            <div key={index} className="flex flex-col items-start space-y-4">
                                <h1 className="font-bold text-[#2664eb]">{items.heading}</h1>
                                <ul className="space-y-3">
                                    <li>{items.list1}</li>
                                    <li>{items.list2}</li>
                                    <li>{items.list3}</li>
                                    <li>{items.list4}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t py-3">
                    <h1 className="text-center mx-5">© Copyright 2026, All Rights Reserved by ClarityUI</h1>
                </div>
            </div>
        </footer >
    );
}