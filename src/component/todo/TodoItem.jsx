import { useState } from "react";
import "./TodoItem.css"

const TodoItem = ({ id, isDone, content, writeDate, onUpdate, onDelete }) => {


    const onDeleteBtn = () => {
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input 
                type="checkbox"
                checked={isDone}
                onChange={() => {onUpdate(id)}} 
            />
            <div className={`Content ${isDone ? 'done' : ''}`}>{content}</div>
            <div className="WriteDate">{new Date(writeDate).toLocaleDateString()}</div>
            <button onClick={onDeleteBtn}>제거</button>
        </div>
    )
}

export default TodoItem;