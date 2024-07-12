"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const { push } = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    // const password = e.target.password.value;

    if (username == "admin") {
      push("/todo");
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="p-2 text-black"
        />
        {/* <input
          type="password"
          name="password"
          placeholder="password"
          className="p-2 text-black"
        /> */}
        <button type="submit" className="bg-blue-500 p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
