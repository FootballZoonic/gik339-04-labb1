const checkbox = document.getElementById("divStyle");
const textfields = document.getElementsByClassName("textfield");
const button = document.querySelector("button");
const output = document.getElementById("output");

checkbox.addEventListener('change', (e) =>
output.style.backgroundColor = textfields[0].value);

button.addEventListener('click', (e) =>
output.remove());

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener('keyup', eventFunction);
}

function eventFunction(e){
    if(e.target.name === 'content') {
        document.getElementById("output").innerHTML = textfields[1].value;
    }
    console.log(e.target);
}