let exercisesDone = []
let intensity = 0
let weight = 1;
let weightINcrement = 0.25
score = 0

const exercises = [
    {"name": "Jumping Jacks", "level": 2},
    {"name": "Push Ups", "level": 3},  
    {"name":"Squats", "level": 4},
    {"name":"Lunges", "level": 4},
    {"name":"Plank", "level": 1},
    {"name":"High Knees", "level": 1},
    {"name":"Crunches", "level": 2},
    {"name":"Burpees", "level": 3},
    {"name":"Calf Raises", "level": 1}
];

let workoutTime = 30;  // in seconds
let restTime = 10;     // in seconds
let totalSets = 5;     // number of cycles

let currentSet = 0;
let isRest = false;

function startWorkout() {
    getUserInput()
    currentSet = 0;
    nextExercise();
}

function getUserInput() {
    const workoutDurationInput = document.getElementById("workoutDuration");
    const restDurationInput = document.getElementById("restDuration");
    const totalSetsInput = document.getElementById("totalSets");

    // Get values from input fields and convert them to integers
    workoutTime = parseInt(workoutDurationInput.value, 10);
    restTime = parseInt(restDurationInput.value, 10);
    totalSets = parseInt(totalSetsInput.value, 10);
}



function nextExercise() {
    if (currentSet < totalSets) {
        if (!isRest) {
            const randomIndex = Math.floor(Math.random() * exercises.length);
            const chosenExercise = exercises[randomIndex];
            document.getElementById("exerciseDisplay").textContent = chosenExercise.name;
            exercisesDone.push(chosenExercise.name);
            console.log(exercisesDone)
            intensity += chosenExercise.level * weight
            weight += weightINcrement
            console.log(intensity)
            startTimer(workoutTime, () => {
                isRest = true;
                nextExercise();
                displayExercisesDone(); 
            });

        } else {
            document.getElementById("exerciseDisplay").textContent = "REST";
            startTimer(restTime, () => {
                isRest = false;
                currentSet++;
                nextExercise();
            });
        } 
    } else {
        document.getElementById("exerciseDisplay").textContent = "Workout Complete!";
        document.getElementById("timer").textContent = "";
        score = intensity * totalSets + workoutTime 
        console.log(score)
        displayScore()
    }
}



function startTimer(duration, callback) {
    let timeLeft = duration;
    document.getElementById("timer").textContent = timeLeft + "s";
    const interval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
}

function displayExercisesDone() {
    const displayE = document.getElementById("doneToday");
    displayE.textContent = exercisesDone.join(", ")
}

function displayScore(){
    document.getElementById("score").textContent = score;
}