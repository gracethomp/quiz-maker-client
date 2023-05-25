import React, { useState, useEffect } from 'react';

const Question= ({answers, title}) => {



    return (
        <div class='creator'>
            <div class='form'>
                <div class="question">
                    <p class>{title}</p>
                    <div class="underline"></div>
                </div>
                <div class="answers">
                {answers.map((answer) =>(
                    <div class = "answer">
                        <input type="checkbox" id={answer}/>
                        <label for={answer}></label>
                        <p class="answer-text">{answer}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Question;