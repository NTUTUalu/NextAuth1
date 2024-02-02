import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-betweeen p-24">
      <div className=" bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
        <form>
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="email"
            required
          />
              <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="password"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </form>
        <Link href="/">Login with existing account</Link>
      </div>
    </div>
  );
}

export default Register;
