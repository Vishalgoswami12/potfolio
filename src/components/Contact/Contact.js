import React from "react";
import { Link } from "react-router-dom";
import { SiGithub, SiTwitter, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section className="contact-container">
      <h2 className="text-center">Get In Touch!</h2>
      <div className="userInfo-container">
        <h3>Let's connect here</h3>
        <nav className="socialmediacontainer">
          <Link to={"https://github.com/Vishalgoswami12"}>
            <SiGithub />
          </Link>
          <Link to={"//twitter.com/VishalG62887007"}>
            <SiTwitter />
          </Link>
          <Link to={"https://www.linkedin.com/in/vishal-goswami-13271b244/"}>
            <SiLinkedin />
          </Link>
          <Link to={"//wa.me/+919616664860"}>
            <SiWhatsapp />
          </Link>
        </nav>
      </div>
      <div className="email-container flex-row">
        <div>
          <h4>
            Mail me :
            <Link to={"//mailto:vishalgoswami2250@gmail.com"}>
            vishalgoswami2250@gmail.com
            </Link>
          </h4>
        </div>
        <div>
          <h4>Call me : 9616664860</h4>
          <p className="text-center">
            <a href="./Vishal Resume.pdf" download="Vishal Goswami" className="resume-btn">
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}