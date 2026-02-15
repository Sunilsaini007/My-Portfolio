"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !counterRef.current ||
      typeof window.IntersectionObserver !== "function"
    )
      return;

    const animateCount = () => {
      let start = 0;
      const increment = Math.ceil(end / (duration / 80));
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
        else {
          setCount(start);
        }
      }, 50);
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(counterRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [end, duration, hasAnimated]);

  const formatted = count.toLocaleString();
  return <span ref={counterRef}>{formatted}</span>;
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const FirstRef = useRef(null);
  const SecondRef = useRef(null);
  const ThirdRef = useRef(null);
  const FourRef = useRef(null);
  const LastRef = useRef(null);

  const isFirstInView = useInView(FirstRef, { threshold: 0.5, once: true });
  const isSecondInView = useInView(SecondRef, { threshold: 0.5, once: true });
  const isThirdInView = useInView(ThirdRef, { threshold: 0.5, once: true });
  const isFourInView = useInView(FourRef, { threshold: 0.5, once: true });
  const isLastInView = useInView(LastRef, { threshold: 0.5, once: true });

  const getDelay = (index) => {
    if (index === 1 || index === 3) return 0; // same time
    if (index === 2 || index === 4) return 1.5; // same time
    return 0; // default for others
  };

  const FirstSection = [
    {
      img: "./hero.jpg",
      text: " Unlock the Power of the Web with Our Expert Courses",
      text1: "Are you ready to embark on an exciting journey into the world of web development? Look no further! We are your trusted partner for mastering the art of web development.",
      button1: "VIEW ALL COURSES ",
      button2: "SEE PRICING",
    },
  ];
  const NumbSection = [
    {
      nums: "10200",
      text: "Students",
    },
    {
      nums: "50",
      text: "Instructors",
    },
    {
      nums: "10",
      text: "Courses",
    },
    {
      nums: "24/7",
      text: "Support",
    },
  ];


  const SecondSection = [
    {
      img: "./pexels (1).jpg",
      text: "Tailwind CSS",
      text1: "Web Development",
      text2: "Ready to start your web development journey?",
      button1: "Enroll Now",
      type: "highlight",
    },
    {
      img: "./pexels (2).jpg",
      text1: "Frontend Web Development",
      type: "small",
    },
    {
      img: "./pexels (2).jpg",
      text1: "Back End Development",
      type: "small",
    },
    {
      img: "./pexels (3).jpg",
      text1: "Cyber Secou",
      type: "small",
    },
    {
      img: "./pexels (4).jpg",
      text1: "Tailwind CSS",
      type: "small",
    },
  ];

  const TheardSection = [
    {
      img: "./pexels (6).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    },
    {
      img: "./pexels (7).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    }, {
      img: "./pexels (8).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    },
    {
      img: "./pexels (1).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    },
    {
      img: "./pexels (2).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    },
    {
      img: "./pexels (3).jpg",
      text: "Unlock the Web Foundation",
      text1: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
      text2: "image",
      button: "$250",
    },
  ];
  const FourSection = [
    {
      img: "./pexels (5).jpg",
      text: "Frontend Developer",
      text1: "Frontend Developer with experience in designing and developing responsive web applications using Next.js, React, Tailwind Css, JavaScript, HTML and CSS. Skilled in creating seamless user interfaces, optimizing performance. Passionate about delivering clean, efficient code and developing solutions that enhance user experience and business growth.",
      names: "Sunil Kumar Saini",
      email: "sunilkumarsaini774240@gmail.com",
    },
  ];
  const FithSection = [
    {
      img: "./pexels (3).jpg",
      text: "Future of Web Development: Trends and Innovations",
      text1: "Discover the latest trends and innovations shaping the future of web development.",
      button: "register",
    },
    {
      img: "./pexels (8).jpg",
      text: "Future of Web Development: Trends and Innovations",
      text1: "Discover the latest trends and innovations shaping the future of web development.",
      button: "register",
    },
    {
      img: "./pexels (7).jpg",
      text: "Future of Web Development: Trends and Innovations",
      text1: "Discover the latest trends and innovations shaping the future of web development.",
      button: "register",
    },
    {
      img: "./pexels (6).jpg",
      text: "Future of Web Development: Trends and Innovations",
      text1: "Discover the latest trends and innovations shaping the future of web development.",
      button: "register",
    },
  ];
  const SameAs = [
    {
      text: " Courses Categories",
      text1: "A comprehensive selection of courses designed t o empower you with the skills you need to thrive in the dynamic world of web development.",
    },
  ];

  const SameAsText = [
    {
      text: "Explore Our Course Categories",
      text1: "From frontend to backend, master the tools used by industry professionals.",
    },
  ];

  return (
    <div className="overflow-x-hidden dark:bg-black text-black dark:text-white">
      {/* {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-4 rounded-full border-x-transparent border-amber-300 animate-spin" />
          <p className="ml-4">Loading...</p>
        </div>
      ) : ( */}
      <>
        {FirstSection.map((items, index) => (
          <div key={index} className="relative h-screen w-full border-none dark:bg-black text-black dark:text-black">
            <Image fill className="bg-gray-600 absolute" src={items.img} alt="image" />
            <div className="relative top-1/4 md:top-1/2 left-1/2 transform -translate-x-1/2 backdrop-blur bg-white/60 w-70 md:w-150 p-5 rounded-xl transition-transform hover:scale-98">
              <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                {items.text}
              </h1>
              <p className="leading-6 mt-2">{items.text1}</p>
              <div className="space-x-10 mt-2 w-full ">
                <button className="relative group inline-block font-semibold w-fit text-white border border-black rounded-lg cursor-pointer bg-black overflow-hidden">
                  <span className="absolute left-0 top-0 w-0 h-full bg-white transition-all duration-1000 group-hover:w-full z-0 pointer-events-none" />
                  <span className="relative text-xs md:text-sm z-10 block py-3 px-5 transition-colors duration-1000 group-hover:text-black">
                    {items.button1}
                  </span>
                </button>
                <button className="relative group overflow-hidden inline-block py-3">
                  <span className="absolute w-0 h-full left-0 top-0 transition-all duration-1000 rounded-lg bg-white/60 group-hover:w-full" />
                  <span className="relative px-5 text-xl rounded-lg font-semibold cursor-pointer">{items.button2}</span>
                </button>
              </div>
            </div>
            {/* <div className="relative top-1/3 left-1/2 transform -translate-x-1/2 md:w-150  hidden md:block">
                    <h1 className="text-4xl text-center">Explore Our Impressive Stats</h1>
                    <p className="text-xs md:text-sm text-center">We take pride in our commitment to excellence and our dedication to your success.</p>
                    </div> */}
          </div>
        ))}


        <div className="mx-auto max-w-[1400px] dark:bg-black text-black dark:text-white">
          <div className="container mx-auto my-15">
            <div className="flex flex-col md:flex-row justify-evenly items-center text-center space-y-5 md:space-y-0">
              {NumbSection.map((item, index) => (
                <div key={index} className="font-semibold">
                  <span className="text-4xl">
                    <Counter end={parseInt(item.nums)} />+<br />
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {SameAs.map((items, idx) => (
            <div key={idx} className="mx-5 space-y-5">
              <h1 className="text-3xl text-center font-semibold">
                {items.text}
              </h1>
              <p className="text-center text-lg">{items.text1}</p>
            </div>
          ))}

          <div className="grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-10 mx-5 my-10 text-white">
            {SecondSection.map((items, index) => (
              items.type === "highlight" ? (
                <motion.div
                  key={index}
                  ref={ThirdRef}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isThirdInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 1,
                  }}
                  className="relative row-span-2 h-48 lg:h-full transform transition-transform hover:scale-98 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 group-hover:opacity-0 z-10 rounded-xl duration-500" />
                  <Image
                    src={items.img}
                    alt="Image 1"
                    fill
                    className="aspect-video bg-blue-200 rounded-xl shadow-md shadow-gray-500"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-3 font-semibold bg-opacity-50 rounded-2xl z-11">
                    <h1>{items.text}</h1>
                    <h2>{items.text1}</h2>
                    <p className="px-5 text-center">{items.text2}</p>
                    <button className="bg-white text-black px-4 py-1 rounded-lg cursor-pointer">{items.button1}</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  ref={FourRef}
                  initial={{ opacity: 0, x: 500 }}
                  animate={isFourInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: getDelay(index),
                  }}
                  className="relative h-48 transform transition-transform hover:scale-98 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 group-hover:opacity-0 duration-500 rounded-xl z-10" />

                  <Image
                    src={items.img}
                    alt="Image"
                    fill
                    className="aspect-video rounded-xl bg-red-200 shadow-md shadow-gray-500"
                  />

                  <h1 className="absolute bottom-5 left-5 z-11 font-semibold">
                    {items.text1}
                  </h1>
                </motion.div>
              )
            ))}
          </div>

          {SameAsText.map((items, idx) => (
            <div key={idx} className="mx-5 space-y-5">
              <h1 className="text-3xl text-center font-semibold">
                {items.text}
              </h1>
              <p className="text-center text-lg">{items.text1}</p>
            </div>
          ))}

          <div className="m-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {TheardSection.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    ref={FirstRef}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isFirstInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                      delay: index * 0.2,
                    }}
                    className="hover:scale-[0.98] transition-transform"
                  >
                    <Link href="/somehook" className="block">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md shadow-gray-500 group">
                        <Image
                          src={item.img}
                          alt={item.text2}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />

                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5 text-white space-y-3">
                          <h1 className="font-semibold text-lg group-hover:opacity-0">{item.text}</h1>
                          <p className="text-sm text-gray-200 group-hover:opacity-0">{item.text1}</p>
                          <button className="px-3 py-1 border rounded-md hover:text-neutral-400 transition group-hover:opacity-0">
                            {item.button}
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            {FourSection.map((items, index) => (
              <motion.div
                key={index}
                ref={SecondRef}
                initial={{ opacity: 0, x: 1000 }}
                animate={isSecondInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.3,
                }}
                className="grid grid-cols-1 lg:grid-cols-2 items-center my-[10vh]"
              >
                <div className="aspect-video mx-5">
                  <Image
                    className="rounded-2xl transform transition-transform hover:scale-98 bg-cyan-500 w-full"
                    src={items.img}
                    alt={items.text}
                    width={100}
                    height={100}
                    unoptimized
                  />
                </div>
                <div className="space-y-3 mx-5">
                  <h1 className="text-3xl font-bold mt-3">{items.text}</h1>
                  <h2 className="text-xl text-[#a6a6a6]">{items.text1}</h2>
                  <div className="flex gap-5">
                    <Image
                      className=" rounded-full overflow-hidden h-13 w-13 bg-cyan-500"
                      src={items.img}
                      alt=""
                      height={50}
                      width={50}
                      unoptimized
                    />
                    <div>
                      <h1 className="font-semibold">{items.names}</h1>
                      <h2 className="text-[#a6a6a6]">{items.email}</h2>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mx-5">
            <div className="mx-auto container py-5 space-y-5">
              <h1 className="font-semibold text-3xl dark:bg-black text-black dark:text-white text-center">Upcoming Events</h1>
              <h2 className="text-[#a6a6a6] text-xl text-center">Join our web development events designed to share insights, trends, and real-world experiences.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {FithSection.map((items, index) => (
                <motion.div
                  key={index}
                  ref={LastRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLastInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.3,
                  }}
                  className="space-y-2"
                >
                  <div className="transform transition-transform hover:scale-98">
                    <Image
                      className="bg-cyan-500 rounded-2xl shadow-md shadow-gray-500 aspect-video w-full"
                      src={items.img}
                      alt={items.text}
                      height={100}
                      width={100}
                      unoptimized
                    />
                  </div>
                  <h1 className="font-semibold">{items.text}</h1>
                  <h2 className="text-[#a6a6a6]">{items.text1}</h2>
                  <button className="hover:bg-cyan-950 cursor-pointer bg-[#212121] text-white px-4 py-1 capitalize  rounded-lg">{items.button}</button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full text-center container py-15 ">
            <h1 className="text-3xl relative overflow-hidden inline-block group font-semibold h-10 cursor-pointer">
              What Our Students Are Saying
              <span className="absolute bottom-0 left-0 w-full h-[2px] dark:bg-white bg-black transition-all duration-1000 group-hover:w-0 leading-2"></span>
            </h1>
            <h2 className="text-[#a6a6a6] max-w-3xl mx-auto text-xl">Our mission is to empower individuals with the knowledge and skills they need to succeed in the world of web development. But dont just take our word for it.</h2>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
}