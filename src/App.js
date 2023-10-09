import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './pages/Registration';
import Rules from './pages/Rules';
import Test from './pages/test/Test';
import Reg from './pages/Reg';
import Admin from './pages/Admin';
import { useState } from 'react';
// import AdminTest from './pages/AdminTest';

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [userData, setUserData] = useState()

  return (
    <main className='flex flex-col justify-between h-screen'>
      <section className="w-10/12 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration correctCount={correctCount} setUserData={setUserData} userData={userData} />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/test" element={<Test correctCount={correctCount} setCorrectCount={setCorrectCount} userData={userData} />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/adminTest" element={<AdminTest />} /> */}
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
