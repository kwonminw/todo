import { useRef, useState } from 'react';
import './TodoWrite.css';

const TodoWrite = ({ onCreate }) => {
    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onChangeContent = (event) => {
        setContent(event.target.value);
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    };

    return (
        <div className='TodoWrite'>
            <div className='WriteContent'>
                <input
                    value={content}
                    onChange={onChangeContent}
                    placeholder="할 일 목록을 추가해주세요"
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoWrite;