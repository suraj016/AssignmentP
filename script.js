// Get necessary DOM elements
const setReminderButton = document.getElementById('setReminder');
const chimeSound = document.getElementById('chime');

// Add event listener to the set reminder button
setReminderButton.addEventListener('click', function() {
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;
  
  // Calculate the time in milliseconds until the reminder should be triggered
  const currentDate = new Date();
  const reminderDate = new Date(currentDate.toDateString() + ' ' + time);
  const timeUntilReminder = reminderDate - currentDate;

  // Set the timeout to play the chime sound
  setTimeout(function() {
    chimeSound.play();
  }, timeUntilReminder);
});
