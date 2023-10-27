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

// Define a React component to render a skill card
const SkillCard = ({ skill }) => {
    return (
        <div className="skillCard">
            <div>
                <img className="skillIcon" src={skill.icon} alt="" />
            </div>
            <div>
                <p>{skill.header}</p>
            </div>
        </div>
    );
};

// Render the skills using React
const skillIconsCol = document.getElementById("skillIconsCol");
skills.forEach((skill, index) => {
    ReactDOM.render(<SkillCard skill={skill} />, skillIconsCol);
});
