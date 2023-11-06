import React from "react";

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
    const sectionName = resumeBasicInfo?.section_name.skills;

    const skillsElements = sharedSkills?.icons.map((skill, i) => (
        <li className="list-inline-item mx-3" key={i}>
            <span>
                <div className="text-center skills-tile">
                    <i className={skill.class} style={{ fontSize: "220%" }} aria-hidden="true"></i>
                    <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                        {skill.name}
                    </p>
                </div>
            </span>
        </li>
    ));

    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h2 className="section-title">
                        <span className="text-white">{sectionName}</span>
                    </h2>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{skillsElements}</ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
