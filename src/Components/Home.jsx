import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="line-1"></div>
      <div className="main-page">
        <h1 className="my-name">Rochak Neupane</h1>
        <h3 className="developer-posi"> Web Developer | Web Designer</h3>
        <p className="my-intro">Hello! I'm a dedicated Web Developer based in Kathmandu, Nepal. Specializing in website design and development, I'm committed to creating seamless online experiences. With a strong technical background, I bring innovation and precision to every project. Let's build something amazing together and elevate your online presence!.</p>
        <div className="photo">
          <img src='robots.png'></img>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/rochak.neupane.5?mibextid=opq0tG" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/rochak-neupane-986561283/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/99rochakLadddd" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/me_rochak/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className='button1'>
        <button type='button'>Contact me</button>
      </div>
    </>
  );
};

export default Home;
