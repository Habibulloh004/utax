import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { img } from '../png';

const Registration = () => {
  const { setUserData } = useContext(MyContext);
  const { register } = img;

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    comment: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([formData.name, formData.lastName, formData.comment, formData.phone]);
    let localObj = {
      name: formData.name + ' ' + formData.lastName,
      phone: formData.phone,
    };
    localStorage.setItem('localObj', JSON.stringify(localObj));
    // const data = JSON.parse(localStorage.getItem('localObj'));
  };
  const isFormValid = formData.name !== '' && formData.lastName !== '' && formData.phone !== '';

  return (
    <main className="mt-16 flex items-center justify-center text-primary">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
        <article className="flex items-center justify-center pr-2">
          <img className="w-16" src={register} alt="" />
          <p className="text-lg">Рўйхатдан ўтиш</p>
        </article>
        <ul className="flex flex-col justify-center gap-5 mt-6">
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="firstName">Исм</label>
            <input
              onChange={handleInputChange}
              required
              className="px-4 py-1 rounded-[28px] w-3/5 bg-colorFoot text-primary"
              type="text"
              id="firstName"
              name="name"
            />
          </li>
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="lastName">Фамилия</label>
            <input
              onChange={handleInputChange}
              required
              className="p-4 py-1 rounded-[28px] w-3/5 bg-colorFoot text-primary"
              type="text"
              id="lastName"
              name="lastName"
            />
          </li>
          <li className="flex gap-3 justify-end items-center">
            <label htmlFor="phoneNumber">Тел. Рақами</label>
            <input
              onChange={handleInputChange}
              required
              className="p-4 py-1 rounded-[28px] w-3/5 bg-colorFoot text-primary"
              type="number"
              id="phoneNumber"
              name="phone"
            />
          </li>
        </ul>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="cursor-pointer mt-8 bg-primary text-white1 rounded-[28px] h-10 w-40">
          {isFormValid ? <Link to="/rules" className=' w-full h-full p-3'>Рўйхатдан ўтиш</Link> : <p className=''>Рўйхатдан ўтиш</p>}
        </button>
      </form>
    </main>
  );
};

export default Registration;
