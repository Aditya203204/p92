player_1=localStorage.getItem("player1");
player_2=localStorage.getItem("player2");
player1Score=0;
player2Score=0;
document.getElementById("player1_name").innerHTML=player_1+" :";
document.getElementById("player2_name").innerHTML=player_2+" :";
document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;
document.getElementById("player_question").innerHTML="Question turn-"+player_1;
document.getElementById("player_answer").innerHTML="Answer turn-"+player_2;
question_turn="player1";
answer_turn="player2";
function send()
{
get_number=document.getElementById("word").value;
word=get_word.toLowerCase();

number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1)*parseInt(number2);

question_word="<h4 id='word_display'>Q. "+remove3+"</h4>";
inputBox="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+inputBox+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
function check()
{
   get_number=document.getElementById("input_check_box").value;
   answer=get_word.toLowerCase();

   if (word==answer) 
   {
       if (answer_turn=="player1")
       {
           player1Score=player1Score+1;
           document.getElementById("player1_score").innerHTML=player1Score;
       }
       else
       {
        player2Score=player2Score+1;
        document.getElementById("player2_score").innerHTML=player2Score;   
       }
   }
   if (question_turn=="player1")
   {
       question_turn="player2";
       document.getElementById("player_question").innerHTML="Question turn-"+player_2;
   }
   else
   {
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn-"+player_1;   
   }
   if (answer_turn=="player1")
   {
    answer_turn="player2";
       document.getElementById("player_answer").innerHTML="Answer turn-"+player_2;
   }
   else
   {
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player_1;   
   }
   document.getElementById("output").innerHTML="";
}