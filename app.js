function getRandom(count) {
    return Math.floor(Math.random() * count) + 1;
}

var developers = [
    "Thomas", "Simon", "Bardur", "John"
]

var chosenOne = document.getElementById("chosenOne");

function choose(i) {
    
    // Check every 100 milliseconds
    setTimeout(function () {
        // Itarate until 0
        if (--i) {

            chosenOne.innerHTML = developers[getRandom(4) - 1];
            
            choose(i);
        
        } else {
            btn.style.display = "block";
        }
    }, 100);

};

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    btn.style.display = "none";
    choose(20);
});


