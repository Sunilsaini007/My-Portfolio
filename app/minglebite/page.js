"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mingle() {
    const FirstRef = useRef(null);
    const isFirstInView = useInView(FirstRef, { once: true, amount: 0.5 });

    const FirstSection = [
        {
            img: "./Screenshot1.png",
            text: " Welcome To Our Organic food Kitchens",
            text2: " Step into our Organic Food Kitchens, where every dish is made with 100% natural, chemical-free ingredients. Freshly prepared at home, our meals bring you the pure taste of health, love, and nature in every bite.",
            text3: " 100% Pure Vegetarian",
            text4: " We serve only pure vegetarian food, made with fresh ingredients and prepared with care to bring you healthy, delicious meals every time.",

        },
    ];

    const FeatureIcons = [
        {
            icon: "./bananas.png",
            bgColor: "#3f8757",
            title: "100% Pure Vegetarian",
            description: "We serve only pure vegetarian food, made with fresh ingredients and prepared with care to bring you healthy, delicious meals every time.",
        },
        {
            icon: "./food.png",
            bgColor: "#ef9929",
            title: " 100% Hygienic Food",
            description: " We prepare every meal in a clean, safe environment to ensure 100% hygienic food for your health and satisfaction.",
        },
        {
            icon: "./bananas.png",
            bgColor: "#d65425",
            title: " 100% Testy Food",
            description: " Enjoy food that’s packed with flavor and prepared to satisfy your taste buds every time.",
        },
    ];

    const Second = [
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
        {
            img: "./bananas.png",
            text: "image",
        },
    ];


    return (
        <div className="text-black mx-auto max-w-[1200px]">
            <div className="mx-auto p-4">
                {FirstSection.map((item, index) => (
                    <div key={index}>
                        <div className="flex lg:flex-row flex-col justify-center items-center w-full">
                            <Image
                                className="md:w-130 w-full mr-0 md:mr-10"
                                src={item.img}
                                alt={item.text}
                                height={100}
                                width={100}
                                unoptimized
                            />
                            <div className="flex flex-col space-y-5 ">
                                <span className="text-4xl font-semibold leading-13 md:w-120 mt-5">{item.text}</span>
                                <span className="text-sm leading-7 md:w-150">{item.text2}</span>
                                <div className="space-y-5">
                                    {FeatureIcons.map((feature, idx) => (
                                        <div className="flex space-x-5" key={idx}>
                                            <Image
                                                className={`w-15 h-15 rounded-full p-2`}
                                                style={{ backgroundColor: feature.bgColor }}
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={100}
                                                height={100}
                                                unoptimized
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-semibold">{feature.title}</span>
                                                <span className="text-sm md:w-135 w-full">{feature.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-[#85ba07] px-8 rounded-full w-fit py-2 mt-5 text-white">Download</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-30">
                <h2 className="text-3xl font-semibold text-center">What are you craving?</h2>
                <p className="text-center "> Explore our wide variety of Kitchens and find your perfect meal</p>
                <div className="flex">
                    {Second.map((item, id) => (
                        <motion.div
                            key={id}
                            ref={FirstRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isFirstInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: id * 0.4, }}
                            className="flex items-center justify-center space-x-5 p-5"
                        >

                            <div
                            // ref={FirstRef}
                            // initial={{ opacity: 0, y: 100 }}
                            // animate={isFirstInView ? { opacity: 1, y: 0 } : {}}
                            // transition={{ duration: 1 }}
                            >
                                <div className="transition-shadow duration-300 rounded-md">
                                    <div className="rounded-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-green-400">
                                        <Image
                                            className="rounded-md"
                                            src={item.img}
                                            alt={item.text}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
