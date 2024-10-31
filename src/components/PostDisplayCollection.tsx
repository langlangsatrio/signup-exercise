"use client";

import { useState, useEffect } from "react";
import PostDisplay from "./PostDisplay";
import { callAPI } from "@/config/axios";

interface IPostDisplayCollection {}

const PostDisplayCollection: React.FC<IPostDisplayCollection> = () => {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await callAPI.get("/posts");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map((value, item) => {
    return (
      <PostDisplay
        key={item}
        avatar={value.userId}
        title={value.title}
        post={value.post}
      />
    );
  });
};

export default PostDisplayCollection;
