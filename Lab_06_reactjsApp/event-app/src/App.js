import { useState } from 'react';

function Actions() {
  const [message, setMessage] = useState('');
  const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)');
  const [titleColor, setTitleColor] = useState('white');

  const gradients = [
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
    'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
  ];
  let colorIndex = 0;

  return (
    <div style={{
      minHeight: '100vh', background: bgGradient,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Segoe UI', sans-serif", transition: 'background 0.5s'
    }}>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)', borderRadius: '30px',
        padding: '60px 70px', textAlign: 'center',
        boxShadow: '0 25px 45px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h1
          style={{ color: titleColor, fontSize: '34px', marginBottom: '10px', letterSpacing: '2px', transition: 'color 0.3s', cursor: 'default' }}
          onMouseOver={() => setTitleColor('#ffd200')}
          onMouseOut={() => setTitleColor('white')}>
          🎯 Interactive Buttons
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
          Hover & click to see magic ✨
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setMessage('🎉 Hello! You clicked the button!')}
            style={{
              padding: '14px 28px', fontSize: '16px', fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white', border: 'none', borderRadius: '50px',
              cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', transition: 'transform 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            💬 Show Message
          </button>

          <button
            onClick={() => {
              colorIndex = (colorIndex + 1) % gradients.length;
              setBgGradient(gradients[Math.floor(Math.random() * gradients.length)]);
            }}
            style={{
              padding: '14px 28px', fontSize: '16px', fontWeight: 'bold',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)',
              color: '#333', border: 'none', borderRadius: '50px',
              cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', transition: 'transform 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            🎨 Change Background
          </button>

          <button
            onClick={() => alert('🔔 This is a React Alert!\nHello from Event App!')}
            style={{
              padding: '14px 28px', fontSize: '16px', fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ff6b6b, #ee0979)',
              color: 'white', border: 'none', borderRadius: '50px',
              cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', transition: 'transform 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            🔔 Show Alert
          </button>
        </div>

        {message && (
          <div style={{
            marginTop: '35px', backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '20px', padding: '20px 30px',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <p style={{ color: '#a8ff78', fontSize: '20px', margin: 0, fontWeight: 'bold' }}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function App() { return <Actions />; }
export default App;