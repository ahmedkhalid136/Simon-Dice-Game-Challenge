// Random Number Generator
var player1;
var player2;

player1=Math.floor(Math.random()*6)+1;
player2=Math.floor(Math.random()*6)+1;

// Player1 Checker

if(player1===1)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}
else if(player1===2)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}
else if(player1===3)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}
else if(player1===4)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}
else if(player1===5)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}
else if(player1===6)
{
    document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
}


// Player 2 Checker


if(player2===1)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}
else if(player2===2)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}
else if(player2===3)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}
else if(player2===4)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}
else if(player2===5)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}
else if(player2===6)
{
    document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
}


//Winner Checker

if(player2>player1)
{
    document.querySelector("h1").innerHTML="Player 2 Win";
}
else if(player1>player2)
{
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(player1===player2)
{
    document.querySelector("h1").innerHTML="Draw";
}







