const express = require('express');
const app = express();

const colors = ['#a78bfa', '#f472b6', '#34d399', '#60a5fa', '#fb923c'];

app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  const color = colors[name.length % colors.length];
  const initial = name.charAt(0).toUpperCase();

  res.send(`
    <html>
    <head>
      <title>Hello ${name}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif;
               background: linear-gradient(135deg, #0a0a0a 0%, #1a0533 100%);
               min-height: 100vh; display: flex; justify-content: center; align-items: center; }
        .card { text-align: center; padding: 70px 90px;
                background: rgba(255,255,255,0.04); border-radius: 24px;
                border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
        .avatar { width: 100px; height: 100px; border-radius: 50%;
                  background: linear-gradient(135deg, ${color}, #0a0a0a);
                  border: 3px solid ${color};
                  display: flex; align-items: center; justify-content: center;
                  font-size: 42px; font-weight: bold; color: white;
                  margin: 0 auto 25px; box-shadow: 0 0 30px ${color}44; }
        h1 { font-size: 46px; margin-bottom: 12px; color: white; }
        h1 span { color: ${color}; }
        p { color: #9ca3af; font-size: 17px; margin-bottom: 8px; }
        .tip { margin-top: 30px; background: rgba(255,255,255,0.05);
               border: 1px solid rgba(255,255,255,0.1);
               padding: 12px 25px; border-radius: 50px;
               color: #6b7280; font-size: 13px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="avatar">${initial}</div>
        <h1>Hello, <span>${name}</span>!</h1>
        <p>Welcome to your personal profile page.</p>
        <p>We are glad to have you here ✨</p>
        <div class="tip">💡 Try: /user/Sara &nbsp;|&nbsp; /user/Ahmed &nbsp;|&nbsp; /user/Fatima</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Task 3 → http://localhost:3000/user/Ali'));