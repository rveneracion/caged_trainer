$(document).ready(function(){

    newCombo();
    $("#b_tryagain").click(function(){
        newCombo();

    });
    

});

var newCombo = function(){
    newKey();
    newShape();
    newSong();
}

var randomChoice = function(mylist){
    var choice = Math.floor(Math.random() * mylist.length)
    return mylist[choice]
}

var newKey = function(){
    let sharp = '<sup class="accidental">&#x266f</sup>';
    let flat = '<sup class="accidental">&#x266d</sup>';
    let keys = 'C:G:D:A:E:B:F+:D-:A-:E-:B-:F'.replace(/-/g, flat).replace(/\+/g, sharp).split(':');
    // let sharpflat = ['<sup class="accidental">&#x266f</sup>','<sup class="accidental">&#x266d</sup>','',''];
    $("#h_key").html( randomChoice(keys) );
}

var newShape = function(){
    let shapes = 'CAGED'.split('');
    $("#h_shape").html(randomChoice(shapes));
}

var newSong = function(){
    let songs = [
        "Aura Lee",
        "Billy Boy",
        "Clementine",
        "Down in the Valley",
        "Happy Birthday",
        "He's Got the Whole World in His Hands",
        "Home On the Range",
        "I've Been Working on the Railroad",
        "Mary Had A Little Lamb",
        "Michael, Row the Boat",
        "Ode To Joy",
        "Oh! Susanna",
        "On Top of Old Smokey",
        "Red River Valley",
        "She'll be Coming 'Round the Mountain",
        "Swing Low, Sweet Chariot",
        "This Land Is Your Land",
        "Twinkle Twinkle Little Star",
        "Yankee Doodle",
        "You Are My Sunshine"
    ]

    $("#h_song").html(randomChoice(songs));

}
