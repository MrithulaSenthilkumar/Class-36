class Game {
    constructor(){
    }

    // three functions  
    // 1>  getState = we are going to ref the data from real time database created by us.
    // 2> update = we are going update ganestate  0, 1, 2
    
    // 3>  start function means how the gamestate 0 works

    //   0 = start    1= play     2= end 

 getState(){
     var gameStateRef= database.ref("gameState");
     gameStateRef.on("value", function(data){
         gameState= data.val();
     })
 }


 update(state){
   database.ref("/").update({
     gameState: state
   })
 }


 start(){
     if(gameState===0){
        player= new Player();
        player.getCount();
        form= new Form ();
        form.display();
     }
 }

}