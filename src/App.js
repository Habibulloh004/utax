import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './pages/Registration';
import Rules from './pages/Rules';
import Test from './pages/test/Test';
import Admin from './pages/Admin';
// import AdminTest from './pages/AdminTest';

function App() {
  return (
    <main className='flex flex-col justify-between h-screen'>
      <section className="w-10/12 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/adminTest" element={<AdminTest />} /> */}
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
