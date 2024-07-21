// import React, { useState } from "react";

// function QuestionForm(props) {
//   const [formData, setFormData] = useState({
//     prompt: "",
//     answer1: "",
//     answer2: "",
//     answer3: "",
//     answer4: "",
//     correctIndex: 0,
//   });

//   function handleChange(event) {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(formData);
//   }

//   return (
//     <section>
//       <h1>New Question</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Prompt:
//           <input
//             type="text"
//             name="prompt"
//             value={formData.prompt}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 1:
//           <input
//             type="text"
//             name="answer1"
//             value={formData.answer1}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 2:
//           <input
//             type="text"
//             name="answer2"
//             value={formData.answer2}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 3:
//           <input
//             type="text"
//             name="answer3"
//             value={formData.answer3}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Answer 4:
//           <input
//             type="text"
//             name="answer4"
//             value={formData.answer4}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Correct Answer:
//           <select
//             name="correctIndex"
//             value={formData.correctIndex}
//             onChange={handleChange}
//           >
//             <option value="0">{formData.answer1}</option>
//             <option value="1">{formData.answer2}</option>
//             <option value="2">{formData.answer3}</option>
//             <option value="3">{formData.answer4}</option>
//           </select>
//         </label>
//         <button type="submit">Add Question</button>
//       </form>
//     </section>
//   );
// }

// export default QuestionForm;


// QuestionForm.js

import React, { useState } from "react";

function QuestionForm({ onSubmitQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "answers") {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[event.target.dataset.index] = value;
      setFormData({ ...formData, answers: updatedAnswers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitQuestion(formData); // Invoke onSubmitQuestion function passed as prop
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Answers:
          {formData.answers.map((answer, index) => (
            <input
              key={index}
              type="text"
              name="answers"
              data-index={index}
              value={answer}
              onChange={handleChange}
              required
            />
          ))}
        </label>
        <br />
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
            required
          >
            {formData.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;


