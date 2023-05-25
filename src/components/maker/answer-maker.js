import React, { useState } from 'react';

function Answer({onDelete}) {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
      };

    return (
        <div class="answer">
            <input type="checkbox" id="roundCheckbox"/>
            <label for="roundCheckbox"></label>
            <input type="text" id="answer1" value={answer} class="answer field" placeholder="Enter answer choice" required onChange={handleAnswerChange}/>
            <div class="callout" data-closable>
                <button class="closing-button" role='button' onClick={onDelete}>
                    <span class="close-answer">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Answer;