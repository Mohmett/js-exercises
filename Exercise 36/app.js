
const colorPick = document.querySelector("#colorPick");
const colorList = document.querySelector("#colorList");
const colorPreview = document.querySelector("#colorPreview");
const preview = document.querySelector("#preview");

const clearHistory = document.querySelector("#clearHistory");

colorPick.addEventListener('input', function () {
    
    colorPreview.style.backgroundColor = colorPick.value;

    preview.textContent=`You Chose: ${colorPick.value}`;
    colorList.innerHTML+=`<li style="color:${colorPick.value};"> You chose: ${colorPick.value} </li>`

})

clearHistory.addEventListener("click",function(event){
    event.preventDefault();
    colorList.innerHTML="";
})
