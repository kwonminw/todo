import DiaryItem from "./DiaryItem";

const DiaryList = ({ data, onDelete, onUpdate }) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <div className="diary-list">
                {data.map((it, index) => (
                    <DiaryItem key={index} {...it} onDelete={onDelete} onUpdate={onUpdate} />
                ))}
            </div>
        </div>
    )
};

export default DiaryList;