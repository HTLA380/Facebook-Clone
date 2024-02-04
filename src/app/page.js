import React from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/feed");

  return (
    <main className="flex items-center justify-center flex-grow h-full min-h-screen bg-slate-100">
      <div className="flex flex-wrap items-start w-full max-w-screen-xl gap-20 justify-evenly md:px-10">
        <div>
          <Image
            width={200}
            height={200}
            src="/assets/facebook-logo.svg"
            alt="facebook"
            className="mx-auto -mb-3 w-72 lg:w-80 md:-ml-8"
            priority={false}
          />
          <h1 className="max-w-[28rem] text-[1.5rem] lg:text-2xl leading-8 text-center md:text-start">
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default HomePage;
