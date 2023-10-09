/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { img } from '../png';

const Footer = () => {
  const { telegram, instagram } = img;
  return (
    <footer className="bg-colorFoot w-full mt-4">
      <div className="container w-10/12 mx-auto py-3 text-primary flex items-center justify-between">
        <p className='cursor-pointer'>UTAX Ta’lim</p>
        <article className="w-2/4 text-right">
          <a href="tel:+998781136323" className='cursor-pointer text-sm' target="blank" rel="noreferrer">
            Тел: +998 78 113 63 23
          </a>
          <div className="flex justify-end mt-2 gap-5">
            <a href='https://instagram.com/utaxtalim?igshid=MWZjMTM2ODFkZg==' target='_blank' rel="noreferrer">
              <img className="w-5 cursor-pointer" src={instagram} alt="" />
            </a>
            <a href='https://t.me/utaxtalim' target='_blank' rel="noreferrer">
              <img className="w-5 cursor-pointer" src={telegram} alt="" />
            </a>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
