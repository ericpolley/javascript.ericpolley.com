import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import T01html from './pages/T01html';
import Header from './components/Header';
import T02boot from './pages/T02boot';
import T03boiler from './pages/T03boiler';
import T04linkcss from './pages/T04linkcss';

function App() {
  return (
    <>
    <HashRouter>
      <Header />
      <div className='h-20'></div>
      <div className='p-6 pt-16 pb-24 mb-12 md:p-16 md:pb-48 border-2 border-t-4 border-slate-900 text-white bg-slate-800'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/T01' element={<T01html />} />
        <Route path='/T02' element={<T02boot />} />
        <Route path='/T03' element={<T03boiler />} />
        <Route path='/T04' element={<T04linkcss/>} />
      </Routes>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
