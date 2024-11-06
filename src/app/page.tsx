import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-2 m-10">
        <button className="p-2 font-bold text-center text-4xl border border-red-700 rounded-md">
          <a href="/signup">Sign Up</a>
        </button>
        <button className="p-2 font-bold text-center text-4xl border border-red-700 rounded-md">
          <a href="/login">Sign In</a>
        </button>
        <button className="p-2 font-bold text-center text-4xl border border-red-700 rounded-md">
          <a href="/post">Post</a>
        </button>
      </div>
    </div>
  );
}
