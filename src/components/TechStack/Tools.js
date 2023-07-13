import React from "react";
import {
  SiGit,
  SiGithub,
  SiNpm,
  SiVisualstudiocode,
  SiMongodb,
  SiNetlify
} from "react-icons/si";
import Card from "../Card/Card";

const icons = [
  SiGit,
  SiGithub,
  SiNpm,
  SiVisualstudiocode,
  SiMongodb,
  SiNetlify
];
const iconsText = [
  "Git",
  "Github",
  "NPM",
  "Visualstudiocode",
  "MongoDBAtlas",
  "Netlify",
  "Heroku",
  "Vercel",
];
export default function Tools() {
  return (
    <section className="container">
      <h2 className="section-heading">Tools</h2>
      <div className="cards-container">
        {icons.map((eachIcon, index) => {
          return iconsText.map((cardText, textIndex) => {
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