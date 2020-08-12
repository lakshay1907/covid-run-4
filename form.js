// creating form for showing game stats and getting player name
class Form {
    // constructor for form class
    constructor() {
    // creating input for adding player name
    this.input = createInput("Name");
    // creating play button for starting game
    this.button = createButton('Play');
    // displaying game name
    this.title = createElement('h2');
    // creating greeting for displaying text
    this.greeting = createElement('h3');
    this.greeting1 = createElement('h3');
    this.greeting2= createElement('h3');
    this.greeting3= createElement('h3');
    this.greeting4= createElement('h3');
    this.greeting5= createElement('h3');
    this.greeting6= createElement('h3');
    this.greeting7= createElement('h3');

    }
    // hide function for hiding everything when game starts
    hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.greeting4.hide();
    this.greeting5.hide();
    this.greeting6.hide();
    this.greeting7.hide();

}
// display function of the form
    display(){
        // displaying game name
        console.log('display')
    this.title.html("Covid Run");
    // positioning game name
    this.title.position(370,0);
    // positioning player name button
    this.input.position(350,530);
    this.button.position(410,570);
    // displaying game stats
    this.greeting.html("This game is designed for spreading awarness against Covid-19 ");
    // positioning game stats
    this.greeting.position(180,80);
     // displaying game rule
    this.greeting1.html("Rules:");
    // positioning game rule
    this.greeting1.position(50,150);
     // displaying game rule
    this.greeting2.html('1. You will have three lives');
    // positioning game rule
    this.greeting2.position(50,200);
     // displaying game rule
    this.greeting3.html('2. You need minimum of 50 points to be aware about Covid-19');
    // positioning game rule
    this.greeting3.position(50,250);
     // displaying game rule
    this.greeting4.html('3. If you touch negative things then live will decrease');
    // positioning game rule
    this.greeting4.position(50,300);
     // displaying game rule
    this.greeting5.html('4. If you touch positive things then score will increase');
    // positioning game rule
    this.greeting5.position(50,350);
    this.greeting6.html('5. You can move the player right and left');
    this.greeting6.position(50,400);
    this.greeting7.html('6. Enter your name below to start the game');
    this.greeting7.position(50,450);

    this.button.mousePressed(()=>{
    this.hide();
   // player.name = this.input.value();
   gameState="play";
    

}
)
}
}
