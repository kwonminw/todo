const Item = ({ id, content, createdDate, isDone, onUpdate, onDelete }) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return(
        <div className="Item">
            <div className="check">
                <input 
                    type="checkbox"
                    checked={isDone}
                    onChange={onChangeCheckbox}
                />
            </div>
            <div className="content">
                {content}
            </div>
            <div className="date">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="del">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
};

export default Item;