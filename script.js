var clickEncrypt = document.querySelector(".btn-encrypt");
var clickDecrypt = document.querySelector(".btn-decrypt");
var imgContainer = document.querySelector(".img-container");
var h3Container = document.querySelector(".h3-container");
var pContainer = document.querySelector(".p-container");
var resultEncrypt = document.querySelector(".result-encrypt");

clickEncrypt.onclick = showEncrypt;
clickDecrypt.onclick = showDecrypt;

function showEncrypt(){
    hiddenElement();
    resultEncrypt.textContent = encrypt(recoveryText()); 
}
function showDecrypt(){
    hiddenElement()
    resultEncrypt.textContent = decrypt(recoveryText());
}
function recoveryText(){
    var area = document.querySelector("#textarea");
    return area.value;
}
function hiddenElement(){
    imgContainer.classList.add("hidden");
    h3Container.classList.add("hidden");
    pContainer.classList.add("hidden");
}
function encrypt(message){
    var text =message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText= finalText + "ai";
        }
        else if(text[i] == "e"){
            finalText= finalText + "enter";
        }
        else if(text[i] == "i"){
            finalText= finalText + "imes";
        }
        else if(text[i] == "o"){
            finalText= finalText + "ober";
        }
        else if(text[i] == "u"){
            finalText= finalText + "ufat";
        }
        else{
            finalText= finalText + text[i]
        }
    }
    return finalText;
}
function decrypt(message){
    var text =message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText= finalText + "a";
            i = i + 1;
        }
        else if(text[i] == "e"){
            finalText= finalText + "e";
            i = i + 4;
        }
        else if(text[i] == "i"){
            finalText= finalText + "i";
            i = i + 3;
        }
        else if(text[i] == "o"){
            finalText= finalText + "o";
            i = i + 3;
        }
        else if(text[i] == "u"){
            finalText= finalText + "u";
            i = i + 3;
        }
        else{
            finalText= finalText + text[i]
        }
    }
    return finalText;
}
//Copy to clipBoard
document.querySelector(".btn-copy").addEventListener("click",()=>{
    copyToClipBoard(resultEncrypt);
})

function copyToClipBoard(elemnt){
    var inputHidden = document.createElement("input");
    inputHidden.setAttribute("value", elemnt.innerText);
    document.body.appendChild(inputHidden);
    inputHidden.select();
    document.execCommand("copy");
    inputHidden.classList.add("hidden");
    alert("Copiado!");
}
//Responsive tablet

var resultConainer = document.querySelector(".result-container");
var btncopy = document.querySelector(".btn-copy-container");
var mql = window.matchMedia("(max-width: 900px)");
var section2 = document.querySelector(".section2");

console.log(mql.matches);
if(mql.matches){
    resultConainer.classList.add("hidden");
    btncopy.classList.add("hidden");
}
if(mql.matches){
document.querySelector(".btn-encrypt").addEventListener("click",()=>{
    removeHidden();
})
}
function removeHidden(){
    resultConainer.classList.remove("hidden");
    btncopy.classList.remove("hidden");
    section2.classList.add("autoHeight");
}