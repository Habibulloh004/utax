import React, { useState } from 'react';
// import { useEffect } from 'react';

function Admin() {
//   const api = 'https://utaxtest-f415251dfaac.herokuapp.com/create_test_with_questions';
  const [formData, setFormData] = useState({
    test_title: '',
    questions: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    question_text: '',
    correct_option: '',
    options: ['', '', '', ''],
  });

  const handleChange = (e, index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = e.target.value;

    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions,
    });
  };

  const handleQuestionChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      question_text: e.target.value,
    });
  };

  const handleCorrectAnswerChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      correct_option: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQuestion.question_text && currentQuestion.correct_option) {
      setFormData({
        ...formData,
        questions: [...formData.questions, { ...currentQuestion }],
      });
      setCurrentQuestion({
        question_text: '',
        correct_option: '',
        options: ['', '', '', ''],
      });
    }
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-primary rounded shadow mt-4">
      <h1 className="text-2xl mb-4 text-primary">Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="test_title" className="block mb-2">
            Test Title
          </label>
          <input
            type="text"
            id="test_title"
            name="test_title"
            value={formData.test_title}
            onChange={(e) => setFormData({ ...formData, test_title: e.target.value })}
            required
            className="w-full px-3 py-2 border border-primary rounded"
          />
        </div>
        <div className="mb-4 ">
          <label className="block mb-2 text-primary" htmlFor="question">
            Question
          </label>
          <input
            type="text"
            className="w-full p-2 border border-primary rounded "
            id="question"
            value={currentQuestion.question_text}
            onChange={handleQuestionChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-primary" htmlFor="correctAnswer">
            Correct Answer
          </label>
          <input
            type="text"
            className="w-full p-2 border border-primary rounded "
            id="correctAnswer"
            value={currentQuestion.correct_option}
            onChange={handleCorrectAnswerChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-primary">Options</label>
          {currentQuestion.options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 mb-2 border border-primary rounded "
              value={option}
              onChange={(e) => handleChange(e, index)}
              required
            />
          ))}
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Admin;
