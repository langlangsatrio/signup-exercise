"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FC, FunctionComponent, useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface INavbarProps {}

const Navbar: FunctionComponent<INavbarProps> = (props) => {
  const { language, setLanguage } = useContext(LanguageContext); //INISIALISASI USECONTEXT
  return (
    <div className="flex justify-between w-full px-32 py-7 bg-slate-200 ">
      <div className="text-black font-bold text-xl">Logo</div>
      <div className="flex justify-evenly gap-5 items-center">
        <div className="relative">
          <span className="absolute m-2 h-full">
            <IoSearchSharp color="gray  " />
          </span>
          <input
            type="search"
            className="w-48 h-8 rounded-md px-10 text-black"
            placeholder="Search"
          />
        </div>
        <select //IMPLEMENTASI CONTEXT
          className="bg-slate-300 h-8 rounded-md px-3 text-black"
          value={language}
          onChange={(e: any) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="EN">English (United States)</option>
          <option value="ID">Bahasa Indonesia</option>
          <option value="FR">Français</option>
        </select>
        <span className="uppercase text-black">{language}</span>
        <button className="bg-slate-300 text-black px-7 h-full rounded-md">
          Sign Up
        </button>
        <button className="bg-gray-900 text-white px-7 h-full rounded-md">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
