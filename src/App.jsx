import React from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = ({ userData }) => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero userData={userData} />
      <About userData={userData} />
      <Navbar userData={userData} />
      <Projects userData={userData} />
      {/* <Clients userData={userData} /> */}
      <WorkExperience userData={userData} />
      <Contact userData={userData} />
      <Footer userData={userData} />
    </main>
  );
};

export default App;
