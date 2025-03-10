"use client"
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

export default function Home() {
  const [todos, setTodos] = React.useState([
    { title: "Cleaning the House", id: crypto.randomUUID(), is_completed: false },
    { title: "Go out with the dog for a walk", id: crypto.randomUUID(), is_completed: false },
    { title: "Cleaning the House", id: crypto.randomUUID(), is_completed: false },

  ]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="container">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
