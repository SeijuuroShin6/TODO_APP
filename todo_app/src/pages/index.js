import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

export default function Home() {
    return (
        <div className="container">
          <Header/>
          <TODOHero todos_completed={0} total_todos={0}/>
          <Form/>
          <TODOList todos={[]}/>
        </div>
    );
}
