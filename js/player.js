class Player{
    constructor(){

    }
    // 1. getcount 2. upadateCount    3. updateName


    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount= data.val();
        })
    }
  
    updateCount(count){
        database.ref("/").update({
            playerCount:count,
        })
    }

    updateName(name){
        var playerIndex= "player" + playerCount;
        database.ref(playerIndex).set({
            Name:name
        })
    }





}
