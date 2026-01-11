'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1000 }}
            transition={{ duration: 0.90 }}
            className="flex items-center justify-center h-screen bg-blue-100 text-xl font-mono dark:bg-black text-black dark:text-white"
          >
            <p className="font-semibold "> Loading Splash Screen... </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
