import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const DiaryItem = ({id, author, content, emotion, created_date, onDelete}) => {
    return(
        <div className="delete">
            <button onClick={()=> {
                if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
                onDelete(id);
                }
            }
        }>삭제하기</button>
        </div>
    )
};

export default DiaryItem;