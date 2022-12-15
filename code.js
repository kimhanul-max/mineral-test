const headline = document.querySelector("h1");
const container = document.querySelector(".qcontainer").children;
const inputBtns = document.querySelectorAll(".inputBtn");

let index = 0;  
let str = 0;
let flex = 0;
function clickInputBtn() {
    if (index + 1 < container.length) {
        index += 1;
        container[index - 1].classList.add("div");
        container[index].classList.remove("div");
        container[index].value 
    }else{
        goResult();
    }
}

function goResult() {
    
}

function goHome() {
    location.href = "index.html";
}

[].forEach.call(inputBtns ,function(col){ 
	col.addEventListener("click", clickInputBtn); 
}); 

headline.addEventListener("click", goHome);
