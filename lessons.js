let lessonProgress = parseFloat(localStorage.getItem("lessonProgress")) || 0;

updateProgressBar();
let btn = null;
function completeLesson(button) {
  lessonProgress += 11.11; // Increase the progress by 11.11% for each lesson
  button.disabled = true; // Disable the button after marking as complete
  btn = button;
  updateProgressBar();
  // Store the updated progress in local storage
  localStorage.setItem("lessonProgress", lessonProgress);
}

function resetProgress() {
  lessonProgress = 0; // Reset the progress to 0
  localStorage.setItem("lessonProgress", lessonProgress); // Update the local storage
  if (btn !== null) {
    btn.disabled = false;
  }
  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById("lesson-progress");
  progressBar.value = lessonProgress;
}
