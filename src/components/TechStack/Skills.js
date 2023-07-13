import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb, SiReact, } from "react-icons/si";
import Card from "../Card/Card";
import { skillText } from "../../utilis/constant";

// all  the skills  cards icons
const skills = [
  AiFillHtml5,
  FaCss3,
  TbBrandJavascript,
  FaNodeJs,
  SiMongodb,
  SiExpress,
  SiReact,

];

export default function Skills() {
  return (
    <section className="container">
      <h2 className="section-heading">Skills</h2>
      <div className="cards-container">
        {skills.map((eachIcon, index) => {
          return skillText.map((cardText, textIndex) => {
            if (index === textIndex) {
              return (
                <Card Icon={eachIcon} cardName={cardText} key={cardText} />
              );
            }
          });
        })}
      </div>
    </section>
  );
}