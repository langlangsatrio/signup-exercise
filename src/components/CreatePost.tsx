"use client";
import { IoImageSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

interface ICreatePost {}

const CreatePost: React.FC<ICreatePost> = () => {
  const [counter, setCounter] = useState<number>(0);
  const onHandleInputCounter = (e: any) => {
    setCounter(e.target.value.length);
  };

  const printInputCounter = () => {
    if (counter === 350) {
      return `You reached the word limit! - ${counter} / 350`;
    } else {
      return `${counter} / 350`;
    }
  };

  return (
    <div className="flex w-full h-fit gap-6">
      <div>
        <img
          src="https://robohash.org/1"
          className="bg-slate-400  rounded-full shadow-md w-28 h-28"
        />
      </div>
      <div className="flex flex-col bg-white shadow-md rounded-md p-3 w-full">
        <input
          type="text"
          className="px-3 py-1 text-black h-full font-semibold mb-2"
          placeholder="Type your title"
        />
        <textarea
          className="bg-white p-3 text-black h-full resize-none"
          placeholder="Type your story"
          onChange={onHandleInputCounter}
          maxLength={350}
        ></textarea>
        <div className="text-slate-400 mx-3 mt-3 mb-1">
          {printInputCounter()}
        </div>
        <div className="border border-slate-300 my-1 mx-2"></div>
        <div className="flex justify-between py-3 px-3">
          <div className="flex gap-4 items-center">
            <button type="button">
              <IoImageSharp color="gray" className="w-6 h-6 " />
            </button>
            <button type="button">
              <FaFile color="gray" className="w-6 h-6" />
            </button>
            <button type="button">
              <FaLocationDot color="gray" className="w-6 h-6" />
            </button>
          </div>
          <button className="py-2 px-6 bg-slate-500 text-white rounded-xl hover:bg-slate-600">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
