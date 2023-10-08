/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { img } from '../png';
import styles from './About.module.scss'

const About = () => {
  const { phone, instagram, mail, location, telegram } = img;

  return (
    <section className="mt-8 text-primary">
      <p className="w-11/12 font-semibold">
        UTAX Ta’lim академияси укув курслари сизлар учун уз хизматларини кўрсатади.
      </p>
      <ul className="flex flex-col gap-5 mt-5">
        <li className="flex gap-5 items-center">
          <img className="cursor-pointer w-7" src={telegram} alt="" />
          <a className="cursor-pointer" target='_blank' href='https://t.me/utaxtalim'>t.me/utaxtalim</a>
        </li>
        {/* <li className="flex gap-5 items-center">
          <img className="cursor-pointer w-8" src={mail} alt="" />
          <p className="cursor-pointer">utaxtalim@gmail.com</p>
        </li> */}
        <li className="flex gap-5 items-center">
          <img className="cursor-pointer w-7" src={instagram} alt="" />
          <a className="cursor-pointer" href='https://instagram.com/utaxtalim?igshid=MWZjMTM2ODFkZg==' target='_blank'>UTAX TA'LIM</a>
        </li>
        <li className="flex gap-5 items-center">
          <img className="cursor-pointer w-7" src={phone} alt="" />
          <a className="cursor-pointer" href='tel:+998781136323'>+998 78 113 63 23</a>
        </li>
        <li className="flex gap-5 items-center">
          <img className="cursor-pointer w-7 h-9" src={location} alt="" />
          <p className="cursor-pointer">г. Ташкент, Юнусабадский район</p>
        </li>
      </ul>
      <p className="text-2xl mt-3">Манзилимиз:</p>
      <div className={styles.div_first}>
        <a
          href="https://yandex.uz/maps/org/utax/81821261843/?utm_medium=mapframe&utm_source=maps"
          className={styles.a_first}>
          UTAX
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/business_consulting/184105462/?utm_medium=mapframe&utm_source=maps"
          className={styles.a_second}>
          Бизнес-консалтинг в Ташкенте
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/attorney/184105616/?utm_medium=mapframe&utm_source=maps"
          className={styles.a_third}>
          Адвокаты в Ташкенте
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/org/utax/81821261843/?ll=69.230428%2C41.323328&z=16"
          frameBorder="1"
          allowFullScreen={true}
          className={styles.iframe}></iframe>
      </div>
    </section>
  );
};

export default About;
