import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import T01html from './pages/T01html';
import Header from './components/Header';
import T03boiler from './pages/T03boiler';
import T04linkcss from './pages/T04linkcss';
import T05flexbox from './pages/T05flexbox';
import T02htmltext from './pages/T02htmltext';
import T06 from './pages/T06imagehtml';
import T07 from './pages/T07color';
import T12boot from './pages/T12boot';
import T08 from './pages/T08csbox';
import T09 from './pages/T09github';
import T10 from './pages/T10customdomain';
import T11 from './pages/T11updategithub';

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
        <Route path='/T06' element={<T06 />} />
        <Route path='/T07' element={<T07 />} />
        <Route path='/T08' element={<T08 />} />
        <Route path='/T09' element={<T09 />} />
        <Route path='/T10' element={<T10 />} />
        <Route path='/T11' element={<T11 />} />
        <Route path='/T12' element={<T12boot />} />
      </Routes>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
