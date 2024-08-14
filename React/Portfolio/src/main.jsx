import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Skill from './Component/Skill.jsx'
import Project from './Component/Project.jsx'
import Contact from './Component/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skill" element={<Skill />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
