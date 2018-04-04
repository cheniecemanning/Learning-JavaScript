let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == "" || attempt.value == "") {
        setHiddenFields();
    }

    //Ensure user input is valid, iterate attempt if valid
    if(!validateInput(input.value)){
        return;
    } else {
        attempt.value++;
    }

    //Check user input against answer and display results
    if(getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
    } else if(attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(false);
        showReplay();
    } else {
        setMessage('Incorrect, try again.');
    }
}

function getResults(input){
    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(var i = 0; i < input.length; i++){
        if (input.charAt(i) === answer.value.charAt(i)){
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(input.charAt(i)) > -1){
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        }else{
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    document.getElementById('results').innerHTML += html;
    
    if (correct ==  input.length){
        return true;
    } else {
        return false;
    }
}

//implement new functions here
function setHiddenFields(){
    answer.value = Math.floor(Math.random() * 9999);
    answer.value = answer.value.toString();

    switch(answer.value.length <= 4){
        case answer.value.length === 3:
          answer.value = "0" + answer.value
         break;

        case answer.length === 2:
        answer.value =  "00" + answer.value
         break;

         case answer.length === 1:
         answer.value = "000" + answer.value
         break;

         default:
            answer.value ==  answer.value;
    }

    attempt.value = 0;
    return answer;
}

function setMessage(message){
   document.getElementById('message').innerHTML = message;
}
function showAnswer(success){
    let code = document.getElementById('code');
    if(success) {
        code.className += " success";
    } else {
        code.className += " failure";
    }
    code.innerHTML = answer.value;
}

function showReplay(){
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}
function validateInput(input){
    if (input.length === 4){ 
        return true;
    } else{
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

