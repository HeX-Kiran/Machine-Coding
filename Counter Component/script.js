let input = document.querySelector("input");

let add = document.querySelector(".add");
let substract = document.querySelector(".subtract");
let reset = document.querySelector(".reset");
let number = document.querySelector("span");

add.addEventListener("click",()=>{
    let val = Number(input.value);
    let num = Number(number.textContent);
    let ans = val+num;

    document.querySelector("#number").innerHTML = `${ans}`
    
})


substract.addEventListener("click",()=>{
    let val = Number(input.value);
    let num = Number(number.textContent);
    let ans = num-val;
    document.querySelector("#number").innerHTML = `${ans}`
    
})

reset.addEventListener("click",()=>{
    document.querySelector("#number").innerHTML = "0"
})
