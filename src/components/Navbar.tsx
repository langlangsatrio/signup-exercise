"use client";

import { useState } from "react";

export default function Navbar() {
  const [page, setPage] = useState<any>(<a href="/login">Login</a>);
  const switchPage = () => {
    setPage((prev: any) => {
      if (prev === <a href="/login">Login</a>) {
        return <a href="/signup">Register</a>;
      } else if (prev === <a href="/signup">Register</a>) {
        return <a href="/login">Login</a>;
      }
    });
  };

  return (
    <div className="flex justify-around w-full px-16 py-5 bg-slate-200 ">
      <div className="text-black font-bold text-xl">Logo</div>
      <div className="flex justify-evenly gap-2">
        <input
          type="search"
          className="w-48 h-8 rounded-md p-2"
          placeholder="Search"
        />
        <select
          className="bg-slate-300 h-8 rounded-md px-8 text-black"
          defaultValue={`English`}
        >
          <option>English</option>
        </select>
        <button
          className="bg-gray-900 text-white px-8 h-8 rounded-md"
          onClick={switchPage}
        >
          {page}
        </button>
      </div>
    </div>
  );
}
