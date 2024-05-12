function openForm() {
        document.getElementById("form").classList.toggle("form-show");
        document.getElementById("form-bg").style.display = "block";  
        document.getElementById("button2").style.display = "none"; 
        document.getElementById("button3").style.display = "none";      
        document.getElementById("titleText").style.display="none";
        }
function closeForm() {
        document.getElementById("form").classList.toggle("form-show");
        document.getElementById("form-bg").style.display = "none";
        document.getElementById("button2").style.display = "block"; 
        document.getElementById("button3").style.display = "block";  
        document.getElementById("titleText").style.display="block";
}

function openForm2() {
        document.getElementById("form2").classList.toggle("form-show2");
        document.getElementById("form-bg2").style.display = "block";
        document.getElementById("button").style.display = "none"; 
        document.getElementById("button3").style.display = "none";  
        document.getElementById("titleText").style.display="none";
}
function closeForm2() {
        document.getElementById("form2").classList.toggle("form-show2");
        document.getElementById("form-bg2").style.display = "none";
        document.getElementById("button").style.display = "block"; 
        document.getElementById("button3").style.display = "block"; 
        document.getElementById("titleText").style.display="block";    
}

function openForm3() {
        document.getElementById("form3").classList.toggle("form-show3");
        document.getElementById("form-bg3").style.display = "block";
        document.getElementById("button").style.display = "none"; 
        document.getElementById("button2").style.display = "none";  
        document.getElementById("titleText").style.display="none";
}
function closeForm3() {
        document.getElementById("form3").classList.toggle("form-show3");
        document.getElementById("form-bg3").style.display = "none";
        document.getElementById("button").style.display = "block"; 
        document.getElementById("button2").style.display = "block";  
        document.getElementById("titleText").style.display="block";  
}

var sozluDonemSound = new Audio("sounds/sozluDonem.mp3");
sozuluDonemCounter = 0;
function sozuluDonemPlay(){
        if(sozuluDonemCounter == 0){
                sozluDonemSound.play();
                sozuluDonemCounter += 1;}
        else{
                sozluDonemSound.pause();
                sozuluDonemCounter = 0;}
}

var yaziliDonemSound = new Audio("sounds/yaziliDonem.mp3");
yaziliDonemCounter = 0;
function yaziliDonemPlay(){
        if(yaziliDonemCounter == 0){
                yaziliDonemSound.play();
                yaziliDonemCounter += 1;}
        else{
                yaziliDonemSound.pause();
                yaziliDonemCounter = 0;}
}

var halkEdebiyatDonemSound = new Audio("sounds/halkEdebiyati.mp3");
halkDonemCounter = 0;
function halkDonemPlay(){
        if(halkDonemCounter == 0){
                halkEdebiyatDonemSound.play();
                halkDonemCounter += 1;}
        else{
                halkEdebiyatDonemSound.pause();
                halkDonemCounter = 0;}
}

var divanEdebiyatDonemSound = new Audio("sounds/divanEdebiyat.mp3");
divanDonemCounter = 0;
function divanDonemPlay(){
        if(divanDonemCounter == 0){
                divanEdebiyatDonemSound.play();
                divanDonemCounter += 1;}
        else{
                divanEdebiyatDonemSound.pause();
                divanDonemCounter = 0;}
}

var tanzimatDonemSound = new Audio("sounds/tanzimatDonem.mp3");
tanzimatDonemCounter = 0;
function tanzimartDonemPlay(){
        if(tanzimatDonemCounter == 0){
                tanzimatDonemSound.play();
                tanzimatDonemCounter += 1;}
        else{
                tanzimatDonemSound.pause();
                tanzimatDonemCounter = 0;}
}

var sifSound = new Audio("sounds/ServetIFununDonem.mp3");
sifCounter = 0;
function sifDonemPlay(){
        if(sifCounter == 0){
                sifSound.play();
                sifCounter += 1;}
        else{
                sifSound.pause();
                sifCounter = 0;}
}



var fecraiDonemSound = new Audio("sounds/FecrIAtiDonemi.mp3");
fecraiDonemCounter = 0;
function fecraiDonemPlay(){
        if(fecraiDonemCounter == 0){
                fecraiDonemSound.play();
                fecraiDonemCounter += 1;}
        else{
                fecraiDonemSound.pause();
                fecraiDonemCounter = 0;}
}

var milliDonemSound = new Audio("sounds/MilliDonem.mp3");
milliDonemCounter = 0;
function milliDonemPlay(){
        if(milliDonemCounter == 0){
                milliDonemSound.play();
                milliDonemCounter += 1;}
        else{
                milliDonemSound.pause();
                milliDonemCounter = 0;}
}

var cumhuriyetDonemSound = new Audio("sounds/Cumhuriyet_Donemi.mp3");
cumhuriyetDonemCounter = 0;
function cumhuriyetDonemPlay(){
        if(cumhuriyetDonemCounter == 0){
                cumhuriyetDonemSound.play();
                cumhuriyetDonemCounter += 1;}
        else{
                cumhuriyetDonemSound.pause();
                cumhuriyetDonemCounter = 0;}
}

function searchDonem(donemAdi){
       // url ='http://www.google.com/search?q=' + donemAdi;
        url = "https://tr.wikipedia.org/wiki/"+donemAdi;
        window.open(url,'_blank');
      }