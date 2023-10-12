import React, { useState } from 'react';

const QuestionForm = () => {
  const api = 'https://utax-777597cb6d80.herokuapp.com/add_question'
  const initialQuestion = {
    title: '',
    question: '',
    options: ['', '', '', ''],
    correct_option: '',
  };

  const [question, setQuestion] = useState(initialQuestion);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'options') {
      const updatedOptions = [...question.options];
      updatedOptions[index] = value;
      setQuestion({ ...question, options: updatedOptions });
    } else {
      setQuestion({ ...question, [name]: value });
    }
  };

  const handleCorrectOptionClick = (index) => {
    setQuestion({ ...question, correct_option: question.options[index] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(question);
    // You can send the question object to your API or perform other actions here.
    const bodyFormData = new FormData();
    bodyFormData.append('title', question.title);
    bodyFormData.append('question', question.question);
    bodyFormData.append('options', question.options);
    bodyFormData.append('correct_option', question.correct_option);

    // fetch(api, {
    //   method: 'POST',
    //   body: bodyFormData,
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.text();
    //     } else {
    //       throw new Error('HTTP Error: ' + response.status);
    //     }
    //   })
    //   .then((data) => {
    //     console.log('Request successful! Response: ' + data);
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred: ' + error.message);
    //   });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Question Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={question.title}
            onChange={(e) => handleChange(e)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            value={question.question}
            onChange={(e) => handleChange(e)}
            className="border p-2 w-full h-24"
            required
          />
        </div>
        <div>
          <label>Options</label>
          {question.options.map((option, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="options"
                value={option}
                onChange={(e) => handleChange(e, index)}
                className="border p-2 flex-grow"
                required
              />
              <button
                type="button"
                onClick={() => handleCorrectOptionClick(index)}
                className={`bg-blue-500 text-white px-2 py-1 rounded ${
                  question.correct_option === option ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={question.correct_option === option}>
                Correct
              </button>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="correct_option">Correct Option</label>
          <input
            type="text"
            id="correct_option"
            name="correct_option"
            value={question.correct_option}
            className="border p-2 w-full"
            readOnly
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
