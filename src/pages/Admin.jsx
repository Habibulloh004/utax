import React, { useState } from 'react';
// import { useEffect } from 'react';

function Admin() {
  const api = 'https://utax-777597cb6d80.herokuapp.com/add_question';
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
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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

// import React, { useState } from 'react';
// import { useEffect } from 'react';

// function Admin() {
//   const api = 'https://utaxtest-f415251dfaac.herokuapp.com/create_test_with_questions';
//   const [formData, setFormData] = useState({
//     question_text: '',
//     correct_option: '',
//     options: ['', '', '', ''],
//   });

//   const handleChange = (e, index) => {
//     const updatedOptions = [...formData.options];
//     updatedOptions[index] = e.target.value;

//     setFormData({
//       ...formData,
//       options: updatedOptions,
//     });
//   };

//   const handleQuestionChange = (e) => {
//     setFormData({
//       ...formData,
//       question_text: e.target.value,
//     });
//   };

//   const handleCorrectAnswerChange = (e) => {
//     setFormData({
//       ...formData,
//       correct_option: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     fetch(api, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 text-primary rounded shadow mt-4">
//       <h1 className="text-2xl mb-4 text-primary">Admin Panel</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4 ">
//           <label className="block mb-2 text-primary" htmlFor="question">
//             Question
//           </label>
//           <input
//             type="text"
//             className="w-full p-2 border border-primary rounded "
//             id="question"
//             value={formData.question_text}
//             onChange={handleQuestionChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-primary" htmlFor="correctAnswer">
//             Correct Answer
//           </label>
//           <input
//             type="text"
//             className="w-full p-2 border border-primary rounded "
//             id="correctAnswer"
//             value={formData.correct_option}
//             onChange={handleCorrectAnswerChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-primary">Options</label>
//           {formData.options.map((option, index) => (
//             <input
//               key={index}
//               type="text"
//               className="w-full p-2 mb-2 border border-primary rounded "
//               value={option}
//               onChange={(e) => handleChange(e, index)}
//               required
//             />
//           ))}
//         </div>
//         <button type="submit" className="px-4 py-2 bg-primary text-white rounded ">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Admin;
