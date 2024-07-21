// import React from "react";

// function QuestionItem({ question }) {
//   const { id, prompt, answers, correctIndex } = question;

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select defaultValue={correctIndex}>{options}</select>
//       </label>
//       <button>Delete Question</button>
//     </li>
//   );
// }

// export default QuestionItem;

import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
  const [localCorrectIndex, setLocalCorrectIndex] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleCorrectIndexChange(event) {
    const newCorrectIndex = parseInt(event.target.value);
    setLocalCorrectIndex(newCorrectIndex);
    onUpdateCorrectAnswer(newCorrectIndex);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={localCorrectIndex} onChange={handleCorrectIndexChange}>
          {options}
        </select>
      </label>
      <button onClick={onDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
