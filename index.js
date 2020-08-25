// Random Number Generator
var player1;
var player2;

player1=Math.floor(Math.random()*6)+1;
player2=Math.floor(Math.random()*6)+1;

// player1 Checker

switch(player1)
{
    case 1:
        document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
        break;
    
    case 2:
        document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
        break;
       
    case 3:
        document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
        break;
        
    case 4:
        document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
        break;

    case 5:
        document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
        break;
    
    case 6:
        document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
        break;

    default:
        break;
}

// Player 2 Checker


switch(player2)
{
    case 1:
        document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
        break;
    
    case 2:
        document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
        break;
       
    case 3:
        document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
        break;
        
    case 4:
        document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
        break;

    case 5:
        document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
        break;
    
    case 6:
        document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
        break;

    default:
        break;
}



//Winner Checker

if(player2>player1)
{
    document.querySelector("h1").innerHTML="Player 2 Win 🏁 ";
}
else if(player1>player2)
{
    document.querySelector("h1").innerHTML="🏁 Player 1 Win";
}
else if(player1===player2)
{
    document.querySelector("h1").innerHTML="Draw";
}







