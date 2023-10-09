import { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <MyContext.Provider value={{ userData, setUserData }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
