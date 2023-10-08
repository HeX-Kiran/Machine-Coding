let container = document.querySelector(".container");

let icons = document.querySelectorAll(".icon");
let activeIcons = document.querySelectorAll(".icon-active");
let starCount = document.querySelector(".count");



console.log(activeIcons);

container.addEventListener("click",(e)=>{
    
    icons.forEach((icon,index)=>{
        // console.log(icon.getAttribute("code") , e.target.getAttribute("code"))
        console.log(index)
        console.log(activeIcons[index]);
        activeIcons[index].style.display = "block"
        icon.style.display = "none";
        if(icon.getAttribute("code") == e.target.getAttribute("code")){
            
            starCount.textContent = index+1;
            
        }
        if(icon.getAttribute("code") >e.target.getAttribute("code")){
            activeIcons[index].style.display = "none";
            icon.style.display = "block";
            
        }
        
    })
})