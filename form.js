class Form{
    constructor(){
        
    }



    display (){
   var title= createElement("h2");
   title.html("Car-racing game");
    title.position(130,0);
    var input= createInput("Name");
    var button= createButton("Start");
    input.position(130,160);
    button.position(250,200);
    button.mousePressed (function (){
        input.hide();
        button.hide();
    var Name= input.value();
    playerCount+=1
    player.updateName(Name)
    player.updateCount(playerCount);
    var greeting= createElement("h3");
    greeting.html("Hello "+ Name)
    greeting.position(130,160);
    }) 
    }
}

