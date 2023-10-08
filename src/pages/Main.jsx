import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { img } from '../png';

const Main = () => {
  const api = 'https://utaxtest-f415251dfaac.herokuapp.com/get_all_tests';
  const { about, test_book } = img;
  // const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      })
      .catch((err) => console.log(err));
  };

  const axiosData = () => {
    axios
      .get(api)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    // const getData = async () => {
    //   try {
    //     const res = await axios.get(api);
    //     console.log(res);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getData();
  }, []);

  return (
    <main className="container mt-6">
      <article className="w-full mx-auto">
        <img src={about} className="w-full" alt="" />
      </article>
      <article className="text-center mt-5 text-primary">
        <p className="text-2xl font-semibold">Онлайн тест синови</p>
        <p className="text-sm mt-3 font-medium">
          Ушбу саҳифа орқали UTAX Ta’lim академияси тест синовини амалга ошириб ўз даражангизни
          аниқлаб олинг.
        </p>
      </article>
      <Link to="/registration">
        <div className="bg-primary text-white1 cursor-pointer flex items-center justify-center mt-4 rounded-[28px] w-10/12 mx-auto py-1 px-3">
          <img src={test_book} className="w-9" alt="" /> <p>Тест синовини бошлаш</p>
        </div>
      </Link>
    </main>
  );
};

export default Main;
