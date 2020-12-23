function ageInDays(){
    var birthYear = prompt('What year were you born?');
    var ageInDayss =(2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageInDayss +' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();

}

function generateCat(){
     var d = new Date();
    var image =document.createElement('img');
    var div = document.getElementById('flex-cat-gen')
    image.src= "http://thecatapi.com/api/images/get?format=src&type=gif&size=small" + d.getTime();
    div.appendChild(image);
}
function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())
    console
    result =decideWinner(humanChoice,botChoice); //[0,1] means human lose | bot win
    //message = finalMessage(result) // {'message': 'you won'; 'color': "green"}
    //rpsFrontEnd(yourChoice.id,botChoice,message);

}
function randToRpsInt(){
 return   Math.floor(Math.random()*3)

}
function numberToChoice(number){
 return   ['rock','paper','scissor'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper':0},
        'paper': {'scissor': 0, 'rock': 1, 'paper': 0.5},
        'scissor':{'scissor': 0.5, 'rock': 0, 'paper':1},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore]
}

    
    



