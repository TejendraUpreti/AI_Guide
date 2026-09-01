const theme=document.getElementById("theme");
if(localStorage.getItem("theme")==="light")document.body.classList.add("light");
if(theme)theme.onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");theme.textContent=document.body.classList.contains("light")?"☀":"☾"};