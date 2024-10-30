"use client";
import Form from "@/components/FormInput";
import Navbar from "@/components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly bg-gray-900 w-full h-screen">
        <div className="w-full h-screen bg-red-700"></div>
        <div className="w-full h-full p-40 flex items-center justify-center">
          <div className="p-16 bg-slate-200 w-full h-fit rounded-2xl">
            <h1 className="font-bold text-3xl text-black mb-6">Sign In</h1>
            <Form label="Email" type="email" id="email" />
            <Form label="Password" type="password" id="password" />
            <div className="flex gap-2 items-center justify-between mt-8">
              <button type="button" className="p-2 rounded-md bg-black">
                Sign In
              </button>
              <h3 className="text-lg font-semibold text-black">
                Dont have an account?
                <a href="/signup" className="text-red-900">
                  Register Here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
