window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
const displayAlert = () => {
	alert("wojoo!")
}

const greenbutton = document.getElementById("theGreen")
greenbutton.addEventListener("click", displayAlert)