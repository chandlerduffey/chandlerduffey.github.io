// define numbers
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// select elements
const number = document.querySelector('.display');
const button = document.querySelector('.btn');

// listen for click event
button.addEventListener('click', function(){
	const randomNumber = getRandomNumber();

	number.textContent = nums[randomNumber];
});

function getRandomNumber(){
	return Math.floor(Math.random() * nums.length);
}