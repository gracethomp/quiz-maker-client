import React, { useState } from "react";
import QuestionMaker from "../components/maker/question-maker";
import NavigationButton from "../components/navigation-buttons";
import plus from "../assets/plus.png";

function QuizMaker() {
  const [mainIndex, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    questions: [],
  });

  const addQuestion = () => {
    const updatedQuestions = [
      ...questions,
      { id: mainIndex + 1, question: "", answers: [] },
    ];
    setQuestions(updatedQuestions);
    setIndex(mainIndex + 1);
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: updatedQuestions,
    }));
  };

  const deleteQuestion = (index) => {
    setQuestions((components) =>
      components.filter((component) => component.id !== index)
    );
  };

  const handleQuizTitle = (e) => {
    const { value } = e.target;
    let id = value.toLowerCase();
    id = id.replace(/\s/g, "-");
    setFormData({ ...formData, title: value, slug: id });
  };

  const handleSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setFormData({ ...formData, questions: [...questions, newQuestion] });
    fetch("http://localhost:3001/quizzes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleQuestionsChange = (index, e) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === index) {
        return { ...question, question: e.target.value };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: updatedQuestions,
    }));
  };

  const handleAnswers = (newAnswers, index) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === index) {
        return { ...question, answers: newAnswers };
      }
      return question;
    });

    setQuestions(updatedQuestions);
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: updatedQuestions,
    }));
  };

  return (
    <>
      <div class="creator">
        <div class="round-shadow-box-form form">
          <input
            type="text"
            class="title field"
            value={formData.title}
            placeholder="Quiz title"
            required
            onChange={handleQuizTitle}
          />
        </div>
        {questions.map((question, index) => (
          <div key={question.id}>
            <QuestionMaker
              mainIndex={index}
              question1={question}
              onDelete={() => deleteQuestion(question.id)}
              handleQuestionChange={(e) =>
                handleQuestionsChange(question.id, e)
              }
              handleAnswers={handleAnswers}
            />
          </div>
        ))}
        <div class="plus-question">
          <button onClick={addQuestion} class="button-plus-question">
            <img class="plus-img" src={plus} alt="" />
          </button>
        </div>
        <NavigationButton
          visible={questions.length >= 1 && formData.title !== ""}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default QuizMaker;
