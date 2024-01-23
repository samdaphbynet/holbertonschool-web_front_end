function welcomeMessage(fullName) {
    // Closure for an alert displaying Welcome <fullName>
    return function() {
        alert("Welcome " + fullName);
    }
}

//  Create variables with call th welcomeMessage function
const quillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");

// Test functions by calling them
(quillaume());
(alex());
(fred());
