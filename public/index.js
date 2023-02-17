let button = document.getElementById("button");
let display = document.getElementById("display");
let numbers = document.getElementsByClassName("numbers");
let reset = document.getElementById("reset");
						
let i = 0;
button.onclick = function()
{
	if (i < numbers.length - 1)
	{
		display.innerHTML = "";
		display.style.animation = "mymove 2s";
		setTimeout(GenAssignNum, 2300);
		setTimeout(clearAnimation, 2300);
		setTimeout(function(){i++}, 2400);
	}
	else if (i == numbers.length - 1)
	{
		display.innerHTML = "";
		display.style.animation = "mymove 2s";
		setTimeout(GenAssignNum, 2300);
		setTimeout(clearAnimation, 2300);
		setTimeout(function(){i++}, 2400);
		button.style.backgroundColor = "#eeeeee";
		button.disabled = true;
		reset.style.display = "inline-block";
	}
}
						
reset.onclick = function()
{
	i = 0;
	for (i = 0; i < numbers.length; i++)
	{
		numbers[i].innerHTML = "";
		numbers[i].className = numbers[i].className.replace("active","");
	}
	display.innerHTML = "";
	button.style.backgroundColor = "yellow";
	button.disabled = false;
	reset.style.display = "none";
	while (numArray.length > 0) 
	{
		numArray.pop();
	}
	i = 0;
}
						
var numArray = [];
function GenAssignNum()
{
	let num = Math.floor(Math.random() * (50 - 1) ) + 1;
	if (numArray.indexOf(num) === -1) 
	{
		numArray.push(num);	
		display.innerHTML = numArray[i];
		numbers[i].className += " active";
		numbers[i].innerHTML = display.innerHTML;
	}
	else
	{
		num = Math.floor(Math.random() * (50 - 1) ) + 1;
		numArray.push(num);	
		display.innerHTML = numArray[i];
		numbers[i].className += " active";
		numbers[i].innerHTML = display.innerHTML;
	}
}
					
function clearAnimation()
{
	display.style.animation = "";
}