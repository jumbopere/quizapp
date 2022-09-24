import { useState } from "react";
import QuestionList from "../utils/question";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );

  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  const calculateResult = () => {
    console.log({markedAnswers})
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex == markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      point: correct *5,
    };
  };
    return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex +1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex-1] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex+1);
          }}
        />
      )}
    
    
    </div>
  );
};

export default QuizScreen;
