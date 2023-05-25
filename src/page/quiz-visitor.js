import React, { useState, useEffect} from 'react';
import Question from '../components/visitor/question';
import NavigationButton from '../components/navigation-buttons';

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
    <div class='creator'>
        {quizes.map((post) =>(
            <>
                <div class='form'>
                    <p class='title field'>{post.title}</p>
                </div>
                {post.questions.map((question) =>(
                    <Question title={question.question} answers={question.answers} />
                ))}
            </>
        ))}
        <NavigationButton visible={true}/>
    </div>
    </>
  );
};

export default QuizVisitor;