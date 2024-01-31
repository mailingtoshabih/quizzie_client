import './App.css'
import React from 'react'
import axios from 'axios';
import store from '../app/store.js';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react'
import { Quiz } from './pages/Quiz/Quiz.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Signup } from './pages/Signup/Signup.jsx';
import { Question } from './pages/Question/Question.jsx';
import { Thankyou } from './pages/Thankyou/Thankyou.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { Analytics } from './pages/Analytics/Analytics.jsx';
import { CreateQuiz } from './pages/CreateQuiz/CreateQuiz.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {

  // const token = localStorage.getItem('token');
  const backendUrl = import.meta.env.VITE_BACKEND;
  const [token, settoken] = useState(localStorage.getItem('token'));

  const verifyToken = async () => {
    if (!token) {
      return false;
    }
    try {
      const response = await axios.get(`${backendUrl}auth/verify-token`, {
        headers: { 'Authorization': token }
      });
      return true;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return false;
    }
  };


  const [user, setUser] = useState(true);



  useEffect(() => {
    window.scrollTo(0, 0);
    const checkToken = async () => {
      const isTokenValid = await verifyToken();
      if (!isTokenValid) {
        setUser(false);
        console.log('Token is not valid or not available');
      } else {
        setUser(true);
      }
    };
    checkToken();
  }, [token]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Dashboard /> : <Login />,
    },
    {
      path: "/login",
      element: user ? <Dashboard /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Dashboard /> : <Signup />,
    },
    {
      path: "/dashboard",
      element: user ? <Dashboard /> : <Login />,
    },
    {
      path: "/analytics",
      element: user ? <Analytics /> : <Login />,
    },
    {
      path: "/createquiz",
      element: user ? <CreateQuiz /> : <Login />,
    },
    {
      path: "/submitted",
      element: user ? <Thankyou /> : <Login />,
    },
    {
      path: "/quiz/attempquiz/:id",
      element: <div><Quiz /></div>,
    },
    {
      path: "/question/:id",
      element: user ? <Question /> : <Login />,
    },
  ]);


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
