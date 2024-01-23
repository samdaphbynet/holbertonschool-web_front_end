function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        // Return a function that returne the seat number
        return function() {
            return seat
        }
    }

    let students = []

    // Populate the students using a loop 
    for (let i = 0; i < numberOfStudents; i++) {
       students.push(studentSeat(i + 1))
    }

    // return the students array
    return students;
}

// Create a closure classRoom by calling createClassRoom function
let classRoom = createClassRoom(10);

// Test the Closure by calling the function within the classRoom array
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
