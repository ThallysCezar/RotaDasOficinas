import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiDeathStar } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            {/* Footer */}
            <footer className="bg-dark text-center text-white container-fluid">
                {/* Grid container */}
                <div className="container p-4">
                    {/* GitHub */}
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button">
                    <FaGithub/>
                    </Link>

                    {/* Facebook */}
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button">
                        <FaFacebook/>
                    </Link>

                    {/* Instagram */}
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button">
                        <FaInstagram/>
                    </Link>

                    {/* Linkedin */}
                    <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button">    
                        <FaLinkedin/>
                    </Link>


                    {/* Section: Text */}
                    <section className="mb-4 mt-2">
                    <p>
                        Fiz esse site com React, com React-Icon e BootStrap
                    </p>
                    </section>
                    {/* Section: Text */}

                    {/* Portfolio */}
                    <p>E para saber mais sobre mim, basta acessar meu portfolio:</p>
                    <Link className="btn btn-outline-light btn-floating m-1" to="thallyscezar.github.io" role="button">
                    <GiDeathStar/>
                    </Link>
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3">
                    © 2020 Copyright: Feito por Thallys
                </div>
                {/* Copyright */}
                </footer>
            {/* Footer */}
        </>
    );

}

export default Footer;