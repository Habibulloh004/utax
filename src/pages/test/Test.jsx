import React, { useState } from 'react';
import DataComponent from '../../components/Pagination';
import { img } from '../../png';
import { tests } from './Questions';
import Timer from './Timer';

const Test = () => {
  const { next, prev } = img;
  const [userAnswers, setUserAnswers] = useState(Array(tests.length).fill(null));
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const handleAnswerSelect = (questionIndex, option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let correct = 0;
    let incorrect = 0;

    tests.forEach((question, index) => {
      if (question.correct_option === userAnswers[index]) {
        correct++;
      } else {
        incorrect++;
      }
    });

    setCorrectCount(correct);
    setIncorrectCount(incorrect);
  };

  return (
    <main className="mt-6 text-primary">
      <article className="flex justify-between items-center">
        <p className="font-semibold text-2xl">Тест</p>
        <div className="flex gap-4 items-center text-lg">
          <Timer />
          <p>10/60</p>
        </div>
      </article>
      <section>
        {tests.map((question, index) => (
          <article key={index} className="mt-5 bg-gray1 rounded-2xl py-6 px-6">
            <p>
              {index + 1}. {question.question}
            </p>
            <form className="form_radio w-10/12 mx-auto mt-4">
              <ul className="flex flex-col gap-2">
                {question.options.map((option, optionIndex) => (
                  <li className="flex items-center gap-2" key={optionIndex}>
                    <input
                      className="accent-primary"
                      type="radio"
                      value={option}
                      id={option+optionIndex}
                      checked={userAnswers[index] === option}
                      onChange={() => handleAnswerSelect(index, option)}
                    />
                    <label className="cursor-pointer" htmlFor={option+optionIndex}>
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </form>
          </article>
        ))}
        <article className="mt-6 flex flex-col gap-2 items-center">
          <ul className="flex gap-3">
            <li className="cursor-pointer font-bold">1</li>
            <li className="cursor-pointer font-normal">2</li>
            <li className="cursor-pointer font-normal">3</li>
            <li className="cursor-pointer font-normal">4</li>
          </ul>
          <div className="flex gap-5">
            <img className="cursor-pointer bg-gray1 px-5 py-2 rounded-2xl" src={prev} alt="" />
            <img className="cursor-pointer bg-gray1 px-5 py-2 rounded-2xl" src={next} alt="" />
          </div>
          <button onClick={handleSubmit} className="bg-gray1 px-5 py-1 rounded-2xl font-semibold">
            Якунлаш
          </button>
        </article>
        {/* <div>
          <p>Correct Answers: {correctCount}</p>
          <p>Incorrect Answers: {incorrectCount}</p>
        </div> */}
      </section>
      {/* <DataComponent data={tests} /> */}
    </main>
  );
};

export default Test;
