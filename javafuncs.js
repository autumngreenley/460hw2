function activetoinactive() {
    $(".activehint").attr('class', 'inactivehint');
}

function hint0active() {
    activetoinactive();
    $("#hint0").attr('class', 'activehint');
    $(".hint").html("If you'd like a hint, press one of the buttons above.");
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

function hint1bactive() {
    activetoinactive();
    $("#hint1b").attr('class', 'activehint');
    $(".hint").html("<b>Hint 1</b><br>Remember, you want to find the person who ate the sausages, not the people who are lying.<br><br>To attack problems like these, go through your list of potential thieves, assume that each one is guilty, and see which statements fit in each case.<br><br>That should get you started. Good luck!");
}

function hint2bactive() {
    activetoinactive();
    $("#hint2b").attr('class', 'activehint');
    $(".hint").html("<b>Hint Two</b><br>If you have chosen the right person, then three of the four boys' statements should be false. If you think you've found the culprit, but only two of the four boys' statements turn out to be lies, you haven't found the thief yet.<br><br>Here's another valuable piece of information: only one person ate the sausages.");
}

function hint3bactive() {
    activetoinactive();
    $("#hint3b").attr('class', 'activehint');
    $(".hint").html("<b>Hint Three</b><br>    All right, after this hint, you'll probably be able to guess the answer without thinking, but here we go.<br><br>A and B are lying.<br><br>Keep that information in mind and you should have your answer in no time.");
}

function selectriddle() {
    console.log(document.getElementById("currentriddle").value);
    if($(".riddle").length){
        $(".riddle").remove();
    }
    
    if(document.getElementById("currentriddle").value=='riddle1'){
        $("#currentriddle").after("<div class='riddle'><h2>Racetrack Riddle</h2><button type='button' class='activehint' id='hint0' onclick='hint0active()'>----></button><button type='button' class='inactivehint' id='hint1' onclick='hint1active()'>Hint #1</button><button type='button' class='inactivehint' id='hint2' onclick='hint2active()'>Hint #2</button><button type='button' class='inactivehint' id='hint3' onclick='hint3active()'>Hint #3</button><p class='hint'>If you'd like a hint, press one of the buttons above.</p><p>The distance three racehorses can run around the racetrack in one minute is listed below.</p><p>Horse A: Two laps.<br>Horse B: Three laps.<br>Horse C: Four laps.<br></p><p>The horses line up at the starting line and start running in the same direction. How many minutes will pass before all three horses line up at the starting line again?</p><form id='solution1'><input type='text' id='answer1'><br><input type='button' value='Check Solution' onclick='checksolution1()'></form></div></dev>");
        

        
        
    }else if(document.getElementById("currentriddle").value=='riddle2'){
        $("#currentriddle").after("<div class='riddle'><h2>Sausage Thief</h2><button type='button' class='activehint' id='hint0' onclick='hint0active()'>----></button><button type='button' class='inactivehint' id='hint1b' onclick='hint1bactive()'>Hint #1</button><button type='button' class='inactivehint' id='hint2b' onclick='hint2bactive()'>Hint #2</button><button type='button' class='inactivehint' id='hint3b' onclick='hint3bactive()'>Hint #3</button><p class='hint'>If you'd like a hint, press one of the buttons above.</p><form id='solution2'><p>Somebody ate the butcher's sausages! Here's what these four boys have to say:</p><input type='radio' id='a' name='riddle2' value='0'><label for='a'>A: 'B ate the sausages!'</label><br><input type='radio' id='b' name='riddle2' value='0'><label for='b'>B: 'D ate them all up!'</label><br><input type='radio' id='c' name='riddle2' value='1'><label for='c'>C: 'I didn't eat them, no way!'</label><br><input type='radio' id='d' name='riddle2' value='0'><label for='d'>D: 'B's totally lying!'</label><br><p>Only one of these rascals is telling the truth and all the others are, needless to say, lying. Can you figure out who ate the sausages?</p><input type='button' value='Check Solution' onclick='checksolution2()'></form></div>");
    }else {
        console.log("...");
    }
}






$("#solution1").submit(function(e) {
    e.preventDefault();
});

function checksolution1(){
    if($("#rightorwrong").length){
        $("#rightorwrong").remove();
    }
    
    console.log($("#answer1").val());
    if($("#answer1").val() == '1'){
        console.log("Yay!");
        $("#solution1").after("<div id='rightorwrong'><br><p>Yay! You absolutely nailed it!</p></div>")
    }else{
        console.log("Darn...");
        $("#solution1").after("<div id='rightorwrong'><br><p>Hm... That's not quite it. Try again, maybe?</p></div>")
    }
}

function checksolution2(){
    if($("#rightorwrong").length){
        $("#rightorwrong").remove();
    }
    
    if($("input[name='riddle2']:checked").val()==1){
        console.log("Yay");
        $("#solution2").after("<div id='rightorwrong'><br><p>Yay! You absolutely nailed it!</p></div>")
    }else{
        console.log("Boo");
        $("#solution2").after("<div id='rightorwrong'><br><p>Hm... That's not quite it. Try again, maybe?</p></div>")
    }
}