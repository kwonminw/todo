import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TodoDate, TodoList, TodoWrite } from "../../component/todo";
import { Diarypage } from "../../component/commens";

const mokaData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    writeDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "Spring 공부하기",
    writeDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "일본어 공부하기",
    writeDate: new Date().getTime()
  }
]

const Main = () => {
  const [todo, setTodo] = useState(mokaData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newData = {
      id: idRef.current,
      isDone: false,
      content,
      writeDate: new Date().getTime()
    };
    setTodo([newData, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    )
  }

  const onDelete = (targetId) => {
    setTodo(
      todo.filter((it) => it.id !== targetId)
    )
  }

  return (
    <div className="Main">
      <TodoDate />
      <TodoWrite onCreate={onCreate} />
      <TodoList todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      <div className="bottom-navi">
        <p className="active"><Link to="/">TODO LIST</Link></p>
        <p><Link to="/diarypage">DAIARY</Link></p>
      </div>
    </div>
  )
}

export default Main;