import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/Login/Login.jsx';
import { Signup } from './pages/Signup/Signup.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { Analytics } from './pages/Analytics/Analytics.jsx';
import { CreateQuiz } from './pages/CreateQuiz/CreateQuiz.jsx';

import { Provider } from 'react-redux';
import store from '../app/store.js';
import { Thankyou } from './pages/Thankyou/Thankyou.jsx';
import { Quiz } from './pages/Quiz/Quiz.jsx';
import { Question } from './pages/Question/Question.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/login",
    element: <div><Login /></div>,
  },
  {
    path: "/signup",
    element: <div><Signup /></div>,
  },
  {
    path: "/dashboard",
    element: <div><Dashboard /></div>,
  },
  {
    path: "/analytics",
    element: <div><Analytics /></div>,
  },
  {
    path: "/createquiz",
    element: <div><CreateQuiz /></div>,
  },
  {
    path: "/submitted",
    element: <div><Thankyou /></div>,
  },
  {
    path: "/quiz/attempquiz/:id",
    element: <div><Quiz /></div>,
  },
  {
    path: "/question/:id",
    element: <div><Question /></div>,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
)
