import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import T01html from './pages/T01html';
import Header from './components/Header';
import T10boot from './pages/T10boot';
import T03boiler from './pages/T03boiler';
import T04linkcss from './pages/T04linkcss';
import T05flexbox from './pages/T05flexbox';
import T02htmltext from './pages/T02htmltext';

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
        <Route path='/T02' element={<T02htmltext />} />       
        <Route path='/T03' element={<T03boiler />} />
        <Route path='/T04' element={<T04linkcss />} />
        <Route path='/T05' element={<T05flexbox />} />

        <Route path='/T10' element={<T10boot />} />
      </Routes>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
