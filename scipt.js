// Define the workout options
const workoutOptions = [
  { name: "Push-ups", exerciseDuration: 30, restDuration: 10, imageUrl: "push-up-exercise.gif" },
  { name: "Squats", exerciseDuration: 30, restDuration: 10, imageUrl: "squats.jpg" },
  { name: "Burpees", exerciseDuration: 30, restDuration: 10, imageUrl: "burpees.jpg" },
  { name: "Plank", exerciseDuration: 30, restDuration: 10, imageUrl: "plank.jpg" },
  { name: "Lunges", exerciseDuration: 30, restDuration: 10, imageUrl: "lunges.jpg" },
  { name: "Leg Raises", exerciseDuration: 30, restDuration: 10, imageUrl: "sit-ups.jpg" },
  { name: "Hip Thrust", exerciseDuration: 30, restDuration: 10, imageUrl: "jumping-jacks.jpg" },
  { name: "Calf Raises", exerciseDuration: 30, restDuration: 10, imageUrl: "mountain-climbers.jpg" },
  { name: "Deep Breathing", exerciseDuration: 30, restDuration: 10, imageUrl: "high-knees.jpg" },
  { name: "Bicycle Crunches", exerciseDuration: 30, restDuration: 10, imageUrl: "bicycle-crunches.jpg" }
];

// Get HTML elements
const workoutTitleElement = document.getElementById("workout-title");
const exerciseTimerElement = document.getElementById("exercise-timer");
const restTimerElement = document.getElementById("rest-timer");
const exerciseImageElement = document.getElementById("exercise-image");
const startButton = document.getElementById("start-button");
const settingsForm = document.getElementById("settings-form");
const exerciseDurationInput = document.getElementById("exercise-duration");
const restDurationInput = document.getElementById("rest-duration");

let intervals = 5; // Number of intervals
let currentInterval = 0; // Current interval index
let timerInterval; // Reference to the timer interval
let isResting = false; // Flag to track rest periods
let exerciseDuration = parseInt(exerciseDurationInput.value); // Exercise duration in seconds
let restDuration = parseInt(restDurationInput.value); // Rest duration in seconds

// Function to update the timer display
function updateTimer(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  if (isResting) {
    restTimerElement.textContent = `Rest: ${minutes}:${seconds}`;
  } else {
    exerciseTimerElement.textContent = `Exercise: ${minutes}:${seconds}`;
  }
}

// Function to start the workout
function startWorkout() {
  currentInterval = 0;
  startButton.disabled = true;
  startButton.textContent = "Resting...";

  exerciseDuration = parseInt(exerciseDurationInput.value);
  restDuration = parseInt(restDurationInput.value);

  runInterval(); // Start the first interval
}

// Function to run the intervals
function runInterval() {
  const currentExercise = workoutOptions[Math.floor(Math.random() * workoutOptions.length)];

  if (currentInterval === intervals) {
    clearInterval(timerInterval); // Stop the timer
    workoutTitleElement.textContent = "Workout Complete";
    startButton.textContent = "Start Again";
    startButton.disabled = false;
    return;
  }

  if (isResting) {
    workoutTitleElement.textContent = `Rest Interval ${currentInterval + 1}`;
    exerciseImageElement.style.display = "none";
    restTimerElement.style.display = "block";
    exerciseTimerElement.style.display = "none";
    startButton.textContent = "Resting...";
    updateTimer(restDuration);
  } else {
    workoutTitleElement.textContent = `Exercise Interval ${currentInterval + 1}: ${currentExercise.name}`;
    exerciseImageElement.style.display = "block";
    restTimerElement.style.display = "none";
    exerciseTimerElement.style.display = "block";
    startButton.textContent = "Exercising...";
    updateTimer(exerciseDuration);
    exerciseImageElement.innerHTML = `<img src="${currentExercise.imageUrl}" alt="${currentExercise.name}">`;
  }

  let currentTime = isResting ? restDuration : exerciseDuration;

  timerInterval = setInterval(function () {
    currentTime--;

    if (isResting) {
      updateTimer(currentTime);
    } else {
      updateTimer(currentTime);
    }

    if (currentTime <= 0) {
      clearInterval(timerInterval);

      isResting = !isResting;
      currentInterval++;

      setTimeout(runInterval, 1000);
    }
  }, 1000);
}

// Event listener for the start button
startButton.addEventListener("click", startWorkout);

// Event listener for the settings form
settingsForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  exerciseDuration = parseInt(exerciseDurationInput.value);
  restDuration = parseInt(restDurationInput.value);
});
