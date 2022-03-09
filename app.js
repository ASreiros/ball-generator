function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setTimeout(generator,0)

const box = document.querySelector(".ball-box");
let boxtext = box.innerHTML 
let balls = [];
const bbe = document.querySelector("#bb-enter");
const bbd = document.querySelector("#bb-delete");

bbe.addEventListener("click", () => {
if((Number.isInteger(+document.querySelector("#nr").value))&& (document.querySelector("#nr").value.length<=3)&&(document.querySelector("#nr").value.length>0)){
balls = JSON.parse(localStorage.getItem("Lentyna1"))    
const obj = {};
obj.number = document.querySelector("#nr").value;
obj.color = document.querySelector("#clr").value;
balls.push(obj)
localStorage.setItem("Lentyna1", JSON.stringify(balls))
document.querySelector("#info").innerHTML = "Ball generated"
generator()
} else{
    document.querySelector("#info").innerHTML = "You have to enter a number, no more then 3 digits. No float numbers"    
}
})

bbd.addEventListener("click", () => {
    balls = JSON.parse(localStorage.getItem("Lentyna1"))
    balls.pop();
    document.querySelector("#info").innerHTML = "Ball deleted"
    localStorage.setItem("Lentyna1", JSON.stringify(balls))
    generator()
})



function generator () {
    boxtext = "";
    balls = JSON.parse(localStorage.getItem("Lentyna1"))
    balls.forEach(a => {
        boxtext = boxtext + `<div class="ball" style="background-color:${a.color}">${a.number}</div>` 
    })
    box.innerHTML = boxtext
    
}

