// Define the workout options
const workoutOptions = [
  { name: "Push-ups", imageUrl: "push-up-exercise.gif" },
  { name: "Squats", imageUrl: "one-punch-man-saitama.gif" },
  { name: "Burpees", imageUrl: "legraise.gif" },
  { name: "Plank", imageUrl: "plank.webp" },
  { name: "Lunges", imageUrl: "lunges.gif" },
  { name: "Leg Raises", imageUrl: "legraise.gif" },
  { name: "Hip Thrust", imageUrl: "vegeta-train.gif" },
  { name: "Calf Raises", imageUrl: "pika.gif" },
  { name: "Deep Breathing", imageUrl: "roshi.gif" },
  { name: "Bicycle Crunches", imageUrl: "pika.gif" }
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
const amountExerInput = document.getElementById("amount-exer");

let currentInterval = 0; // Current interval index
let timerInterval; // Reference to the timer interval
let isResting = false; // Flag to track rest periods
let intervals, exerciseDuration, restDuration; // Moved from global to inside startWorkout function

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
  if (timerInterval) {
    clearInterval(timerInterval); // If there is a running timer, clear it first
  }

  intervals = parseInt(amountExerInput.value);
  exerciseDuration = parseInt(exerciseDurationInput.value);
  restDuration = parseInt(restDurationInput.value);

  if (intervals > workoutOptions.length) {
    alert('The number of exercises requested is more than available exercises. Please reduce the number.');
    return;
  }

  currentInterval = 0;
  startButton.disabled = true;
  startButton.textContent = "Resting...";

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

    updateTimer(currentTime);

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
});
