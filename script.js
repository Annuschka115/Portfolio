"use strict";
//nachfragen bei KI warum use strict
const grid = document.getElementById("project-grid");

 let mouseX = -200;
 let mouseY = -200;

 let currentX = -200;
 let currentY = -200;

 const delayFactor = 0.08; 

 document.addEventListener('mousemove', (e) => {

     mouseX = e.clientX;
     mouseY = e.clientY;

 });


 function animateLight() {

    
    currentX += (mouseX - currentX) * delayFactor;
    currentY += (mouseY - currentY) * delayFactor;

     document.documentElement.style.setProperty('--mouse-x', currentX + 'px');
     document.documentElement.style.setProperty('--mouse-y', currentY + 'px');

     requestAnimationFrame(animateLight);
 }

animateLight();

const rotation = (i) => ((i * 37) % 9 - 4) * 0.9;

function createProjectCard(project, index) {
    const card= document.createElement("button");
    card.type = "button";
    card.className ="polaroid";
    card.style.setProperty("--pink",`${rotation(index)}deg`);
    card.setAttribute("aria-label", `${project.title} Details und Vorschau öffnen`)

    const tape = document.createElement("span");
    tape.className = `tape tape--${project.tape || "purple"}`;
    card.appendChild(tape);

    const src = project.thumb || project.gif ;
    const img = document.createElement("img");
    img.className = "polaroid-img";
    img.alt = "";
    img.loading ="lazy" ;
    img.src = src;

    img.addEventListener("error", () => {
        const ph = document.createElement("div");
        ph.className = "polaroid-placeholder";
        ph.textContent = "Foto folgt";
        img.replaceWith(ph);
    });
    card.appendChild(img);

    const caption = document.createElement("span");
    caption.className = "polaroid-caption";
    caption.textContent = project.caption || project.title;
    card.appendChild(caption);

    card.addEventListener("click", () => openModal(project, card));
    return card;
}    

function renderProjects() {
  grid.replaceChildren(...PROJECTS.map(createProjectCard));
}




renderProjects();
document.getElementById("year").textContent = new Date().getFullYear();