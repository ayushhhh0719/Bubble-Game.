var timer=60;
var score =0;
let hitcount=0;
function getnewhit()
{
    hitcount = Math.floor((Math.random()*10));
    document.querySelector("#hitval").textContent = hitcount;
}

function incresethesccore() {
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function makebuble()
{
    let ball ="";

    for(let i=1;i<=75;i++)
    {
        let ab =Math.floor((Math.random()*10));
        ball += `<div class="buble">${ab}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = ball;
}

function runTimer()
{
    let timerint=setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timers").textContent=timer
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML=`<h2>Game Over</h2>`;
        }
    },1000)
}
 
document.querySelector(".pbtm").addEventListener("click",function(det){
    let checknumber=Number(det.target.textContent);
    if(hitcount==checknumber)
    {
        incresethesccore();
        makebuble();
        getnewhit();
    }
});

makebuble();
runTimer();
getnewhit();



