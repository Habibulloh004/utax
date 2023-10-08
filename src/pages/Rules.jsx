import React from 'react';
import { Link } from 'react-router-dom'

const Rules = () => {
  return (
      <main className="container text-primary bg-bgPrimary mt-6 text-sm p-5 rounded-2xl">
        <p className='text-lg font-semibold text-center'>Қоидалар!</p>
        <p>
          1. Сиз бу тестни фақат бир марта топшира оласиз. <br /> 2. Синовда 50 та тест мавжуд.{' '}
          <br /> 3. Ҳар бир тест учун 2 дақиқа вақт берилади. <br /> 4. Тест бошлангандан сонг 100
          дақиқа ичида жавобларни белгилаб юбориш тугмасини босинг. <br /> 5. 100 дақиқадан сонг
          белгиланган жавоблар тасдиқланиб натижаси корсатилади. <br /><br /> Тавсия!<span className='block mt-4 font-bold'>
          Тестни бошлашдан аввал
          қулайроқ жойлашиб 100 дақиқа чалғимай тестларни ишланг.</span>
        </p>
        <Link to='/test' className='w-full flex justify-center'>
          <button
            className="cursor-pointer mt-8 bg-primary text-white1 p-2 rounded-[28px] w-2/3">
            Тасдиклаш
          </button>
        </Link>
      </main>
  );
};

export default Rules;
