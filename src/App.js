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
import T13 from './pages/T13idclass';
import T14 from './pages/T14anchor';
import T15 from './pages/T15importreact';
import T16 from './pages/T16reactapp';
import T17 from './pages/T17tailwindreact';
import T18 from './pages/T18nextjs';
import T19 from './pages/T19tailwindnextjs';
import T20 from './pages/T20reactsite';
import T21 from './pages/T21reactsite';
import T22 from './pages/T22reactsite';
import T23 from './pages/T23reactsite';
import T24 from './pages/T24reactsite';
import T25 from './pages/T25reactsite';
import T26 from './pages/T26reactsite';
import Footer from './components/Footer';

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
        <Route path='/T13' element={<T13 />} />
        <Route path='/T14' element={<T14 />} />
        <Route path='/T15' element={<T15 />} />
        <Route path='/T16' element={<T16 />} />
        <Route path='/T17' element={<T17 />} />
        <Route path='/T18' element={<T18 />} />
        <Route path='/T19' element={<T19 />} />
        <Route path='/T20' element={<T20 />} />
        <Route path='/T21' element={<T21 />} />
        <Route path='/T22' element={<T22 />} />
        <Route path='/T23' element={<T23 />} />
        <Route path='/T24' element={<T24 />} />
        <Route path='/T25' element={<T25 />} />
        <Route path='/T26' element={<T26 />} />
      </Routes>
      
      </div>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;
