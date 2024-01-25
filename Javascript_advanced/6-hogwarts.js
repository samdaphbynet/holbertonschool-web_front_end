const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    }

    return {
        setName: (newName) => {
            name = newName;
        },

        rewardStudent: () => {
            changeScoreBy(1);
        },

        penalizeStudent: () => {
            changeScoreBy(-1);
        },

        getScore: () => {
            return `${name}: ${privateScore}`;
        }
    }
}

// Creating instance for Harry
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
// Logging Harry and score
console.log(harry.getScore());

// Creating instance for draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
// Logging Draco and score
console.log(draco.getScore());
