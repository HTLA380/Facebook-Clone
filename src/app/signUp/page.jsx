import React from "react";
import Image from "next/image";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const SignUp = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/feed");
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-100">
      <Link href={"/"}>
        <Image
          width={200}
          height={200}
          src="/assets/facebook-logo.svg"
          alt="facebook"
          className="absolute w-52 lg:w-60 top-5 left-10"
        />
      </Link>
      <SignUpForm />
    </main>
  );
};

export default SignUp;
