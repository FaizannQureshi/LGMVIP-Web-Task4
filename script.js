// Declare a global variable to store the memory value
let M = 0;

// Function to insert a value into the calculator screen
function insertValue(val) {
    var screen = document.getElementById("inputTextField");
    screen.value += val;
}

// Function to clear the calculator screen
function clearScreen() {
    document.getElementById("inputTextField").value = "";
}

// Function to change the sign of the current value
function changeSign() {
    var screen = document.getElementById("inputTextField");
    var value = parseFloat(screen.value);
    if (value > 0) {
        screen.value = "-" + screen.value;
    } else if (value < 0) {
        screen.value = screen.value.slice(1);
    }
}

// Function to calculate the result
function calculate() {
    var screen = document.getElementById("inputTextField");
    var input = screen.value;

    // Handle division by zero error
    if (input.includes("/0")) {
        screen.value = "Error: Division by zero";
        return;
    }

    // Evaluate the input string and display the result
    var result = eval(input);
    screen.value = result;
}

// Function to calculate the reciprocal of the current value
function reciprocal() {
    var screen = document.getElementById("inputTextField");
    var value = screen.value;
    var reciprocal = 1 / value;
    screen.value = reciprocal;
}

// Function to calculate the square of the current value
function square() {
    var screen = document.getElementById("inputTextField");
    var value = screen.value;
    var square = value * value;
    screen.value = square;

}

function root(){
    var screen = document.getElementById("inputTextField");
    var value = screen.value;
    var root = Math.pow(value, 0.5);
    screen.value = root;

}

// Function to store the current value in memory
function memoryStore() {
    var screen = document.getElementById("inputTextField");
    var value = screen.value;
    M = value;
    document.getElementById("inputTextField").value = "";
}

// Function to add the current value to the memory value
function memoryAdd() {
    var screen = document.getElementById("inputTextField");
    var value = screen.value;
    M = parseFloat(M) + parseFloat(value);
    screen.value = M;
}

// Function to recall the memory value
function memoryRecall() {
    var screen = document.getElementById("inputTextField");
    if(M==0){
        document.getElementById("inputTextField").value = "";

    }
    else{
        screen.value = M;

    }
}

function memoryClear(){
    var screen = document.getElementById("inputTextField");

    M = 0;
    document.getElementById("inputTextField").value = "";
}
