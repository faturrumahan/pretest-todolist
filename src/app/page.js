"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.todo.value);
    const temp = { title: e.target.todo.value, isDone: false };
    setList((item) => [...item, temp]);
    console.log(list);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1 className="text-2xl font-bold">To Do List</h1>
      <form className="flex gap-2" onSubmit={submitHandler}>
        <input
          type="text"
          name="todo"
          placeholder="anything"
          className="p-2 text-black"
        />
        <button type="submit">Submit</button>
      </form>
      {list.map((listItem) => (
        <div>{listItem.title}</div>
      ))}
    </main>
  );
}
