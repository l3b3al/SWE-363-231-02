const skills = [
    {
        "icon" : "assets/git.png",
        "header" : "Git"
    },
    {
        "icon" : "assets/figma.png",
        "header" : "Figma"
    },
    {
        "icon" : "assets/java.png",
        "header" : "Java"
    }
];

const fillSkills = () => {
    const skillIconsCol = document.getElementById("skillIconsCol");
    skillIconsCol.innerHTML = "";

    const content = skills.map(skill => `
        <div class="skillCard">
            <div>
                <img class="skillIcon" src="${skill.icon}" alt="">
            </div>
            <div><p>${skill.header}</p></div>
        </div>
    `).join('');

    skillIconsCol.innerHTML = content;
};

fillSkills();