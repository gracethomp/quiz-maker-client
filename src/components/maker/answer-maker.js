import React from 'react';

function Answer({ onDelete, answer, handleAnswerChange, question, checked, onRadioClick}) {
    return (
        <div class="answer">
            <input type="radio" id={answer} name={question} checked={checked} onClick={onRadioClick}/>
            <label for={answer}></label>
            <input type="text" id="answer1" value={false} class="answer field" placeholder="Enter answer choice" required onChange={handleAnswerChange} />
            <div class="callout" data-closable>
                <button class="closing-button" onClick={onDelete}>
                    <span class="close-answer">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Answer;