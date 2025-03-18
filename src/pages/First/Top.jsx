import { useNavigate } from "react-router-dom";

const Top = () => {
    const navigate = useNavigate();

    const handleChangeNext = () => {
        navigate('/commens/editor')
    };

    return(
        <div className="Top">
            <h2>오늘 날짜</h2>
            <p>{ new Date().toLocaleDateString() }</p>
            <button onClick={handleChangeNext}>다음</button>
        </div>
    )
};

export default Top;