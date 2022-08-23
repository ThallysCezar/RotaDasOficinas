import Navbar from "../../shared/components/NavBar/Navbar";
import { GiDeathStar } from "react-icons/gi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import image from "../../assets/bg.jpg";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <Navbar />
      <div className="container-fluid text-white text-center pt-5">
        <h3>Bem-vindo!</h3>
        <h5>
          Seja bem-vindo(a), esse é o meu projeto para o desafio de programação
          da Framework: Padawans!
        </h5>
        <div className="container-fluid text-center">
          <h3>Mas quem sou eu?</h3>
          <p>Para saber mais sobre mim, basta clicar aqui!</p>
          {/* Portfolio */}
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="thallyscezar.github.io"
            role="button"
            target="_blank"
          >
            <GiDeathStar />
          </Link>
        </div>
        <div>
          <div className="container footer__social">
            {/* GitHub */}
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="github.com/thallyscezar"
              role="button"
              target="_blank"
            >
              <FaGithub />
            </Link>

            {/* Facebook */}
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="facebook.com/thallyscezar"
              role="button"
              target="_blank"
            >
              <FaFacebook />
            </Link>

            {/* Instagram */}
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="instagram.com/thallyscezar"
              role="button"
              target="_blank"
            >
              <FaInstagram />
            </Link>

            {/* Linkedin */}
            <Link
              className="btn btn-outline-light btn-floating m-1"
              to="linkedin.com/in/thallyscezar"
              role="button"
              target="_blank"
            >
              <FaLinkedin />
            </Link>

            {/* Section: Text */}
            <section className="mb-4 mt-2">
              <p>Fiz esse site com React, com React-Icon e BootStrap</p>
            </section>
            {/* Section: Text */}
          </div>
          {/* Grid container */}
        </div>
      </div>
    </div>
  );
};

export default Home;
