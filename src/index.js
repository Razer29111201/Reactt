import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Covid from './view/testApi/api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './view/todo/todo';
import Time from './view/settime/settime';
import ApiTest from './view/todoapi/todoapi';
import Detail from './view/todoapi/detail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/covid' element={<Covid />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/time' element={<Time />} />
          <Route path='/apitodo' element={<ApiTest />} />
          <Route path='/apitodo/:id' element={<Detail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
