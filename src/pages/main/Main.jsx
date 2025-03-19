import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className="Main">
            다이어리 작업을 시작할까요?
            <div>
                <Link to='/first/top'>시작</Link>
            </div>
        </div>
    )
}

export default Main;