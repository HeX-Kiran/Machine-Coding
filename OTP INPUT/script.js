let inputs  = document.querySelectorAll(".input");

inputs.forEach((input)=>{
    input.addEventListener("input",()=>{
        let value = Number(input.value);

        if(!isNaN(value)){
            goNext(input);
        }
        else{
            input.value =""
        }

    })

    input.addEventListener("keydown",(e)=>{
        let key = e.key;
            console.log(key)
            if(key == "Backspace" || key == "Delete"){
                goBack(input)
            }
    })
})




function goNext(element){
    ele = element.nextElementSibling;
    if(ele){
       ele.focus();
    } 
    
}

function goBack(element){
    element.value ="";
    ele = element.previousElementSibling;
    if(ele) ele.focus();
    

}