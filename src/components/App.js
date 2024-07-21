// import React, { useState } from "react";
// import AdminNavBar from "./AdminNavBar";
// import QuestionForm from "./QuestionForm";
// import QuestionList from "./QuestionList";

// function App() {
//   const [page, setPage] = useState("List");

//   return (
//     <main>
//       <AdminNavBar onChangePage={setPage} />
//       {page === "Form" ? <QuestionForm /> : <QuestionList />}
//     </main>
//   );
// }

// export default App;

// App.js

import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  function fetchQuestions() {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error("Error fetching questions:", error));
  }

  function addQuestion(formData) {
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newQuestion => {
        setQuestions([...questions, newQuestion]);
        // Do not change the page here
      })
      .catch(error => console.error("Error adding question:", error));
  }

  function deleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        const updatedQuestions = questions.filter(question => question.id !== id);
        setQuestions(updatedQuestions);
      })
      .catch(error => console.error("Error deleting question:", error));
  }

  function updateCorrectAnswer(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correctIndex })
    })
      .then(() => {
        const updatedQuestions = questions.map(question =>
          question.id === id ? { ...question, correctIndex } : question
        );
        setQuestions(updatedQuestions);
      })
      .catch(error => console.error("Error updating question:", error));
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onSubmitQuestion={addQuestion} /> // Pass addQuestion as prop
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={deleteQuestion}
          onUpdateCorrectAnswer={updateCorrectAnswer}
        />
      )}
    </main>
  );
}

export default App;
