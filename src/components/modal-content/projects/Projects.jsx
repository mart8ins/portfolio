import React, { useContext, useEffect, useRef, useState } from "react";
import "./projects.css";
import { AppContext } from "../../../context/AppContext";
import { projectsIntro, projects } from "../../../content-text/projects";

const Projects = () => {
    const { eng } = useContext(AppContext);
    const projectsRef = useRef();
    const navRef = useRef();
    const [activeNavBtn, setActiveNavBtn] = useState("");

    const handleScroll = () => {
        projectsRef.current.childNodes.forEach((el) => {
            const element = el.getBoundingClientRect();
            const elementPart = element.height / 2 + 150;
            const elementTopFromTop = element.top;
            if (elementPart >= elementTopFromTop) {
                if (elementTopFromTop < elementPart) {
                    setActiveNavBtn(el.id);
                }
                el.children[0].classList.add("element__scrolled");
            }
            if (element.height <= element.top) {
                el.children[0].classList.remove("element__scrolled");
            }
            if (element.bottom <= 0) {
                el.children[0].classList.remove("element__scrolled");
            }
        });
    };

    useEffect(() => {
        if (navRef.current) {
            navRef.current.childNodes.forEach((nav) => {
                const navId = nav.id.slice(1);
                if (navId && navId === activeNavBtn) {
                    nav.classList.add("activeNavBtn");
                } else {
                    nav.classList.remove("activeNavBtn");
                }
            });
        }
    }, [activeNavBtn]);

    useEffect(() => {
        if (projectsRef.current) {
            projectsRef.current.parentNode.addEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="projects__container" ref={projectsRef}>
            <div className="project__nav" ref={navRef}>
                <h3>{eng ? "All projects" : "Visi projekti"}</h3>
                {projects.map((project) => {
                    return (
                        <a className={`navBtn`} key={`#${project.id}`} id={`#${project.id}`} href={`#${project.id}`}>
                            {eng ? project.title.eng : project.title.lv}
                        </a>
                    );
                })}
            </div>
            <div className="scroll__container">
                <div className={`scroll-element element__scrolled projects__intro`}>
                    <h1>{eng ? projectsIntro.eng.title : projectsIntro.lv.title}</h1>
                    <p>{eng ? projectsIntro.eng.intro : projectsIntro.lv.intro}</p>
                </div>
            </div>

            {projects.map((project) => {
                return (
                    <div id={`${project.id}`} key={`${project.id}`} className="scroll__container">
                        <div className={`scroll-element element__hidden project__data`}>
                            <h1>{eng ? project.title.eng : project.title.lv}</h1>
                            <p>{eng ? project.about.eng : project.about.lv}</p>

                            <div className="tech__stack">
                                {project.technologies.map((tech, i) => {
                                    return (
                                        <div key={i} className="tech__item">
                                            {tech}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="see__project">
                                <h3>{eng ? project.see.title.eng : project.see.title.lv}</h3>
                                <div className="see__links">
                                    {project.id !== "mealz" && (
                                        <a href={project.see.links.web} target="_blank">
                                            WEB
                                        </a>
                                    )}
                                    <a href={project.see.links.github} target="_blank">
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
