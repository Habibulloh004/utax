import { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [see, setSee] = useState(false);

  return (
    <MyContext.Provider value={{ userData, setUserData, open, setOpen, resOpen, setResOpen, see, setSee }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
