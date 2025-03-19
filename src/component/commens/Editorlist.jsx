import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";


const Editorlist = ({ onCreat, todo, onUpdate, onDelete }) => {
    const navigate = useNavigate();

    const handleChangeNext = () => {
        navigate('/commens/diaryeditor')
    };

    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        return search == ''
            ? todo
            : todo.filter((it) => it.content.toLowerCase().includes(search));
    };

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
        <div className="Editorlist">
            <h2>오늘의 할 일 작성하기</h2>
                <div>
                    <input 
                        ref={inputRef}
                        type="text"
                        placeholder="할 일을 작성해주세요"
                        value={newTodoText}
                        onChange={handleChangeNewTodo}
                        onKeyDown={onkeyDown}
                    />
                    <button onClick={addTodo}>추가하기</button>
                </div>
                <hr />

                <div className="List">
                    <h2>할 일 목록</h2>
                    <div className="listsearch">
                        <input 
                            type="text"
                            placeholder="목록을 입력해주세요."
                            value={search}
                            onChange={onChangeSearch} 
                        />
                    </div>
                    <div className="todoList">
                        {
                            getSearchResult().map(
                                (i) => <Item key={i.id} {...i} onUpdate={onUpdate} onDelete={onDelete} />
                            )
                        }
                    </div>
                    <button onClick={handleChangeNext}>다음</button>
            </div>
        </div>
    )
};

export default Editorlist;

    