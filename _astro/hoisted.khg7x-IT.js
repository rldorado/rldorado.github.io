import"./hoisted.Dchv0_cv.js";const l=document.getElementById("filter-menu-button"),e=document.getElementById("filter-menu"),o=document.querySelectorAll(".filter-option"),d=document.querySelectorAll(".project-card");l.addEventListener("click",()=>{e.classList.toggle("hidden")});o.forEach(t=>{t.addEventListener("click",c=>{c.preventDefault();const i=t.getAttribute("data-filter");l.textContent=t.textContent,e.classList.add("hidden"),d.forEach(n=>{const s=n.getAttribute("data-technologies").split(",");i==="all"||s.includes(i)?n.style.display="block":n.style.display="none"})})});document.addEventListener("click",t=>{!l.contains(t.target)&&!e.contains(t.target)&&e.classList.add("hidden")});