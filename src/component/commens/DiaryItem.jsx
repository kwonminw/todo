import DiaryUpdate from "./DiaryUpdate";
import { useState } from "react";

const DiaryItem = ({ id, content, emotion, created_date, onDelete, onUpdate }) => {
    const [modal, setModal] = useState(false);



    return (
        <div className="DiaryItem">
            <div className="content">{content}</div>
            <div className="row2">
                <div className="emotion">감정점수 : <span>{emotion}</span></div>
                <div className="date">{new Date(created_date).toLocaleDateString()}</div>
            </div>
            <div className="btn">
                <button onClick={() => {
                    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
                        onDelete(id);
                    }
                }
                }>삭제하기</button>
                <button onClick={() => {
                    setModal(true)
                }}>수정하기</button>
            </div>
            {modal && <DiaryUpdate onUpdate={onUpdate} id={id} content={content} emotion={emotion} />}
        </div>
    )
};

export default DiaryItem;