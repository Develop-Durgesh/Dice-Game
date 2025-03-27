function getdice(){
    num = Math.floor(Math.random() * 6) + 1;
    return "images/dice"+num+".png";
}

document.getElementById("btn").onclick = function() {
    ip1 = getdice();
    ip2 = getdice();
    if (ip1>ip2)
        document.getElementById("winner").innerHTML = "Player 1 Wins❤️" ;
    else if (ip2>ip1)
        document.getElementById("winner").innerHTML = "Player 2 Wins❤️"
    else
        document.getElementById("winner").innerHTML = "No Player Wins❌" ;

    document.getElementById("dice1").setAttribute("src",ip1) ;
    document.getElementById("dice2").setAttribute("src",ip2) ;
}
