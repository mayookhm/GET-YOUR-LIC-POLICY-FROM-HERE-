class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Procced');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
   // this.reset = createButton('Reset');
    this.input11 = createInput("").attribute("placeholder", "Phone no:");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("GET YOUR LIC POLICY FROM HERE ");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 180);
    this.input11.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input11.hide();
      player.name = this.input.value();
      player.phonem = this.input11.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      fill("red");
      this.greeting.html("THANK YOU " + player.name+" , OUR TEAM WILL CONTACT YOU WITHIN 24 HOURS AND FOR MORE INFORMATION VISIT https://licindia.in/")
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    // this.reset.mousePressed(()=>{
    //   player.updateCount(0);
    //   game.update(0);
    //   database.ref('players').remove();
    //   location.reload();
    // database.ref("/").update({
     
    //   finishedPlayers: 0
    // });});
  }
}
