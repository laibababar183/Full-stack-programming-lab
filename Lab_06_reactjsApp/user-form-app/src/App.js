import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit() {
    if (name && email) {
      setSubmitted({ name, email });
      setName('');
      setEmail('');
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px', padding: '50px 60px', textAlign: 'center',
        boxShadow: '0 25px 45px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)', minWidth: '380px'
      }}>
        <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '8px', letterSpacing: '2px' }}>
          📝 User Form
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '35px' }}>
          Fill in your details below
        </p>

        <input type="text" placeholder="👤 Enter your name" value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: 'block', width: '100%', padding: '14px 20px',
            marginBottom: '15px', borderRadius: '50px', border: 'none',
            fontSize: '15px', backgroundColor: 'rgba(255,255,255,0.9)',
            outline: 'none', boxSizing: 'border-box'
          }} />

        <input type="email" placeholder="✉️ Enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block', width: '100%', padding: '14px 20px',
            marginBottom: '25px', borderRadius: '50px', border: 'none',
            fontSize: '15px', backgroundColor: 'rgba(255,255,255,0.9)',
            outline: 'none', boxSizing: 'border-box'
          }} />

        <button onClick={handleSubmit} style={{
          width: '100%', padding: '14px', fontSize: '17px', fontWeight: 'bold',
          background: 'linear-gradient(135deg, #a8ff78, #78ffd6)',
          color: '#333', border: 'none', borderRadius: '50px',
          cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
          onMouseOver={e => e.target.style.transform = 'scale(1.03)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}>
          🚀 Submit
        </button>

        {submitted && (
          <div style={{
            marginTop: '30px', backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '20px', padding: '20px',
            border: '1px solid rgba(255,255,255,0.4)'
          }}>
            <h3 style={{ color: '#a8ff78', marginBottom: '10px' }}>✅ Submitted!</h3>
            <p style={{ color: 'white', margin: '6px 0' }}>👤 <b>Name:</b> {submitted.name}</p>
            <p style={{ color: 'white', margin: '6px 0' }}>✉️ <b>Email:</b> {submitted.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function App() { return <UserForm />; }
export default App;