"use client";
import { HeroSection, Model } from "@/components";
import StartsCanvas from "@/components/canvas/Starts";
import React from "react";
import { motion } from "framer-motion";

// snap-y snap-mandatory scroll-smooth overflow-y-auto h-[100vh]
// snap-center

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const test = () => {
  return (
    <main className="relative snap-y snap-mandatory scroll-smooth overflow-y-auto h-[100vh]">
      <StartsCanvas />
      <div variants={stagger} className={`snap-center`}>
        <HeroSection />
      </div>
      <div className="h-[100vh] snap-center ">
        <Model />
      </div>
      <div className="h-[100vh] snap-center ">three</div>
      <div className="h-[100vh] snap-center ">four</div>
    </main>
  );
};

export default test;

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
