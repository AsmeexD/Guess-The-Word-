player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score =0;
player2_score=0;

document.getElementById("player1_name").innerHTML =player1_name + ":";
document.getElementById("player2_name").innerHTML =player2_name + ":";
document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player2_score").innerHTML =player2_score;

document.getElementById("player_question").innerHTML="Question turn :"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn :"+player2_name;

function send(){
    word= document.getElementById("word").value ;
    word= word.toLowerCase();
    console.log(word);

    first_char=word.charAt(1);
index= Math.floor(word.length/2);
sec_char=word.charAt(index)
third_char=word.charAt(word.length-1)
console.log(first_char, sec_char, third_char);

first_word=word.replace(first_char,"_");
sec_word=first_word.replace(sec_char,"_");
third_word=sec_word.replace(third_char,"_");
console.log(third_word);

question_word="<h4 id='display_word'>Q. "+third_word+"</h4>"
input_box= "<br>answer: <input type='text' id='input_check_box'>";
button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=question_word+input_box+button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer= document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score +1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player1_score +1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name;
    
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn - "+ player1_name;
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question turn - "+ player2_name;
    
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
    

    }
    document.getElementById("output").innerHTML="";
}