var roll1 = confirm("Roll first die?");
var roll2 = confirm("Roll second die?");

die1 = Math.floor(2+Math.random()*(12-2));
die2 = Math.floor(2+Math.random()*(12-2));

var die = function(try1, try2){
if(roll1 === true){
	console.log("You rolled a "+try1);
}
else{
	"You declined to roll!";
}

if(roll2 === true){
	console.log("You rolled a "+try2);
}
else{
	"You declined to roll!";
}

if (try1>try2){
	console.log("your first roll was higher!");
}
if (try1<try2){
	console.log("your second roll was higher!");
}
if (try1 === try2)
{
	console.log("tie!");
}

if (try1===2||try2===2){
	console.log("SNAKE EYES!");
}
};

die(die1, die2);
