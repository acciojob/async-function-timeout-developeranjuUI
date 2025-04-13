//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function(){
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	const outputDiv = document.getElementById("output");

	outputDiv.textContent = '';

	await showMessage(text, delay, outputDiv);
});

async function showMessage(message, delay, outputElement){
	await new Promise(resolve => setTimeout(resolve, delay));
	outputElement.textContent = message;
}