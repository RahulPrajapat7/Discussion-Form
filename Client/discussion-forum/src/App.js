import './App.css';
import Forum from './Forum/Forum';
import Navbar from './Navabar/Navbar';
import { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Trending from './Trending/Trending';

function App() {
  const [show, setShow] = useState([])
  console.log(show)
  const [questions, setQuestions] = useState({
    question: "",
  });


  const getQuestion = async () => {
    const response = await fetch("http://localhost:5000/api/get", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },

    });
    const json = await response.json();
    setShow(json);
  }

  useEffect(() => {
    getQuestion();
  }, [])


  const handleToggleComplete = async (user) => {
    console.log(user)
    const response = await fetch(`http://localhost:5000/api/${user._id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(user)
    });
    const json = await response.json();
    getQuestion();
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/question", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(questions)
    });
    const json = await response.json();
    getQuestion()
  }

  return (
    <div >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forum show={show} setShow={setShow} questions={questions} setQuestions={setQuestions} handleSubmit={handleSubmit} handleToggleComplete={handleToggleComplete} />} />
          <Route path="teams" element={<Trending show={show} setShow={setShow} />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
