import React from "react";
import { useState, useRef } from "react";
import DiaryItem from "./DiaryItem";
import DiaryList from "./DiaryList";

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.author.length < 1) {
            alert("작성자는 최소 1글자 이상 입력해주세요.");
            authorInput.current.focus();
            return;
        }
        if (state.content.length < 5) {
            alert("일기 본문은 최소 5글자 이상 입력해주세요.");
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장완료!");

        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    }

    return (
        <div className="diary">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    name="author"
                    placeholder="작성자 이름을 입력해주세요"
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    placeholder="오늘의 일기를 작성해주세요"
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div>
            <div className="score">
                <div className="score2">오늘의 감정점수 : </div>
                <select className="score3" name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="btn">
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
};

export default DiaryEditor;