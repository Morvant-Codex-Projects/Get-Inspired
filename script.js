console.log("Hello");

//js object
const randomIdea = [
    "Take 15 minutes to do yoga in a nice setting.",
    "Grow at least 5 plants vegetables and/or flowers.",
    "Meditate first thing in the morning or last thing at night.",
    "Take at least five pics of your favorite outdoor spots.",
    "Skip some stones at your favorite pond or lake."
];//collection of data

console.log("randomIdea");

const button = document.getElementById("tryThis");

button.addEventListener("click",displayText);

function displayText(element){
   element.displayText="randomIdea"

}


//document.getElementById("tryThis").addEventListener("click", randomIdea);

//function displayDate() {
  //document.getElementById("randomIdea").innerHTML = Date();




