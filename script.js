const tabs = document.querySelectorAll(".tablink");
const projects = document.querySelectorAll(".projeto");

selectProject(projects, projects[0].children[1].children[0].innerText);

tabs.forEach((tab)=>{
    tab.addEventListener('click', (e)=>{
        
        displayProject(e.currentTarget)});
});

function displayProject(elmtn){
    selectProject(projects, elmtn.innerHTML);
}

function selectProject(array, name){
    array.forEach(project=>{
        project.style.display = 'none';                     
        if(project.children[1].children[0].innerText == name){
            project.style.display = 'flex';
        }
    })       
}