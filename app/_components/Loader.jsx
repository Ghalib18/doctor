import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <motion.div
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      ) : (
        <p className="text-lg text-gray-700">No doctor found with such filter</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
