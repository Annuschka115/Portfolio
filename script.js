"use strict";
//nachfragen bei KI warum use strict

 let mouseX = -200;
 let mouseY = -200;

 let currentX = -200;
 let currentY = -200;

 const delayFactor = 0.08; 

 document.addEventListener('mousemove', (e) => {

     mouseX = e.clientX;
     mouseY = e.clientY;

 });

 const PROJECTS = [
    {
        title: "project 1",
        year: "2024",
        caption: "Title of Project",
        thumb: "anne_profile.webp",
        gif: "maxwell_GIF.gif",
        description:
        "Sehr wichtige Details",
        tags: ["HTML"],
    }
 ]

 function animateLight() {

    
    currentX += (mouseX - currentX) * delayFactor;
    currentY += (mouseY - currentY) * delayFactor;

     document.documentElement.style.setProperty('--mouse-x', currentX + 'px');
     document.documentElement.style.setProperty('--mouse-y', currentY + 'px');

     requestAnimationFrame(animateLight);
 }

animateLight();

