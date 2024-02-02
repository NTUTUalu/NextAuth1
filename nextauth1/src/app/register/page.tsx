"use Client";
//for next js when we are using even handlers linke onclick onsubmit, we are supposed to import the "use client"
import React from "react";
import Link from "next/link";

const Register = () => {
   
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email  = e.target[0].value;
        const password = e.target[1].value;

        console.log(email,password);
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="email"
            required
          />
              <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="password"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <Link href="/login" className="block text-center text-blue-500 hover:underline mt-2">Login with existing account</Link>
      </div>
    </div>
  );
}

export default Register;
