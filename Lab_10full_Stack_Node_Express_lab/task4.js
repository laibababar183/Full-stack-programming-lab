const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>My Express App</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif;
               background: linear-gradient(135deg, #0a0a0a 0%, #1a0533 100%);
               min-height: 100vh; padding: 60px 30px; color: white; }
        .container { max-width: 750px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 50px; }
        .header h1 { font-size: 48px; margin-bottom: 15px;
                     background: linear-gradient(135deg, #a78bfa, #f472b6);
                     -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .header p { color: #9ca3af; font-size: 17px; line-height: 1.8; }
        .divider { width: 60px; height: 2px; background: linear-gradient(135deg, #a78bfa, #f472b6);
                   margin: 20px auto; border-radius: 2px; }
        h2 { color: #e9d5ff; font-size: 22px; margin-bottom: 20px; }
        ul { list-style: none; }
        li { background: rgba(255,255,255,0.04); border: 1px solid rgba(167,139,250,0.2);
             padding: 18px 25px; margin-bottom: 12px; border-radius: 12px;
             color: #d1d5db; font-size: 15px; display: flex; align-items: center; gap: 12px;
             transition: transform 0.2s, border-color 0.2s; cursor: default; }
        li:hover { transform: translateX(8px); border-color: rgba(167,139,250,0.5); }
        .icon { font-size: 20px; }
        .footer { text-align: center; margin-top: 50px; color: #4b5563; font-size: 13px; letter-spacing: 2px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✦ My Express App</h1>
          <p>A full HTML page rendered using <strong style="color:#a78bfa">Node.js</strong> 
             and <strong style="color:#f472b6">Express.js</strong> — 
             making powerful web servers with minimal code.</p>
          <div class="divider"></div>
        </div>
        <h2>📋 Topics Covered in This Lab</h2>
        <ul>
          <li><span class="icon">⚡</span> Node.js Runtime Environment</li>
          <li><span class="icon">🚀</span> Express.js Server Setup</li>
          <li><span class="icon">🔗</span> GET Routes and URL Parameters</li>
          <li><span class="icon">📄</span> Sending HTML Responses from Server</li>
          <li><span class="icon">🔄</span> REST API Concepts (GET, POST, PUT, DELETE)</li>
        </ul>
        <div class="footer">— LAB 10 — NODE.JS + EXPRESS.JS —</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Task 4 → http://localhost:3000'));