import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Faculty from './pages/Faculty';
import Members from './pages/Members';
import Teams from './pages/Teams';
import Feedback from './pages/Feedback';
import BrainBuffPage from './pages/BrainBuffPage';
import SiteBackground from './components/SiteBackground';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-numerano-accent origin-left z-50"
          style={{ scaleX }}
        />

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home"><Home /></section>
                <section id="teams"><Teams /></section>
                <section id="activities"><Activities /></section>
                <section id="faculty"><Faculty /></section>
                <section id="members"><Members /></section>
                <section id="feedback"><Feedback /></section>
              </>
            } />
            <Route path="/brainbuff" element={<BrainBuffPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
