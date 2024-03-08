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

var milliSound = Audio("sound/fac.mp3")
function milliPlay(){
        milliPlay.play();
}
