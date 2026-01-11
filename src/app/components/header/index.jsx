"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-black sticky top-0 z-50 p-2 flex items-center transition-shadow duration-300 ${isScrolled ? "shadow-lg" : "shadow-sm"}`}>
      <div className="container flex items-center justify-between">
        <h1 className="text-[26px] font-bold min-[350px]:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[38px] cursor-pointer text-red-500">
          XOXO
        </h1>

        <div className="hidden text-white min-[768px]:flex items-center gap-4">
          <Link className="text-[17px] xl:text-[18px] hover:text-gray-500" href={"/"}>Main</Link>
          <Link className="text-[17px] xl:text-[18px] hover:text-gray-500" href={"/about"}>About</Link>
          <Link className="text-[17px] xl:text-[18px] hover:text-gray-500" href={"/contact"}>Contact</Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars text-white fa-xl"></i>
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-black shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <button className="absolute top-4 right-4 text-gray-600" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        <nav className="flex flex-col mt-10 p-4">
          <Link href={"/"} className="py-1 text-red-600 font-bold" onClick={() => setMenuOpen(false)}>Main</Link>
          <Link href={"/about"} className="py-1 text-red-600 font-bold" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href={"/contact"} className="py-1 text-red-600 font-bold" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
