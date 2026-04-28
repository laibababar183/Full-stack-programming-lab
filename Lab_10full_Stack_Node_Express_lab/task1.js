const express = require('express');
const app = express();

const students = [
  { id: 1, name: "Ali Ahmed", rollNo: "221001", department: "Software Engineering", gpa: "3.8" },
  { id: 2, name: "Sara Khan", rollNo: "221002", department: "AI & ML", gpa: "3.9" },
  { id: 3, name: "Ahmed Raza", rollNo: "221003", department: "Cyber Security", gpa: "3.6" },
  { id: 4, name: "Fatima Malik", rollNo: "221004", department: "Data Science", gpa: "3.7" },
  { id: 5, name: "Usman Tariq", rollNo: "221005", department: "Software Engineering", gpa: "3.5" },
];

app.get('/students', (req, res) => {
  let cards = students.map(s => `
    <div class="card">
      <div class="avatar">${s.name.charAt(0)}</div>
      <div class="info">
        <h3>${s.name}</h3>
        <p>🎓 ${s.department}</p>
        <p>📋 Roll No: ${s.rollNo}</p>
        <span class="badge">GPA: ${s.gpa}</span>
      </div>
    </div>
  `).join('');

  res.send(`
    <html>
    <head>
      <title>Student List</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; 
               background: linear-gradient(135deg, #0a0a0a 0%, #1a0533 100%);
               min-height: 100vh; padding: 50px 30px; }
        h1 { text-align: center; font-size: 42px; margin-bottom: 10px;
             background: linear-gradient(135deg, #a78bfa, #f472b6);
             -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 40px; letter-spacing: 2px; font-size: 13px; }
        .grid { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; max-width: 900px; margin: 0 auto; }
        .card { background: rgba(255,255,255,0.05); border: 1px solid rgba(167,139,250,0.2);
                border-radius: 16px; padding: 25px; width: 260px;
                display: flex; align-items: center; gap: 18px;
                backdrop-filter: blur(10px);
                transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(167,139,250,0.15); }
        .avatar { width: 55px; height: 55px; border-radius: 50%;
                  background: linear-gradient(135deg, #a78bfa, #f472b6);
                  display: flex; align-items: center; justify-content: center;
                  font-size: 22px; font-weight: bold; color: white; flex-shrink: 0; }
        .info h3 { color: #e9d5ff; font-size: 16px; margin-bottom: 6px; }
        .info p { color: #9ca3af; font-size: 13px; margin-bottom: 4px; }
        .badge { background: rgba(167,139,250,0.2); color: #a78bfa;
                 border: 1px solid rgba(167,139,250,0.4);
                 padding: 3px 10px; border-radius: 20px; font-size: 12px; margin-top: 6px; display: inline-block; }
      </style>
    </head>
    <body>
      <h1>Student Directory</h1>
      <p class="subtitle">— AIR UNIVERSITY — BSSE VI —</p>
      <div class="grid">${cards}</div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Task 1 → http://localhost:3000/students'));