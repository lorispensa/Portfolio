import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import js from "../assets/icons/js.png";
import code from "../assets/icons/code.png";
import link from "../assets/icons/link.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwindcss.png";
import java from "../assets/icons/java.png";
import php from "../assets/icons/php.png";

const projectsData = [
    {
        title: "Waves",
        description: "Réseau social.",
        url: "https://github.com/lorispensa/php.waves.social-media.app",
        githubUrl: "https://github.com/lorispensa/php.waves.social-media.app",
        imageSrc: "/assets/img/worldlearning.png",
        techno: [html, css, php, js]
    },
    {
        title: "Moteur de recherche",
        description: "Création d'un moteur de recherche dans le cadre d'un projet scolaire.",
        url: "https://github.com/lorispensa/java.search-engine.app",
        githubUrl: "https://github.com/lorispensa/java.search-engine.app",
        techno: [html, css, java]
    },
    {
        title: "Enquête écologique",
        description: "Site web proposant une enquête aux entreprises de Nice sur leurs pratiques écologiques - réalisé en collaboration.",
        url: "https://rayanoutili.github.io/site-ecologie/",
        githubUrl: "https://github.com/RayanOUTILI/site-ecologie",
        techno: [html, css]
    },
    {
        title: "Portfolio",
        description: "Mon Portfolio développé en ReactJS.",
        url: "https://loris-pensa.vercel.app/",
        githubUrl: "https://github.com/lorispensa/react-js.portfolio.app",
        techno: [html, css, js, react, tailwind]
    }
];


const Projects = () => {
    return (
        <section id="projets">
            {/* f9f9f9 */}
            <div className="projets-conteneur bg-[white]">
                <div className="padleft mt-20">
                    <h1 className="title-trait text-4xl font-bold text-left ml-14 mt-24 pt-4 mb-2">Projets</h1>
                    {projectsData.map((project, index) => (
                        //revealxINDEX pour alterner les anim revealx${index+1}
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (iframe) */}
                            <div className="gauche w-65% relative">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <iframe id="iframe" title={project.title} className="iframe w-[40vw] h-[40vh] m-[3%]" src={project.url} alt={project.title} />
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="techno flex justify-start gap-4 mt-4">
                                    {project.techno.map((techno, index) => (
                                        <img className="h-[38px] w-[38px]" src={techno} alt="techno" key={index} />
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link  flex items-center">
                                        <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                        Site
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
        </section>
    );
};

export default Projects;
