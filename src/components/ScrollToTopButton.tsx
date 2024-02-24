"use client";
import React, { useState, useEffect } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="bg-white opacity-70 fixed bottom-7 right-7 p-2.5 rounded-full cursor-pointer flex items-center justify-center hover:shadow-black hover:bg-white transition-all duration-75"
        onClick={scrollToTop}
      >
        <TbArrowBigUpLinesFilled
          className="opacity-70 hover:opacity-100 transition-all duration-300 arrow-icon"
          size={28}
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
