import React from "react";
import Figma from "../assets/ic_figma.png";
import Code from "../assets/ic_code.png";
import Phone from "../assets/ic_phone.png";
import Angular from "../assets/angular.png";
import Php from "../assets/php.png";
import ReactJs from "../assets/react.png";
// import Koltin from "../assets/kotlin.png";
import Dart from "../assets/dart.png";
import Flutter from "../assets/flutter.png";
import Ci from "../assets/ci.png";
import JavaScript from "../assets/javascript.png";
import Laravel from "../assets/laravel.png";
const Skill = () => {
  return (
    <div className="w-full py-16 px-4" id="skill">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-[#31E1F7]">Skill ____</p>
          <p className="text-4xl text-white">Some of my skill set</p>
          <p className="text-1xl text-white">
            I will improve my programming skills and learn new things
          </p>
        </div>
        <div className="flex flex-col justify-center text-black">
          <div className="grid md:grid-cols-3 ">
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Code} className="w-[50px] mx-auto my-4" alt="/" />
              <p className="mt-2 mx-2">
                I have website development experience in ReactJs, AngularJs and
                PHP front end
              </p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Phone} className="w-[50px] mx-auto my-4" alt="/" />
              <p className="mt-2 mx-2">
                I have app development experience in the field of mobile
                developer Flutter and Android App
              </p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Figma} className="w-[50px] mx-auto my-4" alt="/" />
              <p className="mt-2 mx-2">
                I have development experience in the field of design using figma
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-[#31E1F7]">Programming Language ____</p>
          <p className=" text-white">
            Some of my programming language that I mastered
          </p>
        </div>
        <div className="flex flex-col mt-10 justify-center text-black">
          <div className="grid md:grid-cols-4 text-center">
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={ReactJs} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">ReactJs</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Dart} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">Dart</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Php} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">PHP</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={JavaScript} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-[#31E1F7]">Framework experience ____</p>
          <p className=" text-white">Some of my framework that I often use</p>
        </div>
        <div className="flex flex-col mt-10 justify-center text-black">
          <div className="grid md:grid-cols-4 text-center">
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Angular} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">AngularJs</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Flutter} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">Flutter</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Ci} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">CI</p>
            </div>
            <div className="flex flex-col bg-gray-100  p-4 md:my-0 rounded-lg hover:scale-105 duration-300 py-10 my-2 mx-4">
              <img src={Laravel} className="w-[50px] mx-auto my-2" alt="/" />
              <p className="mt-2 mx-2">Laravel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
