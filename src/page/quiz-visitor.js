import React, { useState, useEffect} from 'react';
import Question from '../components/visitor/question';
import axios from 'axios';

function QuizVisitor() {
    const [quizes, setQuizes] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/quizes")
      .then((response) => response.json())
      .then((result) => setQuizes(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {quizes.map((post) =>(
        <>
            <p>{post.title}</p>
            {post.questions.map((question) =>(
                <Question title={question.question} answers={question.answers} />
            ))}
        </>
    ))}
    </>
  );
};

export default QuizVisitor;