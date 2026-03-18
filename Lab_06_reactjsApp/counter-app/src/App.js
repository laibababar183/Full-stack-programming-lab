import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        padding: '60px 80px',
        textAlign: 'center',
        boxShadow: '0 25px 45px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)'
      }}>
        <h1 style={{ color: 'white', fontSize: '36px', marginBottom: '10px', letterSpacing: '2px' }}>
          🔢 Counter App
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '16px' }}>
          Click buttons to change the count
        </p>

        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '20px',
          padding: '30px 50px',
          marginBottom: '35px'
        }}>
          <h2 style={{
            fontSize: '90px',
            color: count === 0 ? 'white' : count > 0 ? '#a8ff78' : '#ff6b6b',
            margin: '0',
            textShadow: '0 0 30px rgba(255,255,255,0.3)'
          }}>
            {count}
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setCount(count + 1)} style={{
            padding: '14px 30px', fontSize: '18px', fontWeight: 'bold',
            background: 'linear-gradient(135deg, #a8ff78, #78ffd6)',
            color: '#333', border: 'none', borderRadius: '50px',
            cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}>
            ➕ Increment
          </button>

          <button onClick={() => setCount(count > 0 ? count - 1 : 0)} style={{
            padding: '14px 30px', fontSize: '18px', fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ff6b6b, #ee0979)',
            color: 'white', border: 'none', borderRadius: '50px',
            cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}>
            ➖ Decrement
          </button>

          <button onClick={() => setCount(0)} style={{
            padding: '14px 30px', fontSize: '18px', fontWeight: 'bold',
            background: 'linear-gradient(135deg, #f7971e, #ffd200)',
            color: '#333', border: 'none', borderRadius: '50px',
            cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}>
            🔄 Reset
          </button>
        </div>

        {count === 0 && (
          <p style={{
            marginTop: '25px', color: '#ffd200',
            fontSize: '14px', letterSpacing: '1px'
          }}>
            ⚠️ Count cannot go below 0!
          </p>
        )}
      </div>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;