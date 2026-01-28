"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Template({ children }) {
    const pathName = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return (
        <motion.div
            key={pathName}
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            end={{ opacity: 0, scale: 0 }}
            transition={{
                duration: 2,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.4 },
                ease: "easeInOut",
                stiffness: 100,
                damping: 5,
            }}
        >
            {children}
        </motion.div>
    );
}