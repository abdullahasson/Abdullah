// components
import Header from '../components/Header'
// sections
import Home from '../sections/Home'
import Expertise from '../sections/Expertise'
import Projects from '../sections/Projects'
// import Reviews from '../sections/Reviews'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'


function LandingPage() {
    return (
        <>
            <Header />
            <Home />
            <hr />
            <Expertise />
            <hr />
            <Projects />
            <hr />
            {/* <Reviews />
            <hr /> */}
            <Contact /> 
            <hr />
            <Footer />
        </>
    )
}

export default LandingPage;