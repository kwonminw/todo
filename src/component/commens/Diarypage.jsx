import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import './Diarypage.css';

const Diarypage = ({ }) => {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

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
    }

    const onUpdate = (targetId, content, emotion) => {
        setData(
            data.map((it) =>
                it.id === targetId ? { ...it, content: it.content, emotion: it.emotion } : it
            )
        )
    }

    const onDelete = (targetId) => {
        setData(
            data.filter((it) => it.id !== targetId)
        )
    }

    return (
        <div className="Diarypage">
            <DiaryEditor onCreate={onCreate} />
            <DiaryList data={data} onUpdate={onUpdate} onDelete={onDelete} />
            <div className="bottom-navi">
                <p><Link to="/">TODO LIST</Link></p>
                <p className="active"><Link to="/diarypage">DAIARY</Link></p>
            </div>
        </div>
    )
}

export default Diarypage;