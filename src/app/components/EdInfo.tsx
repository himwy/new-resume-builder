"use client";
import React, { useState } from "react";
export default function EdInfo() {
  const [info, setInfo] = useState({
    school: "",
    degree: "",
    major: "",
    startYear: "",
    gradYear: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputBorder, setInputBorder] = useState("border-black-500");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    setErrorMessage("");
    setInputBorder("border-black-500");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !info.school ||
      !info.degree ||
      !info.major ||
      !info.startYear ||
      !info.gradYear
    ) {
      setErrorMessage("Please fill in all fields!");
      setInputBorder("border-red-500");
      return;
    }
    setIsEditing(false);
  };
  return (
    <input
      type="date"
      name="startYear"
      value={info.startYear}
      onChange={handleChange}
      placeholder="Start Year"
    />
  );
}
