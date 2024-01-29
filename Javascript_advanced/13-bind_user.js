// Define the user object
const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer"
}

// Define the logWelcomeUser function
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)
}

// Bind the LogWelcomeUser function to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Test the function bindLogWelcomeUser with string "Welcome"
console.log(bindLogWelcomeUser("Welcome"))
