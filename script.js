console.log("Hello World");

//js object
const randomIdea = [
    "Take 15 minutes to do yoga in a nice setting.",
    "Grow at least 5 plants vegetables and/or flowers.",
    "Meditate first thing in the morning or last thing at night.",
    "Take at least five pics of your favorite outdoor spots.",
    "Skip some stones at your favorite pond or lake."
];//collection of data

console.log(randomIdea);

console.log(randomIdea[2]);



const tryThis = document.getElementById("tryThis");

const ideaBox = document.getElementById("ideaBox");

tryThis.addEventListener("click", function(){
    console.log("my button works,just one more thing to figure out!");

});

ideaBox.addEventListener("click", function(){});
    


// Function to be executed on button click
function handleRandomIdea(event) {
    event.preventDefault();
    const randomIdea = Math.floor(Math.random() * ideas.length);
    ideaBox.textContent = ideas[randomIdea];
    
}

   



 









