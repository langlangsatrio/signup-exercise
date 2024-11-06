"use client";
import Form from "@/components/FormInput";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { callAPI } from "@/config/axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const onHandleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const onHandlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  //Define dispatch from useAppDispatch for execute function actions from redux
  const dispatch = useAppDispatch(); //useAppDispatch adalah function yang mereturn function (action)

  const onSignIn = async () => {
    try {
      const response = await callAPI.get(
        `user?email=${email}&password=${password}`
      );
      console.log("CHECK SIGIN RESPONSE: ", response.data);
      dispatch(setSignIn(response.data[0])); // Store data to global store redux
      localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly bg-gray-900 w-full h-screen">
        <div className="w-full h-screen bg-red-700"></div>
        <div className="w-full h-full p-40 flex items-center justify-center">
          <div className="p-16 bg-slate-200 w-full h-fit rounded-2xl">
            <h1 className="font-bold text-3xl text-black mb-6">Sign In</h1>
            <Form
              label="Email"
              type="email"
              id="email"
              onChange={onHandleEmail}
            />
            <Form
              label="Password"
              type="password"
              id="password"
              onChange={onHandlePassword}
            />
            <div className="flex gap-2 items-center justify-between mt-8">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-black"
                onClick={onSignIn}
              >
                Sign In
              </button>
              <h3 className="text-lg font-semibold text-black">
                Dont have an account?{" "}
                <a href="/signup" className="text-red-900 hover:underline">
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
