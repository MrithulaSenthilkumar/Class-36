class Form{
    constructor(){

    }


display(){
   var title= createElement("h2");
   title.html ("Car Racing Game");

   var input= createInput("Name");
   var button= createButton(" Click Me")

   input.position(130,160);
   button.position(250,200);

button.mousePressed(function(){
    input.hide();
    button.hide();

    var name= input.value();
 
    player.updateName(name);
    player.updateCount(playerCount);
    playerCount+=1;

    var greeting= createElement("h3");
    greeting.html("Hello welcome to car Racing Game     " + name)
    greeting.position(130,160);
})
    }
}