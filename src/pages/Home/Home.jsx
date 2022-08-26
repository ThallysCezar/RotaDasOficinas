
import { GiDesk } from "react-icons/gi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from './../../shared/components/navbar/Navbar';


const Home = () => {

  const styleCenter = {
    position:" relative",
    left: "0px",
    top: "117px",
    transition: "none 0s ease 0s"
  }

  const styleNavBar = {
    position: "relative",
    left: "611px",
    top: "27px",
    transition: "none 0s ease 0s"
  }

  return (
    <div>
      <div style={styleNavBar} className="justify-content-center">
        <Navbar/>
      </div>
      <div style={styleCenter} className="container-fluid text-white text-center pt-5 align-items-center">
        <h1>Bem-vindo!</h1>
        <h5>
          Seja bem-vindo(a), esse é o meu projeto para o teste de programação 👨🏽‍💻👨🏽‍💻
        </h5>
        <div className="container-fluid text-center mt-5">
          <h3>Mas, quem sou eu?</h3>
          {/* Portfolio */}
          <Link
            className="btn btn-outline-light btn-floating m-1"
            to="thallyscezar.github.io"
            role="button"
            target="_blank"
          >
            <GiDesk />
          </Link>
          <p>Clique acima para ver meu portfólio</p>
        </div>
        <br/>
        <p>E aqui, minhas redes sociais, para mais informações</p>
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
              to={{pathname: "linkedin.com/in/thallyscezar"}}
              exact
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              target="_blank"
            >
              <FaLinkedin />
            </Link >

            {/* Section: Text */}
            <section className="mb-4 mt-2">
              <p>Fiz esse projeto usando as seguintes tecnologias: React, React-Icon e BootStrap</p>
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
