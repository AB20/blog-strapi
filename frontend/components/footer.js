import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Footer = ({}) => {
  return (
    <footer className="section footer mt-5"> 
            <div className="container footer border-bottom text-center justify-content-center">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <p className="footer-desc">Modernize Applications. Reinvent Workflows.</p>
                        <p>Flexibility. Security.</p>
                        <p className="footer-desc pt-0"><strong>Less Work. More Time.</strong></p>
                    </div>
                    <div className="col-md-6 col-lg-4 custom-links mt-1">
                        <ul className="nav justify-content-center"> 
                            <li className=""><a href="https://www.linkedin.com/company/sireni-company/" target="_blank" className="nav-link mb-3 hvr-shadow-radial"><i className="fab fa-linkedin fa-lg center footerIcons"></i></a></li>
                            <li className=""><a href="https://twitter.com/_sireni" target="_blank" className="nav-link mb-3 hvr-shadow-radial"><i className="fab fa-twitter fa-lg center footerIcons"></i></a></li>
                            <li className=""><a href="https://www.instagram.com/sirenicloud/" target="_blank" className="nav-link mb-3 hvr-shadow-radial"><i className="fab fa-instagram fa-lg center footerIcons"></i></a></li>
                            <li className=""><a href="https://facebook.com/sirenicloud" target="_blank" className="nav-link mb-3 hvr-shadow-radial"><i className="fab fa-facebook fa-lg center footerIcons"></i></a></li>
                            <li className=""><a href="https://www.youtube.com/channel/UCugw7rH4CxyzLQx1j8eSJbw" target="_blank" className="nav-link mb-3 hvr-shadow-radial"><i className="fab fa-youtube fa-lg center footerIcons"></i></a></li>
                            <li className=""><a href="https://blog.sireni.com" className="nav-link mb-3 hvr-shadow-radial"><i className="fas fa-rss-square fa-lg center footerIcons"></i></a></li> 
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2 custom-links mt-1">
                        <ul className="list-unstyled company-sub-menu">
                            <li><a target="_blank" href="https://termify.io/privacy-policy/1634496807">Privacy Policy</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2 custom-links mt-1">
                        <h6 className="footer-heading">Contact</h6>
                        <ul className="list-unstyled company-sub-menu">
                            <li className=""><a href="mailto:info@sireni.com"><i className="far fa-envelope fa-lg footerIcons"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-alt text-center mt-1">
                <p className="" >2022 © Sireni, LLC. All Rights Reserved.</p>
         </div>
    </footer>
  );
};

export default Footer;