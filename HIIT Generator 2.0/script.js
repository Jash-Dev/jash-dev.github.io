let exercisesDone = []
let intensity = 0
let weight = 1;
let weightIncrement = 0.25
let score = 0
let variation;
let modifiers;
let scoreResult; 
let workoutState = false;
let interval;
let timeLeft;
let complete = false;
let currentSide;
let bilateral;

const exercises = [
    {"name": "Jumping Jacks", "level": 2, "url": "jumpingjacks.gif"},
    
    {"name": "Push Ups", "level": 3, "url": "pushup.gif" , "variations": [
            {"type":"Wide", "modifier": 0.25},
            {"type":"Close", "modifier": 0.5}, 
            {"type": "Clap", "modifier":0.75},
            {"type": 'Normal', "modifier": 0},
            {"type": 'Hindu', "modifier": 0.8},
            {"type": 'Spider Man', "modifier": 0.9}

        ]
    },  

    {"name":"Squats", "level": 4, "url": "squats.gif", "variations": 
        [
            {"type": "Close", "modifier": 0.5},
            {"type": "Hindu", "modifier": 0.75}, 
            {"type": 'Normal', "modifier": 0},
        ]
    } ,
    {"name":"Lunges", "level": 4, "url": "lunges.gif", "variations":[
        {"type": 'Normal', "modifier": 0},
        {"type": 'Side', "modifier": 0.25},
        {"type": 'Hop', "modifier": 0.3}        
    ], "bilateral": true},

    {"name":"Plank", "level": 1, "url": "plank.gif", "variations":[
        {"type": 'Reach Under', "modifier": 0.33}
    ]},
    {"name":"High Knees", "level": 1, "url": "highknees.gif"},
    
    {"name":"Crunches", "level": 2, "url": 'crunches.gif', "variations":
        [
            {"type": "bicycle", "modifier": 0.25},
            {"type": "reverse", "modifier": 0.5} , 
            {"type": "V-Up", "modifier": 0.75},
            {"type": 'Normal', "modifier": 0},
            {"type": 'Leg-Raises', 'modifier': 0.9},
            {"type": 'Sit-Up', "modifier": 0.125},
            {"type": 'Runner', "modifier": 0.25}
        ]
    },
    
    {"name":"Burpees", "level": 3 , "url": 'burpees.gif'},
    {"name":"Calf Raises", "level": 1, "url": "calfraises.gif"},

    {"name":"Wall Sit", "level": 2, "url": "wallsit.gif"},
    {"name":"Tricep extension", "level": 1, "url": "triceps.gif"},
    {"name":"Glute Bridge", "level": 1, "url": "glutebridge.gif"},
    {"name":"Chair Dip", "level": 2.5, "url": "dip.gif", "variations":[
        {"type": 'Floor', "modifier": 0.0625}
    ]},
    {"name":"Mountain Climbers", "level": 1.5, "url": "Mclimber.gif"},
    {"name":"Bulgarian Squat", "level": 2, "url": "Bulgaria.gif", "bilateral": true}
    
    
];

let workoutTime = 30;  // in seconds
let restTime = 10;     // in seconds
let totalSets = 5;     // number of cycles

let currentSet = 0;
let isRest = false;

function startWorkout() {
    getUserInput()
    document.getElementById("startButton").disabled = true;
    currentSet = 0;
    nextExercise();
    if (complete === true){
        getUserInput()
        score = 0
        currentSet = 0;
        nextExercise();

    }



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
            workoutState = true;
            const randomIndex = Math.floor(Math.random() * exercises.length);
            const chosenExercise = exercises[randomIndex];
            variation = intensifier(chosenExercise);
            modifier = variation ? variation.modifier  : 1
            let exerciseSides = ["LEFT", "RIGHT"]; //two sides for bilateral exercises
            let currentSideVar = 0; //Variable to keep track of current side.

            
            if (bilateral){
                console.log("bilateral")
                if(variation) {
                document.getElementById("exerciseDisplay").textContent = `${chosenExercise.name} - ${variation.type} - ${side} `
                speak(`${chosenExercise.name} - ${variation.type} - ${exerciseSides[currentSideVar]}`)}
                else {
                    document.getElementById("exerciseDisplay").textContent = `${chosenExercise.name} - ${side}`
                    speak(`${chosenExercise.name} - ${exerciseSides[currentSideVar]}`)
                }
            }
            if (variation){
                console.log("Variation")
                document.getElementById("exerciseDisplay").textContent = `${chosenExercise.name} - ${variation.type}`;
                speak(`${chosenExercise.name} - ${variation.type}`)
                
            } else {
                document.getElementById("exerciseDisplay").textContent = chosenExercise.name;
                speak(chosenExercise.name)
            }
            console.log("variation selected: ", variation)
           


        

        
           
            exercisesDone.push(chosenExercise.name);
            console.log(exercisesDone)
            intensity += chosenExercise.level * weight
            weight += weightIncrement
            console.log(intensity)
            
            
            if(chosenExercise.bilateral){
                startTimer(workoutTime, () =>{
                    isRest = true;

                    document.getElementById("exerciseDisplay").textContent = chosenExercise.name
                    speak(`${chosenExercise.name} - ${exerciseSides[currentSideVar]}`)
                    currentSideVar = (currentSideVar + 1) % exerciseSides.Length
                    
                    if (currentSideVar === 0){
                        nextExercise();
                    }
                })
            } else {
            startTimer(workoutTime, () => {
                isRest = true;
                
                nextExercise();
                displayExercisesDone(); 
            })};

        } else {
            document.getElementById("exerciseDisplay").textContent = "REST";
            speak("REST")
            startTimer(restTime, () => {
                isRest = false;
                currentSet++;
                nextExercise();
            });
        } 
    } else {
        document.getElementById("exerciseDisplay").textContent = "Workout Complete!";
        document.getElementById("timer").textContent = "";
        document.getElementById("startButton").disabled = false;
        score = (intensity * modifier) * ((totalSets * workoutTime) / 60)
        console.log(score)
        displayScore()
        scoreCalc()
        displayLevel()
        complete = true;
    }
}


