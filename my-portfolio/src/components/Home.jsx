import React, { useEffect, useRef } from 'react';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Rohit Kumar",
        "I'm a Mern Stack Developer",
        "Proficient in C++",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a href="/pdf/Rohit_Kumar_Resume.pdf" download="Rohit Kumar_Resume.pdf" className="btn btn-outline-warning my-3">
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
