import React from "react";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  let { image, title, description,  links } = props;
  return (
    <article className="project-card">
      <figure>
        <img src={`/images/${image}`} alt="project" />
      </figure>
      <h3 className="card-heading">{title}</h3>
      <p>{description}</p>
      <div className="button-container">
        <ul>
          <li>
            <Link to={links[0]} target="_blank">
            </Link>
          </li>
          <li>
            <Link to={links[1]} target="_blank">

            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;