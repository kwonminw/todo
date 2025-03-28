import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { TodoDate, TodoWrite, TodoList } from "./component/todo";
import AllEditor from "./component/commens/Diarypage";
import './App.css';
import Diarypage from "./component/commens/Diarypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diarypage" element={<Diarypage />} />
       {/*  <Route path="/commens/diarylist" element={<DiaryList onDeletes={onDeletes} DiaryList={data} />} /> */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;
