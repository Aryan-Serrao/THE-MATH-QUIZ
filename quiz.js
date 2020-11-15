function add_user () {

    var player1_name = document.getElementById("player1_input").value;

    var player2_name = document.getElementById("player2_input").value;

    localStorage.setItem("Player 1", player1_name);

    localStorage.setItem("Player 2", player2_name);

    window.location.replace("quiz_page.html");

}

player_name1 = localStorage.getItem("Player 1");

player_name2 = localStorage.getItem("Player 2");

player_score1 = 0;

player_score2 = 0;

document.getElementById("player1_name").innerHTML = player_name1;

document.getElementById("player2_name").innerHTML = player_name2;

document.getElementById("player1_score").innerHTML = player_score1;

document.getElementById("player2_score").innerHTML = player_score2;

document.getElementById("player_question").innerHTML = "Player Who Asks - " + player_name1;

document.getElementById("player_answer").innerHTML = "Player Who Answers - " + player_name2;

function send () {

    number1 = document.getElementById("number1").value;

    number2 = document.getElementById("number2").value;

    var answer = parseInt(numebr1) * parseInt(number2);

    var x = "&times;";

    //YEAH!//

    var question_number = '<h4 id="display_number">' + number1 + x + number2 + '</h4>';

    var input_box = '<br> Answer : <input type="text" id="input_box" placeholder="Enter Your Answer" style="width:40%;">';

    var check_button = '<br><br> <button type="button" id="check_button" onclick="check();" class="btn btn-info">Check</button>';

    var row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

}