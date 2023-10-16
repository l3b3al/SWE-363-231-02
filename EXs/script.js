let skills = [
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
]

function fillSkills(){
    document.getElementById("skillIconsCol").innerHTML = ""
    for(let skill of skills){
        let content = `
            <div class="skillCard">
                <div>
                    <img class="skillIcon" src="${skill.icon}" alt="">
                </div>
                <div><p>${skill.header}</p></div>
            </div>
        `
        document.getElementById("skillIconsCol").innerHTML += content
    }
}

fillSkills();