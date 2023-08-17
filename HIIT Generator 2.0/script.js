let exercisesDone = []
let intensity = 0
let weight = 1;
let weightIncrement = 0.25
let score = 0
let variation;
let modifiers;

const exercises = [
    {"name": "Jumping Jacks", "level": 2, "url": "jumpingjacks.gif"},
    
    {"name": "Push Ups", "level": 3, "url": "pushup.gif" , "variations": [
            {"type":"Wide", "modifier": 0.25},
            {"type":"Close", "modifier": 0.5}, 
            {"type": "Clap", "modifier":0.75},
            {"type": 'Normal', "modifier": 0}
        ]
    },  

    {"name":"Squats", "level": 4, "url": "squats.gif", "variations": 
        [
            {"type": "Close", "modifier": 0.5},
            {"type": "Hindu", "modifier": 0.75}, 
            {"type": 'Normal', "modifier": 0}
        ]
    } ,
    {"name":"Lunges", "level": 4, "url": "lunges.gif"},
    {"name":"Plank", "level": 1, "url": "plank.gif"},
    {"name":"High Knees", "level": 1, "url": "highknees.gif"},
    
    {"name":"Crunches", "level": 2, "url": 'crunches.gif', "variations":
        [
            {"type": "bicycle", "modifier": 0.25},
            {"type": "reverse", "modifier": 0.5} , 
            {"type": "V-Up", "modifier": 0.75},
            {"type": 'Normal', "modifier": 0},
            {"type": 'Leg-Raises', 'modifier': 0.9}
        ]
    },
    
    {"name":"Burpees", "level": 3 , "url": 'burpees.gif'},
    {"name":"Calf Raises", "level": 1, "url": "calfraises.gif"},

    {"name":"Wall Sit", "level": 2, "url": "wallsit.gif"},
    {"name":"Tricep extension", "level": 1, "url": "triceps.gif"},
    {"name":"Glute Bridge", "level": 1, "url": "glutebridge.gif"}
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
            variation = intensifier(chosenExercise);
            modifier = variation ? variation.modifier  : 1

            
            if (variation){
                console.log("Variation")
                document.getElementById("exerciseDisplay").textContent = `${chosenExercise.name} - ${variation.type}`;
            } else {
                document.getElementById("exerciseDisplay").textContent = chosenExercise.name;

            }
            console.log("variation selected: ", variation)
           


        

        
           
            exercisesDone.push(chosenExercise.name);
            console.log(exercisesDone)
            intensity += chosenExercise.level * weight
            weight += weightIncrement
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
        score = (intensity * modifier) * ((totalSets * workoutTime) / 60)
        console.log(score)
        displayScore()
        displayLevel()
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

function displayLevel(){
    const imageElement = document.getElementById("scoreImage")

    if (score < 50){
        imageElement.src = ""
    } else if (score < 80) {
        imageElement.src = ""
    } else {
        imageElement.src = ""
    }
    imageElement.load();
    imageElement.play();

}

function intensifier(exercise){
    if (exercise.variations){
        const randomIndex = Math.floor(Math.random() * exercise.variations.length);
        return exercise.variations[randomIndex];
    }
    return null;
}