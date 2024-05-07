import { Navbar } from '../components/Navbar'
import Home from '../sections/Home'
import About from '../sections/About'
import Services from '../sections/Services'
import Profile from '../sections/Profile'
import Contact from '../sections/Contact'


function LandingPage() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Profile />
            <Contact />
        </>
    )
}

export default LandingPage;