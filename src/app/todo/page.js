"use client";
import List from "@/components/List";
import { useState } from "react";

export default function Todo() {
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const temp = {
      id: list.length + 1,
      title: e.target.todo.value,
      isDone: false,
    };
    setList((item) => [...item, temp]);
  };

  const statusHandler = (id) => {
    const todo = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: item.isDone ? false : true };
      }
      return item;
    });

    setList(todo);
  };

  const deleteHandler = (id) => {
    setList((item) => item.filter((data) => data.id != id));
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
      {/* {list.map((listItem) => (
        <div className="flex gap-4" key={listItem.id}>
          <div className={listItem.isDone && `line-through`}>
            {listItem.title}
          </div>
          <button
            className="bg-green-500 p-1"
            onClick={() => statusHandler(listItem.id)}
          >
            {listItem.isDone ? "unDone" : "Done"}
          </button>
          <button
            className="bg-red-500 p-1"
            onClick={() => deleteHandler(listItem.id)}
          >
            delete
          </button>
        </div>
      ))} */}
      <List
        list={list}
        render={(list) =>
          list.map((listItem) => (
            <div className="flex gap-4" key={listItem.id}>
              <div className={listItem.isDone && `line-through`}>
                {listItem.title}
              </div>
              <button
                className="bg-green-500 p-1"
                onClick={() => statusHandler(listItem.id)}
              >
                {listItem.isDone ? "unDone" : "Done"}
              </button>
              <button
                className="bg-red-500 p-1"
                onClick={() => deleteHandler(listItem.id)}
              >
                delete
              </button>
            </div>
          ))
        }
      />
    </main>
  );
}
