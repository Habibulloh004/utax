import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { img } from '../png';

const Registration = () => {
  const { register } = img;
  const [inputValue, setInputValue] = useState('');
  return (
    <main className="mt-16 flex items-center justify-center text-primary">
      <form className="w-full flex flex-col items-center justify-center">
        <article className="flex items-center justify-center pr-2">
          <img className="w-16" src={register} alt="" />
          <p className="text-lg">Рўйхатдан ўтиш</p>
        </article>
        <ul className="flex flex-col justify-center gap-5 mt-6">
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="name">Исм</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              required
              className="px-4 py-1 rounded-[28px] w-3/5 bg-colorFoot"
              type="text"
              id="fName"
            />
          </li>
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="lName">Фамилия</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              required
              className="p-4 py-1 rounded-[28px] w-3/5 bg-colorFoot"
              type="text"
              id="fName"
            />
          </li>
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="number">Тел. Рақами</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              required
              className="p-4 py-1 rounded-[28px] w-3/5 bg-colorFoot"
              type="number"
              id="number"
            />
          </li>
        </ul>
        <button
          type="submit"
          className="cursor-pointer mt-8 bg-primary text-white1 p-2 rounded-[28px]  w-2/3">
          {inputValue === '' ? (
            'Рўйхатдан ўтиш'
          ) : (
            <Link to="/rules" className="w-full flex justify-center">
              Рўйхатдан ўтиш
            </Link>
          )}
        </button>
      </form>
    </main>
  );
};

export default Registration;
