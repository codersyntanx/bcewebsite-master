import React from "react";
import { motion } from "framer-motion";
import videotruck from "./truck.mp4"
const HeroSection = () => {
  return (
    <div className="position-relative w-100 overflow-hidden main-header">
      {/* Video Background */}
      <video
        src={videotruck}
        autoPlay
        loop
        muted
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

      {/* Sliding Text */}
      <div className="position-relative z-10 d-flex flex-column align-items-center justify-content-center h-100 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 display-4 fw-bold"
        >
          Welcome to Our Service
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-4 fs-3"
        >
          Fast, Reliable, and Efficient
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="fs-5"
        >
          Contact us to know more
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
