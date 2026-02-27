// script.js (Week 8)
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('showBtn');
  var msg = document.getElementById('message');
  btn.addEventListener('click', function(){
    // Toggle message text
    if (msg.textContent.indexOf('Hello') !== -1) {
      msg.textContent = 'You found the secret message! Great job!';
    } else {
      msg.textContent = 'Hello! Click the button to see a message.';
    }
  });
});


