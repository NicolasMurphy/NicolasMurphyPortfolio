import Django from "./Images/Skills/django-svgrepo-com.png"
import Python from "./Images/Skills/python-svgrepo-com.png"
import React from "./Images/Skills/react-javascript-js-framework-facebook-svgrepo-com.png"
import MongoDB from "./Images/Skills/mongo-svgrepo-com.png"
import Docker from "./Images/Skills/docker-svgrepo-com.png"
import Postgresql from "./Images/Skills/postgresql-svgrepo-com.png"
import HTML5 from "./Images/Skills/html-5-svgrepo-com.png"
import CSS3 from "./Images/Skills/css-3-svgrepo-com.png"
import FastAPI from "./Images/Skills/fastapi-1.svg"
import Javascript from "./Images/Skills/javascript-svgrepo-com.png"
import Bootstrap from "./Images/Skills/NicePng_css3-logo-png_1415492.png"
import TailwindCSS from "./Images/Skills/tailwindcss-icon-svgrepo-com.png"


const Skills = () => {

  let skillList = [
    {"name": "Django",
    "src": Django},
    {"name": "Python",
    "src": Python},
    {"name": "React",
    "src": React},
    {"name": "MongoDB",
    "src": MongoDB},
    {"name": "Docker",
    "src": Docker},
    {"name": "PostgreSQL",
    "src": Postgresql},
    {"name": "HTML5",
    "src": HTML5},
    {"name": "CSS3",
    "src": CSS3},
    {"name": "FastAPI",
    "src": FastAPI},
    {"name": "Javascript",
    "src": Javascript},
    {"name": "Bootstrap",
    "src": Bootstrap},
    {"name": "TailwindCSS",
    "src": TailwindCSS},
  ];

  return (
    <>
    <div className="fade-in-5 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl text-center md:mb-[2%] mt-[4%] mb-[8%]">
        Skills and tools I use
      </h1>
      <div className="flex justify-center">
        <div className="mx-8 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-8">
            {skillList?.map((skill) => (
              <div
                key={skill.name}
                className="bg-base-100 text-base-content border border-gray-300 dark:border-gray-700 rounded-full
                shadow p-4 text-center text-lg">
                <img className="mx-auto" width="60" src={skill.src} alt="">
                </img>
                {skill.name}
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
