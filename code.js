const headline = document.querySelector("h1");
const container = document.querySelector(".qcontainer").children;
const leftBtn = document.querySelector("#이전");
const rightBtn = document.querySelector("#다음");
let index = 0;
let flex = 0;
let str = 0;
function clickRightBtn() {
    if (index + 1 < container.length) {
        index += 1;
        container[index - 1].classList.add("div");
        container[index].classList.remove("div");
        container[index].value 
    }
}
function clickLeftBtn() {
    if (index - 1 > -1) {
        index -= 1;
        container[index + 1].classList.add("div");
        container[index].classList.remove("div");
    }
}
function goHome() {
    location.href = "index.html";
}
rightBtn.addEventListener("click", clickRightBtn);
leftBtn.addEventListener("click", clickLeftBtn);
headline.addEventListener("click", goHome);
