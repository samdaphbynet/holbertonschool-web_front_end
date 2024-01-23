// Global varibale 
let globalVariables = "Welcome";

// Outer function
function outer() {
    // Alert the content of GlobalVaribales
    alert(globalVariables);

    // Create a local varible within the outer function
    let course = "Holberton"

    // inner function
    function inner() {
        // Alert the content of globalvariable and course (concatenated)
        alert(globalVariables + " " + course);

        // Create a local variable within the inner function
        let exclamation = "!";

        // inception function
        function inception() {
            // Allert content of globalvariable and course + exclamation (concatenated)
            alert(globalVariables + " " + course + exclamation);
        }

        // Call the inception function
        inception();
    }

    // Call the inner function
    inner();
}

// Call the outer function
outer();
