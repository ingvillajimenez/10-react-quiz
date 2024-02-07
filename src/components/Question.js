import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

///////////////////////
// Displaying Questions
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
