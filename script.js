var displayMesssg = document.getElementById("msg");
function randFunc() {
    var array = [];
    while (array.length < 26) {
    var randomNum = Math.floor(Math.random() * 100) + 2;
    if (array.indexOf(randomNum) === -1) {
     array.push(randomNum);
    }
    }
    return array;
}
window.onload= function setBoard()
{
    var num=randFunc(); 
    diplayMsg("Start!🚦");
    for(var i=0;i<26;i++)
    {
    var iconid="bti"+num[i];
    if(i===1)
    {
        document.getElementById(iconid).className = "fa fa-home";
    }
    if(i>1 && i<=15)
    {
        document.getElementById(iconid).className   = "fa fa-bomb";
    }
    if(i>15)
    {
        document.getElementById(iconid).className = "fa fa-heart";
    }
    }
}
document.onkeyup = function(event) {
    
for(var i=1; i<=100; i++)
{
    var classname = document.getElementById("bti"+i).className;
    if(classname.includes("user"))
    {
        if(event.keyCode===39){
            if(i!=10 && i!=20 && i!=30 && i!=40 &&i!=50 && i!=60 && i!=70&&i!=80&&i!=90&&i!=100){
            move(i,i+1);
            i++;
        }
    }
        else if(event.keyCode===37)
        {
            if(i!=1 && i!=11 && i!=21 && i!=31 && i!=41 && i!=51&&i!=61&&i!=71&&i!=81&&i!=91){
            move(i,i-1);
            i--;
        }
    }
        else if(event.keyCode===40)
        {
            if(i!=91 && i!=92 && i!=93 && i!=94 && i!=95 &&i!=96&&i!=97&&i!=98&&i!=99&&i!=100){
                move(i,i+10);
                i+=10;
            }
        }
        else if(event.keyCode===38)
        {
            if(i!=1 && i!=2 && i!=3 && i!=4 && i!=5&&i!=6 && i!=7 && i!=8 && i!=9 && i!=10){
                move(i,i-10);
                i-=10;
            }
        }
        
    }
}
}

function move(l,r)
{
 document.getElementById("bti"+l).className = "fa fa-circle-o";
 if(document.getElementById("bti"+r).className.includes("bomb"))
 {
    diplayMsg("Watch Out That's our Enemy😖");
 }
 else if(document.getElementById("bti"+r).className.includes("heart"))
 {
    diplayMsg("Great! You Powered Up!😃");
 }
 else if(document.getElementById("bti"+r).className.includes("home"))
 {
    diplayMsg("Yay! You've Won!🥳️");
    setTimeout(function() {
        window.location.reload();
        }, 1000);
 }
 document.getElementById("bti"+r).className="fa fa-user-circle-o";
}
function diplayMsg(msg) {
    displayMesssg.innerHTML = msg;
    displayMesssg.style.display = "block";
    setTimeout(function() {
    displayMesssg.style.display = "none";
    }, 3000);
}
