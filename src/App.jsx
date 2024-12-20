// react
import { useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
// i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
// cookies
import cookies from "js-cookie"
// page
import { Routes, Route } from "react-router-dom"
// aos
import AOS from 'aos';
// style
import './App.css'
import 'aos/dist/aos.css';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [  
          'htmlTag', 
          'cookie', 
          'localStorage', 
          'sessionStorage', 
          'navigator', 
          'path', 
          'subdomain'
        ],

        caches: ["cookie"]
    },

    backend: {
      loadPath : '/Abdullah/locale/{{lng}}/translation.json',
    },

});

function App() {

  const lng = cookies.get("i18next") 

  useEffect(() => {
    window.document.dir = i18n.dir()
  } , [lng])


  useEffect(() => {
    AOS.init({
      delay: 0, 
      duration: 1000, 
      easing: 'ease-out', 
      once: true,
    })
  })


  return (
    <Routes>
      <Route path="/Abdullah/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
