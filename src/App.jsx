import { useState,useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Top } from "./pages/First";
import { Editorlist } from "./component/commens";
import DiaryEditor from "./component/commens/DiaryEditor";
import DiaryList from "./component/commens/DiaryList";
import DiaryItem from "./component/commens/DiaryItem";
import './App.css';

const sample = [
  {
    id : 2,
    content : '영단어 외우기',
    createdDate : new Date(2025, 1, 26).getTime(),
    isDone : false
  },
  {
    id : 1,
    content : '청소하기',
    createdDate : new Date(2025, 1, 25).getTime(),
    isDone : false
  },
  {
    id : 0,
    content : '서점방문',
    createdDate : new Date(2025, 1, 24).getTime(),
    isDone : false
  }
];

function App() {
  const [todo, setTodo] = useState(sample);

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreat = (content) => {
    const newItem = {
      id : new Date().getTime(),
      content,
      createdDate : new Date().getTime(),
      isDone : false
    }
    setTodo([newItem, ...todo]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if(it.id == targetId){
          return {
            ...it,
            isDone: !it.isDone
          }
        } else {
          return it;
        }
      })
    );
  };

  const onDelete = (targetId) => {
    setTodo(
      todo.filter((it) => it.id != targetId)
    );
  };

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    }
    dataId.current += 1;
    setData([newItem, ...data])
  };

  const onDeletes = (targetId) => {
    const newDiaryList = data.filter((item)=> item.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/First/*" element={<Top />} />
        <Route path="/commens/editorlist" element={<Editorlist onCreat={onCreat} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />} />
        <Route path="/commens/diaryEditor" element={<DiaryEditor onCreat={onCreate} />} />
        <Route element={<DiaryList onDeletes={onDeletes} DiaryList={data} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
