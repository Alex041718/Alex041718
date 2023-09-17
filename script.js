fetch("./data/Projects.json")
    .then((response) => response.json())
    .then((json) => {
        
        console.log(json);
        json.forEach(project => {
            console.log(project);
            let projectDiv = document.createElement("div");
            projectDiv.classList.add("Projet");

            //left side

            let left = document.createElement("div");
            left.classList.add("left");
            projectDiv.appendChild(left);
            
            let projectTitle = document.createElement("h2");
            projectTitle.innerText = project.title;
            left.appendChild(projectTitle);

            let projectListTechno = document.createElement("ul");
            project.tech.forEach(tech => {
                let projectTechno = document.createElement("li");
                projectTechno.innerText = tech;
                projectListTechno.appendChild(projectTechno);
            });
            left.appendChild(projectListTechno);

            let projectLinkGitHub = document.createElement("a");
            projectLinkGitHub.href = project.github;
            let githubImage = document.createElement("img");
            githubImage.src = "assets/GithubLink.svg";
            projectLinkGitHub.appendChild(githubImage);
            left.appendChild(projectLinkGitHub);

            let projectDescription = document.createElement("p");
            projectDescription.classList.add("description");
            projectDescription.innerText = project.description;
            left.appendChild(projectDescription);
            //right side
            let right = document.createElement("div");
            right.classList.add("right");
            projectDiv.appendChild(right);

            let projectImage = document.createElement("img");
            projectImage.src = "./assets/projectPictures/" + project.image;
            projectImage.alt = project.title;
            projectImage.classList.add("image");
            right.appendChild(projectImage);

            let skills = document.createElement("div");
            skills.classList.add("skills");
            // pas fini
            right.appendChild(skills);

            projectDiv.appendChild(right);

            document.querySelector(".projetContainer").appendChild(projectDiv);
        });
    
     
    
    
    
    
    
    
    
    
    }
);