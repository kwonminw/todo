const TodoDate = () => {
    return (
        <div className="Top">
            <h1>{new Date().toLocaleDateString()}</h1>
        </div>
    )
}

export default TodoDate;