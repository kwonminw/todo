import { useState } from "react";

const DiaryUpdate = ({ id, content, emotion, onUpdate }) => {
    const [contents, setContents] = useState(content);
    const [emotions, setEmotions] = useState(emotion);

    const handleChangeContent = (e) => {
        setContents(e.target.value)
    }

    const handleChangeEmotion = (e) => {
        setEmotions(e.target.value)
    }

    return(
        <div> <h2>수정</h2>
        <div>
            <textarea
                name="content"
                placeholder="오늘의 일기를 작성해주세요"
                value={contents}
                onChange={handleChangeContent}
            />
        </div>
        <div className="score">
            <div className="score2">오늘의 감정점수 : </div>
            <select className="score3" name="emotion" value={emotions} onChange={handleChangeEmotion}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={() => {onUpdate(id, contents, emotions)}}>일기 저장하기</button>
        </div></div>
    )
}

export default DiaryUpdate;