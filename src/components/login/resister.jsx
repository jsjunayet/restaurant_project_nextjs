"use client"
import { useState } from "react";


export default function Register() {

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-blue-200">
    <div className={`container relative bg-white rounded-3xl shadow-lg overflow-hidden w-[768px] h-[480px]`}>
    <div className="form-container absolute inset-0 w-1/2 h-full  text-white transition-transform duration-600 transform translate-x-full">
       <h1>hel</h1>
      </div>
      <div className="toggle-container bg-purple-700 sign-in absolute inset-0 w-1/2 p-10 flex flex-col justify-center items-center transition-transform duration-600 z-20 right-0">
      <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className=' px-5 text-center'>Enter your personal details to use all site features</p>
              <button className="button mt-4">Sign In</button>
      </div>
    
    </div>
  </div>
  );
}
