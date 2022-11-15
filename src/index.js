import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Guruh from './Pages/Guruh';
import Stastika from './Pages/Stastikalar';
import Registir from './Pages/Registir';
import 'bootstrap/dist/css/bootstrap.css'
import Tabl from './Pages/Tabl';

import OquvcilarKelishKetish  from './Components/O`quvchilarStatistikasi/OquvchilarStatistikasi'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        {/* <Route index element={<Home/>}/> */}
          <Route path='/Guruh' element={<Guruh/>} />
          <Route path='/' element={<Stastika />}/>
          <Route path='/table' element={<Tabl />} />
        </Route>
        <Route path='/Registratsiya' element={<Registir />} />
        <Route path='/Kelish'  element={<OquvcilarKelishKetish />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
