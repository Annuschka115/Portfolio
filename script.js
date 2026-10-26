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

 function animateLight() {
     currentX += (mouseX - currentX) * delayFactor;
     currentY += (mouseY - currentY) * delayFactor;

     document.documentElement.style.setProperty('--mouse-x', currentX + 'px');
     document.documentElement.style.setProperty('--mouse-y', currentY + 'px');

     requestAnimationFrame(animateLight);
 }

animateLight();

