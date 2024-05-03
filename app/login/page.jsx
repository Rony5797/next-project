"use client";

import Link from "next/link";
import { useState } from "react";
import { performLogin } from "../actions";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");

  const { auth, setAuth } = useAuth();
  const router = useRouter();

  async function onsubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);
     
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please provide a valid login credentials");
      }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
          <form className="login-form" onSubmit={onsubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="my-2 text-red-500">{error}</div>
            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Login
            </button>
          </form>
          <p className="text-center text-xs text-gray-600">Or</p>
          <Link
            href="/register"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
}
