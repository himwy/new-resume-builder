"use client";
import React, { useState } from "react";
export default function EdInfo() {
  const [info, setInfo] = useState({
    school: "",
    degree: "",
    major: "",
    startYear: "",
    endYear: "",
  });
  const [educationList, setEducationList] = useState([]);
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
      !info.endYear
    ) {
      setErrorMessage("Please fill in all fields!");
      setInputBorder("border-red-500");
      return;
    }
    setEducationList([...educationList, info]);
    setInfo({
      school: "",
      degree: "",
      major: "",
      startYear: "",
      endYear: "",
    });
  };

  const removeEducation = (index) => {
    const newEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(newEducationList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="mr-[10px]"> * School: </label>
        <input
          type="text"
          name="school"
          value={info.school}
          onChange={handleChange}
          className={`border ${inputBorder} rounded-md w-[125px]`}
        />
        <label className="mr-[10px]"> * Degree: </label>
        <input
          type="text"
          name="degree"
          value={info.degree}
          onChange={handleChange}
          className={`border ${inputBorder} rounded-md w-[125px]`}
        />
        <label className="mr-[10px]"> * Major: </label>
        <input
          type="text"
          name="major"
          value={info.major}
          onChange={handleChange}
          className={`border ${inputBorder} rounded-md w-[125px]`}
        />
        <label className="mr-[10px]"> * Start Date: </label>
        <input
          type="text"
          name="startYear"
          value={info.startYear}
          onChange={handleChange}
          className={`border ${inputBorder} rounded-md w-[125px]`}
        />
        <label className="mr-[10px]"> * End Date: </label>
        <input
          type="text"
          name="endYear"
          value={info.endYear}
          onChange={handleChange}
          className={`border ${inputBorder} rounded-md w-[125px]`}
        />
        <p className="pt-[5px] text-red-500 italic">{errorMessage}</p>
        <button
          className="mt-[12px] rounded-md bg-amber-200 w-[70px] p-[1px] hover:bg-amber-300 hover:shadow-lg ease-in-out duration-500"
          type="submit"
        >
          Submit
        </button>
      </div>
      <ul>
        {educationList.map((education, index) => (
          <li key={index} className="flex items-center">
            <span>
              {education.school}, {education.degree}, {education.major},{" "}
              {education.startYear} - {education.endYear}
            </span>
            <button
              className="ml-[10px] rounded-md bg-red-500 text-white p-[2px] hover:bg-red-700"
              type="button"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
