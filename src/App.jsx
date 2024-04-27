import { useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';
import ServicesRequest from './components/ServicesRequest';

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
        // document.querySelector(`header nav a[href *= ${id}]`).classList.add(`active`)


        // window.sessionStorage.setItem("top")

        console.log(top, offset, height, id)

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
        <Route path="/Abdullah/Services-request/" element={<ServicesRequest />} />
      </Routes>
    </Router >
  )
}

export default App
