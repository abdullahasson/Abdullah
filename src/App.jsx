import { useEffect } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie"


import LandingPage from './Pages/LandingPage';
// import ServicesPage from './Pages/ServicesPage';
// import ProjectsPage from './Pages/ProjectsPage';
// import AboutPage from './Pages/AboutPage';
import { Routes, Route } from "react-router-dom"
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    backend: {
      loadPath : '/Abdullah/public/locale/{{lng}}/translation.json',
    },
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

});

function App() {

  const { t } = useTranslation()
  const lng = cookies.get("i18next") || "en"


  useEffect(() => {
    AOS.init({

      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false,
    })
  })

  useEffect(() => {
    window.document.dir = i18n.dir()
  } , [lng])

  return (
    <Routes>
      <Route path="/Abdullah/" element={<LandingPage />} />
      {/* <Route path="/Abdullah/Services/" element={<ServicesPage />} />
      <Route path="/Abdullah/Projects/" element={<ProjectsPage />} />
      <Route path="/Abdullah/About/" element={<AboutPage />} /> */}
    </Routes>
  )
}

export default App
