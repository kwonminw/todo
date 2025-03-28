const TodoDate = () => {
    return(
            <div className="Top">
                <h2>오늘 날짜</h2>
                <h1>{ new Date().toLocaleDateString() }</h1>
            </div>
    )
}

export default TodoDate;