function startTimer(duration, callback) {
     timeLeft = duration;
     let minutes = Math.floor(timeLeft/60);
     let seconds = timeLeft % 60;
     let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

     
    document.getElementById("timer").textContent = (`${minutes} : ${formattedSeconds}`);
     interval = setInterval(() => {
        timeLeft--;
        minutes = Math.floor(timeLeft/60);
        seconds = timeLeft % 60;
        formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timer").textContent = (`${minutes} : ${formattedSeconds}`);
        
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

function scoreCalc(){
    if (score < 25){
        scoreResult = 1
    } else if (score < 50){
        scoreResult = 2
    } else if (score < 75){
        scoreResult = 3
    } else if (score < 100){
        scoreResult = 4
    } else if (score < 125){
        scoreResult = 5
    }else if (score < 150){
        scoreResult = 6
    }else if (score < 175){
        scoreResult = 7
    }else if (score < 200){
        scoreResult = 8
    }else if (score < 225){
        scoreResult = 9
    }else if (score < 250){
        scoreResult = 10 
    }else if (score < 275){
        scoreResult = 11
    }else if (score < 300){
        scoreResult = 12
    }else if (score >= 300){
        scoreResult = 13
    }
}

function displayLevel(){
    const imageElement = document.getElementById("scoreImage")
    const captionElement = document.getElementById("caption")
switch (scoreResult){
    case 1:
       imageElement.src ="Yamcha.png" 
       captionElement.textContent = "You might be able to take Yamcha, but that's nothing to be proud of."
       break;

    case 2:
        imageElement.src ="Krillin.png"
        captionElement.textContent = "You're almost as strong as Krillin, that's OK, I suppose."
        break;
    
    case 3:
        imageElement.src ="Radditz.png"
        captionElement.textContent = "You can take the weakest Saiyan?  Alright..."
        break;
    
    case 4:
        imageElement.src ="Nappa.png"
        captionElement.textContent = "You can defeat Nappa! interesting."
        break;
    
    case 5:
        imageElement.src ="Guldo.png"
        captionElement.textContent = "You're almost as strong as the weakest member of the Ginyu force..."
        break;
    
    case 6:
        imageElement.src ="CaptainGinyu.png"
        captionElement.textContent = "Hope he didn't steal your body when you kicked his ass."
        break;
    
    case 7:
        imageElement.src ="Freiza.png"
        captionElement.textContent ="Now we're talking, don't bite his tail though."
        break;
    
    case 8:
        imageElement.src ="Androids.png"
        captionElement.textContent = "Destroy Dr. Gero's work because science is always evil."
        break;
    
    case 9:
        imageElement.src ="Cell.png"
        captionElement.textContent = "You can take Cell, you're pretty strong."
        break;
    
    case 10:
        imageElement.src ="MajinBuu.png"
        captionElement.textContent = "Ancient horrors are no match for you!"
        break;
    
    case 11:
        imageElement.src ="GFrieza.png"
        captionElement.textContent = "He's back for another whoopin'"
        break;
    
    case 12:
        imageElement.src ="Hit.png"
        captionElement.textContent ="TIME to STOP screwing around!"
        break;
    
    case 13:
        imageElement.src ="Jiren.png"
        captionElement.textContent = "You're not someone to mess with if you can take down Jiren!"
        break;
    

}

}

function intensifier(exercise){
    if (exercise.variations){
        const randomIndex = Math.floor(Math.random() * exercise.variations.length);
        return exercise.variations[randomIndex];
    }
    return null;
}
function resumeTimer(){
    interval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(interval);
            nextExercise();
        }
    }, 1000);
}



function pause(){
    if (workoutState === false){
        resumeTimer()
        
       document.getElementById("pauseButton").textContent = "Pause";
        workoutState = true;
        
    }else {
       clearInterval(interval)
       document.getElementById("pauseButton").textContent = "Resume";
       workoutState = false; 

       
    }

}

function speak(text){
    if ('speechSynthesis' in window) {
        console.log("Speaking:", text)
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = 1;
        utterance.rate = 1;
        utterance.pitch = 1;

        window.speechSynthesis.speak(utterance);

    }
}