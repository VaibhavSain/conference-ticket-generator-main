const btn = document.querySelector("#btn");
const div1 = document.querySelector("#hide");
const div2 = document.querySelector("#hide2");
//name input fields
const name1 = document.querySelector("#name");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
//email input fields
const email1 = document.querySelector("#email1");
const email2 = document.querySelector("#email2");
//github input fields
const id1 = document.querySelector("#id1");
const id2 = document.querySelector("#id2");

btn.addEventListener("click",() => {
hideDiv();
change();
changeImage();
});

//this is hide function to hide and show the div elements
function hideDiv() {
    div1.style.display = "none";
div2.style.display = "block";
};

//to change the text in tags
function change() {
    name2.textContent = name1.value;
    name3.textContent = name1.value;
    email2.textContent = email1.value;
    id2.textContent = id1.value;
}
