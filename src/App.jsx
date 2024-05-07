import { useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import ServicesPage from './Pages/ServicesPage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';

function App() {


  // Active link
  useEffect(() => {
    let sections = document.querySelectorAll(`section`);
    let navlink = document.querySelectorAll(`header nav a`);

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if (top >= offset && top < offset + height) {
          navlink.forEach(links => {
            links.classList.remove(`active`);
            document.querySelector(`header nav a[href *= ${id}]`).classList.add(`active`)
          })
        }
      });

      let header = document.querySelector(`header`)

      header.classList.toggle(`sticky`, window.onscroll > 100);
    }
  })

  useEffect(() => {
    AOS.init({

      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false,
    })
  })

  return (
    <Router>
      <Routes>
        <Route path="/Abdullah/" element={<LandingPage />} />
        <Route path="/Abdullah/Services/" element={<ServicesPage />} />
        <Route path="/Abdullah/Projects/" element={<ProjectsPage />} />
        <Route path="/Abdullah/About/" element={<AboutPage />} />
      </Routes>
    </Router >
  )
}

export default App
