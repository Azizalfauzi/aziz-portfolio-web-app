import React from "react";

const AboutMe = () => {
  return (
    <div className="text-black">
      <div
        className="w-full bg-white py-16 px-4 mx-auto flex flex-col justify-center items-center"
        id="about"
      >
        <h1 className="md:text-5xl text-center  text-black sm:text-3xl text-3xl font-bold md:py-6">
          {" "}
          About Me
        </h1>
        <div className="md:w-[900px] text-center">
          <div className="border-base-100 py-3 px-3 bg-gray-300 rounded-box">
            <div className="text-lg my-3 text-left font-mono">
              About me : Hi, I m Aziz Alfauzi. I was born in Tulungagung, 12
              November 1998, I graduated from D3RPLA with a GPA of 3.77 Telkom
              University Bandung, West Java.
            </div>
          </div>
          <div className="border-base-100 my-3 py-3 px-3 bg-gray-300 rounded-box">
            <div className="text-lg text-left font-mono">
              I have expertise in the field of mobile apps, I am proficient in
              several programming languages, namely Dart, Java and Kotlin.I m
              also familiar with the flutter framework. I ve been working on a
              few project and has been implemented.
            </div>
          </div>
          <div className="border-base-100 my-3 py-3 px-3 bg-gray-300 rounded-box">
            <div className="text-lg text-left font-mono">
              All documentation can be seen on the github link above. Currently,
              I am looking for a job where I can take advantage of my expertise
              and I can become a contributor to success growing company
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
