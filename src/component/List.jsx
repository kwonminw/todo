import { useState } from "react";
import Item from "./Item";

const List = ({ todo, onUpdate, onDelete }) => {

    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    
    return(
        <div className="List">
            <h2>할 일 목록</h2>
            <div className="listsearch">
                <input 
                    type="text"
                    placeholder="목록을 입력해주세요."
                    
                />
            </div>
        </div>
    )
};

export default List;