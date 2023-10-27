const skills = [
    {
        "icon": "assets/git.png",
        "header": "Git"
    },
    {
        "icon": "assets/figma.png",
        "header": "Figma"
    },
    {
        "icon": "assets/java.png",
        "header": "Java"
    }
];

const SkillCard = ({ skill }) => {
    return (
        <div className="skillCard">
            <div>
                <img className="skillIcon" src={skill.icon} alt="" />
            </div>
            <div><p>{skill.header}</p></div>
        </div>
    );
};

const Skills = ({ skills }) => {
    return (
        <div>
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
    );
};

ReactDOM.render(<Skills skills={skills} />, document.getElementById('skillIconsCol'));
