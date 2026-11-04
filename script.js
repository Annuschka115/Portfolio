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
    card.style.setProperty("--rot",`${rotation(index)}deg`);
    card.setAttribute("aria-label", `${project.title} Details und Vorschau öffnen`)

    const tape = document.createElement("span");
    tape.className = `tape tape--${project.tape || "pink"}`;
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


// function openModal(project, trigger) {
//     lastTrigger = trigger;

//     modalYear.textContent = project.year || "";
//     modalTitle.textContent = project.title;
//     modalDesc.textContent = project.description || "";

//     modalTags.replaceChildren(
//         ...(project.tags || []).map((tag) => {
//         const li = document.createElement("li");
//         li.textContent = tag;
//         return li;
//     })
//     );

//     if (project.link) {
//         modalLink.href = project.link;
//         modalLink.hidden = false;
//     } else {
//             modalLink.hidden = true;
//         }

  
//     modalPlaceholder.hidden = true;
//     modalGif.hidden = false;
//     modalGif.alt = `Vorschau von ${project.title}`;
//     modalPlaceholderPath.textContent = project.gif;
//     modalGif.onerror = () => {
//         modalGif.hidden = true;
//         modalPlaceholder.hidden = false;
//     };
//     modalGif.src = project.gif;

//     modal.showModal();
// }

// function closeModal() {
//   modal.close();
// }

// modal.addEventListener("close", () => {
//   /* GIF entladen, damit es im Hintergrund nicht weiterläuft */
//   modalGif.removeAttribute("src");
//   if (lastTrigger) lastTrigger.focus();
// });

// modalClose.addEventListener("click", closeModal);




renderProjects();
document.getElementById("year").textContent = new Date().getFullYear();