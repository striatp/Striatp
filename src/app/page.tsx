"use client"

import React from "react";

export default function Home() {
  const [likes, setLikes] = React.useState(0)
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div className="flex justify-center text-teal-400 border-4 border-t-fuchsia-800">
      <button className="border-[45]" onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}