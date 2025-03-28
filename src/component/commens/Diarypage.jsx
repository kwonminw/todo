import { useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const Diarypage = ({}) => {
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
                it.id === targetId ? {...it, content : it.content, emotion : it.emotion} : it
            )
        )
    }

    const onDelete = (targetId) => {
        setData(
            data.filter((it) => it.id !== targetId)
        )
    }

    return(
        <div>
            <DiaryEditor onCreate={onCreate} />
            <DiaryList  data={data} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default Diarypage;