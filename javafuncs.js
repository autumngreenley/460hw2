function activetoinactive() {
    $(".activehint").attr('class', 'inactivehint');
}

function hint0active() {
    activetoinactive();
    $("#hint0").attr('class', 'activehint');
    $(".hint").html("If you'd like a hint, press one of the buttons above.");
    //document.getElementsByClassName("hint")[0].innerHTML="If you'd like a hint, press one of the buttons above."
}

function hint1active() {
    activetoinactive();
    $("#hint1").attr('class', 'activehint');
    $(".hint").html("<b>Hint 1</b><br>Someone in a hurry might jump to the conclusion that you need to find the lowest common multiple between the three numbers.<br><br>Read the problem over again and see if you can't clear things up for yourself.");
}

function hint2active() {
    activetoinactive();
    $("#hint2").attr('class', 'activehint');
    $(".hint").html("<b>Hint Two</b><br>The three horses each run at different speeds. To measure the horses' speeds, the problem tells you how many laps each horse can do in one minute.<br><br>The horses all run whole laps per minute, so at least you don't have to deal with strange speeds.");
}

function hint3active() {
    activetoinactive();
    $("#hint3").attr('class', 'activehint');
    $(".hint").html("<b>Hint Three</b><br>One horse runs two laps in one minute, one runs three laps in one minute, and one runs four laps in one minute.<br><br>Where will the horses be one minute after they start running?");
}

function racetrackpopulate() {
    
}