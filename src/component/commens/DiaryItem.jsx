import DiaryUpdate from "./DiaryUpdate";
import { useState } from "react";

const DiaryItem = ({ id, content, emotion, created_date, onDelete, onUpdate }) => {
    const [modal, setModal] = useState(false);



    return(
        <div className="delete">
            <div>{content}</div>
            <div>{emotion}</div>
            <div>{new Date(created_date).toLocaleDateString()}</div>
            <button onClick={()=> {
                if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
                onDelete(id);
                }
            }
        }>삭제하기</button>
        <button onClick={() => {
            setModal(true)
        }}>수정하기</button>

        {modal && <DiaryUpdate onUpdate={onUpdate} id={id} content={content} emotion={emotion} />}
        </div>
    )
};

export default DiaryItem;