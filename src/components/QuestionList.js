// import React from "react";

// function QuestionList() {
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>{/* display QuestionItem components here after fetching */}</ul>
//     </section>
//   );
// }

// export default QuestionList;

import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateCorrectAnswer }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={() => onDeleteQuestion(question.id)}
            onUpdateCorrectAnswer={correctIndex =>
              onUpdateCorrectAnswer(question.id, correctIndex)
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

