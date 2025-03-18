import { useState, useRef } from "react";

const Editor = ({ onCreat }) => {
    const [newTodoText, SetNewTodoText] = useState('');
    const inputRef = useRef();

    const handleChangeNewTodo = (e) => {
        SetNewTodoText(e.target.value);
    };

    const addTodo = () => {
        if(!newTodoText){
            inputRef.current.focus();
            return;
        }
        onCreat(newTodoText);
        SetNewTodoText('');
    };

    const onkeyDown = (e) => {
        if(e.keycode == 13){
            addTodo();
        }
    };

    return(
        <div className="Editor">
            <h2>오늘의 할 일 작성하기</h2>
            <div>
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder="할 일을 작성해주세요"
                    value={newTodoText}
                    onChange={handleChangeNewTodo}
                    onkeyDown={onkeyDown}
                />
                <button onClick={addTodo}>추가하기</button>
            </div>
        </div>
    )
};

export default Editor;