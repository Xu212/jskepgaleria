var kepek = ["kepek/DSC7025.jpg", "kepek/DSC7365.jpg", "kepek/DSC7371_1.jpg", "kepek/DSC7444.jpg", "kepek/DSC7515.jpg"];
window.addEventListener("load", init);
var i = 0;
function init(){
    document.getElementById("bal").addEventListener("click", balkep);
    document.getElementById("jobb").addEventListener("click", jobbkep);
    document.getElementById("uj").addEventListener("click", randomkep);
    txt="";
    for (let index = 0; index < kepek.length; index++) {
        txt +="<img src='"+kepek[index]+"' alt''>"
    }
    document.getElementById("osszes").innerHTML=txt;    
}

function balkep(){
    --i;
    if(i === -1){
        i=kepek.length-1
    }
    document.getElementById("nagykep").src=kepek[i];
}
function jobbkep(){
    ++i;
    if(i>kepek.length){
        i=0
    }
    document.getElementById("nagykep").src=kepek[i];
}

function randomkep(){
    var rnd = Math.floor(Math.random()*kepek.length)
    document.getElementById("nagykep").src=kepek[rnd];
}