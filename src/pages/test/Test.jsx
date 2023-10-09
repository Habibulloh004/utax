import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { img } from '../../png';
import Timer from './Timer';

const Test = ({correctCount, setCorrectCount, userData}) => {
  const { next, prev } = img;
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [data, setData] = useState([]);
  const TestsPerPage = 10;
  const api = 'https://utax-777597cb6d80.herokuapp.com/get_questions';

  const handleAnswerSelect = (questionIndex, option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setOpen(!open);
    let correct = 0;
    let incorrect = 0;

    data.forEach((question, index) => {
      if (question.correct_option === userAnswers[index]) {
        correct++;
      } else {
        incorrect++;
      }
    });

    setCorrectCount(correct);
    setIncorrectCount(incorrect);
  };

  const totalPages = Math.ceil(data.length / TestsPerPage);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((d) => {
        // Limit the data to the first 50 questions
        const limitedData = d.questions.slice(0, 50);
        setData(limitedData);
        setUserAnswers(Array(limitedData.length).fill(null));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (resOpen) {
    const totalCount = correctCount * 2;
    let comparison = '';
    let color = '';
    if (totalCount < 50) {
      comparison = 'Қониқарсиз';
      color = '#DB2929';
    } else if (totalCount <= 80) {
      comparison = 'Қониқарли';
      color = '#2D2AD6';
    } else {
      comparison = 'Мукаммал';
      color = '#00A907';
    }
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-primary2 w-10/12 p-8 rounded shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Тест натижаси <span className={`text-[${color}]`}>{comparison}</span>
          </h2>
          <p className="text-left w-full">Умумий тўпланган балл : {totalCount}</p>
          <p className="text-left w-full">Тўғри жавоблар сони : {correctCount}</p>
          <p className="text-left w-full">Нотўғри жавоблар сони : {incorrectCount}</p>
          <button
            onClick={() => setResOpen(!resOpen)}
            className="mt-4 bg-primary text-white font-medium py-2 px-4 rounded-[28px]">
            <Link to="/">Бош сахифа</Link>
          </button>
        </div>
      </div>
    );
  }
  if (handleSubmit) {
    const exportObj = {
      ...userData, count: correctCount
    }
    localStorage.setItem('obj', JSON.stringify(exportObj));
  }
  
  return (
    <>
      {open ? (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-colorFoot p-8 w-10/12 rounded shadow-lg text-primary">
            <p className="text-xl font-semibold mb-4 text-center">
              Тест синовини якунламоқчимисиз?
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setOpen(!open);
                  setResOpen(!resOpen);
                }}
                className="mt-4 bg-primary text-white font-medium py-2 rounded-[28px] px-5">
                Ха
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="mt-4 bg-primary text-white font-medium py-2 px-4  rounded-[28px]">
                Йук
              </button>
            </div>
          </div>
        </div>
      ) : (
        <main className="mt-6 text-primary">
          <article className="flex justify-between items-center">
            <p className="font-semibold text-4xl">Тест</p>
            <div className="flex flex-col justify-center items-end text-lg">
              <Timer open={open} setOpen={setOpen} />
              <p className="text-sm">
                {(currentPage - 1) * TestsPerPage + 1}-
                {Math.min(currentPage * TestsPerPage, data.length)}/{data.length}
              </p>
            </div>
          </article>
          <section>
            {data
              .slice((currentPage - 1) * TestsPerPage, currentPage * TestsPerPage)
              .map((question, index) => (
                <article key={index} className="mt-5 bg-gray1 rounded-2xl py-6 px-4">
                  <p>
                    {index + 1 + (currentPage - 1) * TestsPerPage}. {question.question}
                  </p>
                  <form className="form_radio w-11/12 mx-auto mt-4">
                    <ul className="flex flex-col gap-2">
                      {question.options.map((option, optionIndex) => (
                        <li className="flex gap-2 items-center w-full" key={optionIndex}>
                          <input
                            className="accent-primary w-[10%] "
                            type="radio"
                            value={option}
                            id={option + optionIndex}
                            checked={
                              userAnswers[index + (currentPage - 1) * TestsPerPage] === option
                            }
                            onChange={() =>
                              handleAnswerSelect(index + (currentPage - 1) * TestsPerPage, option)
                            }
                          />
                          <label className="cursor-pointer w-[80%] text-left " htmlFor={option + optionIndex}>
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
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li
                    className={`cursor-pointer ${
                      currentPage === index + 1 ? 'font-bold' : 'font-normal'
                    }`}
                    key={index}
                    onClick={() => {
                      setCurrentPage(index + 1);
                      window.scrollTo(0, 0);
                    }}>
                    {currentPage === index + 1 ? index + 1 : index + 1}
                  </li>
                ))}
              </ul>
              <div className="flex gap-5">
                <img
                  className="cursor-pointer bg-gray1 px-5 py-2 rounded-2xl"
                  src={prev}
                  alt=""
                  onClick={() => {
                    currentPage > 1 && setCurrentPage(currentPage - 1);
                    window.scrollTo(0, 0);
                  }}
                />
                <img
                  className="cursor-pointer bg-gray1 px-5 py-2 rounded-2xl"
                  src={next}
                  alt=""
                  onClick={() => {
                    currentPage < totalPages && setCurrentPage(currentPage + 1);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-gray1 px-5 py-1 rounded-2xl font-semibold">
                Якунлаш
              </button>
            </article>
          </section>
        </main>
      )}
    </>
  );
};

export default Test;
