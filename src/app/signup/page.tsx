"use client";
import Form from "@/components/FormInput";
import Navbar from "@/components/Navbar";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly bg-gray-900 w-full h-screen">
        <div className="w-full h-screen bg-red-700"></div>
        <div className="w-full h-full p-40 flex items-center justify-center">
          <div className="p-24  bg-slate-200 w-full h-fit rounded-2xl">
            <h1 className="font-bold text-3xl text-black mb-6">Sign Up</h1>
            <div className="flex justify-between">
              <Form
                label="First Name"
                type="text"
                id="firstname"
                placeholder="Put First Name Here.."
              />
              <Form
                label="Last Name"
                type="text"
                id="lastname"
                placeholder="Put Last Name Here.."
              />
            </div>
            <Form
              label="Email"
              type="email"
              id="email"
              placeholder="Put Email Here.."
            />
            <Form label="Phone Number" type="number" id="phone" />
            <Form label="Password" type="password" id="password" />
            <label className="flex gap-2 my-2">
              <input type="checkbox" />
              <p className="text-black">
                I agree to our <a className="font-bold">term</a> and{" "}
                <a className="font-bold">policy</a>
              </p>
            </label>
            <div className="flex gap-2 my-2">
              <label className="flex gap-2 my-2">
                <input type="checkbox" id="policy1" />
                <p className="text-black">
                  By ticking this, you agree that your data are proccessed by
                  the company <a className="font-bold">term</a> and{" "}
                  <a className="font-bold">policy</a>
                </p>
              </label>
            </div>
            <div className="flex gap-2 items-center justify-between mt-8">
              <button type="button" className="p-2 rounded-md bg-black">
                Sign Up
              </button>
              <h3 className="text-lg font-semibold text-black">
                Already have account?
                <a href="/login" className="text-red-900">
                  Login Here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
