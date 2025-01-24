"use client";

import React, { useState } from "react";

function PInfo() {
  const [info, setInfo] = useState({
    name: "",
    title: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputBorder, setInputBorder] = useState("border-black");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    setErrorMessage("");
    setInputBorder("border-black");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.name || !info.email) {
      setErrorMessage("Please fill in all the required fields!");
      setInputBorder("border-red-500");
      return;
    }
    setIsEditing(false);
  };

  return (
    <>
      <h1 className="mt-[30px] font-bold"></h1>
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <div className="flex flex-col">
            <p className="italic"> Personal Infomation </p>
            <label className="mr-[10px]"> * Name: </label>
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              className={`border ${inputBorder} rounded-md w-[125px]`}
            />
            <label className="mr-[10px]"> Title: </label>
            <input
              type="text"
              name="title"
              value={info.title}
              onChange={handleChange}
              className={`border border-black rounded-md w-[125px]`}
            />{" "}
            <label className="mr-[10px]"> * Email: </label>
            <input
              type="text"
              name="email"
              value={info.email}
              onChange={handleChange}
              className={`border ${inputBorder} rounded-md w-[125px]`}
            />{" "}
            <p className="pt-[5px] text-red-500 italic">{errorMessage}</p>
            <button
              className="mt-[12px] rounded-md bg-amber-200 w-[70px] p-[1px] hover:bg-amber-300 hover:shadow-lg ease-in-out duration-500"
              type="submit"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        ) : (
          <>
            <ul className="font-roboto ml-[25px]">
              <li className="font-bold text-[20px]">{info.name}</li>
              <li className="tracking-wide">{info.title}</li>
              <li> Email: {info.email} </li>
            </ul>
            <button onClick={() => setIsEditing(true)}> Edit </button>
          </>
        )}
      </form>
    </>
  );
}

export default PInfo;
