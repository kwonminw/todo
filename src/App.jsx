import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages";
import { Editor, List } from "./component";
import { Top } from "./pages/First";

import './App.css';


function App() {
  const [todo, setTodo] = useState();
  const onCreat = (content) => {
    const newItem = {
      id : new Date().getTime(),
      content,
      createdDate : new Date().getTime(),
      isDone : false
    }
    setTodo([newItem, ...todo]);
  };

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/First/*" element={<Top />} />
        <Route path="/commens/editor" element={<Editor onCreat={onCreat}/>} />
        <Route path="/commens/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App;
