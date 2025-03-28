import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {

    const [search, setSearch] = useState("");
    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase())
            )
    }

    return(
        <div>
            <h3>🍀 My List 🍀</h3>
            <input
                value={search}
                onChange={onChangeSearch}
                className="SearchBar"
                placeholder="검색어를 입력하세요"
            />
            <div className="ItemList">
                {getSearchResult().map((it, index) => (
                    <TodoItem key={index} {...it} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;