import React from "react";

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
    const sectionName = resumeBasicInfo?.section_name.projects;

    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h2 className="section-title">
                    <span>{sectionName}</span>
                </h2>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto">
                        {resumeProjects && resumeProjects.map((project, index) => (
                            <article className="col-sm-12 col-md-6 col-lg-4" key={index}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer", textDecoration: "none" }}>
                                    <span className="portfolio-item d-block">
                                        <div className="foto">
                                            <div>
                                                <img src={project.images[0]} alt={project.title} height="230" />
                                                <span className="project-date">{project.startDate}</span>
                                                <br />
                                                <p className="project-title-settings mt-3">{project.title}</p>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
