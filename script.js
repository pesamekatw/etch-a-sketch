document.body.style.width = (window.screen.width) + 'px';

const reset = document.querySelector("#reset");
function userInput(){
    let answer = Number(prompt("Reset with squares:"));

    if(answer>=100){
    }
    return answer;
}

reset.addEventListener("click", () => (userInput()));

let n = Number(userInput());

const container = document.getElementById("container");


for(let i=0; i<n; i++){
    for(let j=0; j<n;j++){
        const div = document.createElement("div");
        div.classList.add('box');
        container.appendChild(div);
    }   
}

container.addEventListener('mouseover', e=>{
    const cls = e.target.classList;
    cls.add("change-color");
});
