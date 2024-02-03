"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        console.log("Invalid Credentials");
        return;
      }
      router.replace("feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[400px] p-4 bg-white rounded-md shadow-lg">
      <h2 className="mb-3 text-2xl font-semibold text-center text-gray-800">
        Log In
      </h2>
      <form onSubmit={loginUser} className="flex flex-col gap-3">
        <input
          type="text"
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
        <button className="px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md">
          Log in
        </button>
      </form>
      <div className="w-full h-px my-5 bg-gray-300" />

      <Link
        href={"/signUp"}
        className="block px-4 py-3 mx-auto font-semibold text-center text-white bg-green-600 rounded-md w-fit hover:brightness-90">
        Create a new account
      </Link>
    </div>
  );
};

export default LoginForm;
