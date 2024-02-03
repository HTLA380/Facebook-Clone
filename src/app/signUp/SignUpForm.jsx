"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) return;

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      }
    } catch (error) {
      console.log("Error During Registration", error);
    }
  };

  return (
    <div className="w-full max-w-[400px] p-4 bg-white rounded-md shadow-lg text-center">
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Create a new account
      </h2>
      <p className="text-gray-600 ">It's quick and easy</p>
      <div className="w-full h-px my-5 bg-gray-300" />
      <form onSubmit={registerUser} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name..."
          className="login_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address..."
          className="login_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          className="login_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="block px-4 py-3 font-semibold text-center text-white bg-green-600 rounded-md hover:brightness-90">
          Sign Up
        </button>
      </form>
      <div className="w-full h-px my-5 bg-gray-300" />

      <Link href={"/"} className="text-blue-500 underline">
        Already have an account?
      </Link>
    </div>
  );
};

export default SignUpForm;
