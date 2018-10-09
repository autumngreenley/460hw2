function activetoinactive() {
    document.getElementsByClassName("activehint")[0].className = "inactivehint";
}

function hint1active() {
    activetoinactive();
    document.getElementById("hint1").className = "activehint";
    document.getElementsByClassName("hint")[0].innerHTML="<b>Hint 1</b><br>Someone in a hurry might jump to the conclusion that you need to find the lowest common multiple between the three numbers.<br><br>Read the problem over again and see if you can't clear things up for yourself."
}

function hint2active() {
    activetoinactive();
    document.getElementById("hint2").className = "activehint";
    document.getElementsByClassName("hint")[0].innerHTML="<b>Hint Two</b><br>The three horses each run at different speeds. To measure the horses' speeds, the problem tells you how many laps each horse can do in one minute.<br><br>The horses all run whole laps per minute, so at least you don't have to deal with strange speeds."
}

function hint3active() {
    activetoinactive();
    document.getElementById("hint3").className = "activehint";
    document.getElementsByClassName("hint")[0].innerHTML="<b>Hint Three</b><br>One horse runs two laps in one minute, one runs three laps in one minute, and one runs four laps in one minute.<br><br>Where will the horses be one minute after they start running?"
}