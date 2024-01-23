function welcome(firstName, lastName) {
    // Concatenate the first and last names with spaces in between
    let fullName = firstName + " " + lastName;

    // Define the displayFullName function within the welcome function
    function displayFullName() {
        // Display the welcome message containing the full name
        console.log("Welcome " + fullName + "!");
    }

    // Call the displayFullName function
    displayFullName();
}

// test the welcome function
welcome("Holberton", "School");
