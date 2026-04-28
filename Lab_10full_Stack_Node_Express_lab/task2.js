const express = require('express');
const app = express();

function page(title, emoji, content, active) {
  const links = [
    { href: '/home', label: 'Home', emoji: '🏠' },
    { href: '/about', label: 'About', emoji: 'ℹ️' },
    { href: '/contact', label: 'Contact', emoji: '📞' },
  ];

  const nav = links.map(l => `
    <a href="${l.href}" class="${l.href === active ? 'active' : ''}">
      ${l.emoji} ${l.label}
    </a>
  `).join('');

  return `
    <html>
    <head>
      <title>${title}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif;
               background: linear-gradient(135deg, #0a0a0a 0%, #1a0533 100%);
               min-height: 100vh; display: flex; flex-direction: column; }
        nav { background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(167,139,250,0.2);
              padding: 18px 50px; display: flex; justify-content: space-between; align-items: center; }
        .logo { background: linear-gradient(135deg, #a78bfa, #f472b6);
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                font-size: 22px; font-weight: bold; letter-spacing: 2px; }
        nav a { color: #9ca3af; text-decoration: none; padding: 8px 20px;
                border-radius: 8px; font-size: 15px; border: 1px solid transparent; transition: all 0.3s; }
        nav a:hover, nav a.active { color: #a78bfa; border-color: rgba(167,139,250,0.4);
                                     background: rgba(167,139,250,0.1); }
        .main { flex: 1; display: flex; justify-content: center; align-items: center; }
        .box { text-align: center; padding: 70px 90px;
               background: rgba(255,255,255,0.04); border: 1px solid rgba(167,139,250,0.2);
               border-radius: 24px; backdrop-filter: blur(10px); }
        .emoji { font-size: 60px; margin-bottom: 20px; }
        h1 { font-size: 44px; margin-bottom: 15px;
             background: linear-gradient(135deg, #a78bfa, #f472b6);
             -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        p { color: #9ca3af; font-size: 18px; line-height: 1.8; }
      </style>
    </head>
    <body>
      <nav>
        <span class="logo">✦ MyWebsite</span>
        <div>${nav}</div>
      </nav>
      <div class="main">
        <div class="box">
          <div class="emoji">${emoji}</div>
          <h1>${title}</h1>
          <p>${content}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

app.get('/home', (req, res) => res.send(page('Welcome Home', '🏠', 'You have arrived at the home page. Explore the site using the navigation above!', '/home')));
app.get('/about', (req, res) => res.send(page('About Us', 'ℹ️', 'We are passionate developers building amazing web apps using Node.js and Express.js!', '/about')));
app.get('/contact', (req, res) => res.send(page('Contact Us', '📞', 'Reach us anytime at info@mywebsite.com — we would love to hear from you!', '/contact')));

app.listen(3000, () => console.log('Task 2 → http://localhost:3000/home'));