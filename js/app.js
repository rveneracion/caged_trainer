$(document).ready(function(){

    newCombo();
    $("#b_tryagain").click(function(){
        newCombo();

    });
    

});

var newCombo = function(){
    newKey();
    newShape();
}

var randomChoice = function(mylist){
    var choice = Math.floor(Math.random() * mylist.length)
    return mylist[choice]
}

var newKey = function(){
    let keys = 'ABCDEF'.split('');
    let sharpflat = ['<sup class="accidental">&#x266f</sup>','<sup class="accidental">&#x266d</sup>','',''];
    $("#h_key").html(randomChoice(keys) + randomChoice(sharpflat));
    // $("#h_key").text('woohoo');
}

var newShape = function(){
    let shapes = 'CAGED'.split('');
    $("#h_shape").html(randomChoice(shapes));
}
