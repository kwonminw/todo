import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import './App.css';
import Diarypage from "./component/commens/Diarypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diarypage" element={<Diarypage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
