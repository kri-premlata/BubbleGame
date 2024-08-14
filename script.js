var timer = 60;
var score = 0;
var hitrm = 0;

// Event Bubbling :- 
// jispe click krenge wo particular element pe event raise hoga, or event listener na milne par event 
// element k parent pe listener dhundhega, waha bhi na milne par event ke parent ke parent par listerner dhundhega 



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrm = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrm;
}

function makeBubble(){
    var clutter = "";

for(var i =1; i<=160; i++){
    var rndm = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rndm}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){ 
        if(timer > 0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }  
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    //alert("chal raha h");
    var clickednum = (Number(dets.target.textContent)); 
    if(clickednum === hitrm){
        increaseScore();   
        makeBubble();
        getNewHit();
     }
});

getNewHit();
runTimer();
makeBubble();
