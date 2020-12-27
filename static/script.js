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
    console.log('computer choice:', botChoice)
    
    result =decideWinner(humanChoice,botChoice);
    console.log(result) //[0,1] means human lose | bot win
    
    message = finalMessage(result) // {'message': 'you won'; 'color': "green"}
    console.log(message);
    
    rpsFrontEnd(yourChoice.id,botChoice,message);

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
function finalMessage([yourScore, computerScore]){
    if(yourScore=== 0){
        return {'message': 'you lost', 'color': 'red'};}
    else if(yourScore=== 0.5){
        return {'message': 'you tied', 'color': 'blue'};}
    else{
        return {'message': 'you win', 'color': 'green'};}

}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,

    }
    //lets remove the pictures
     document.getElementById('rock').remove()
     document.getElementById('paper').remove()
     document.getElementById('scissor').remove()
      

     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var messageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='"+ imageDatabase[humanImageChoice] +"' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(35,50,233,1) ;'>"
     messageDiv.innerHTML = "<h1 style = 'color : "+ finalMessage['color'] +"; font-size = 60px padding= 30px;'>" +finalMessage['message'] + "</h1>"
     botDiv.innerHTML = "<img src='"+ imageDatabase[botImageChoice] +"' height=150 width=150 style= 'box-shadow: 0px 10px 30px rgba(243,38,24,1) ;'>"


document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);





}


    
    



