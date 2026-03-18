import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const links = [
    { to: '/', label: '🏠 Home' },
    { to: '/about', label: 'ℹ️ About' },
    { to: '/contact', label: '📞 Contact' },
    { to: '/products', label: '🛍️ Products' },
  ];
  return (
    <nav style={{
      background: '#0a1a0f',
      padding: '18px 50px', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2d5a27',
      boxShadow: '0 2px 20px rgba(0,0,0,0.6)'
    }}>
      <span style={{
        color: '#a8c5a0', fontWeight: 'bold', fontSize: '22px',
        fontFamily: "'Georgia', serif", letterSpacing: '2px'
      }}>
        🌿 MyWebsite
      </span>
      <div style={{ display: 'flex', gap: '8px' }}>
        {links.map(link => (
          <Link key={link.to} to={link.to} style={{
            color: location.pathname === link.to ? '#c8e6c0' : '#6a9b6a',
            textDecoration: 'none', padding: '8px 20px', borderRadius: '6px',
            fontSize: '15px', fontFamily: "'Georgia', serif",
            backgroundColor: location.pathname === link.to ? 'rgba(168,197,160,0.15)' : 'transparent',
            border: location.pathname === link.to ? '1px solid #4a7a44' : '1px solid transparent',
            transition: 'all 0.3s'
          }}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div style={{
      minHeight: '90vh',
      background: 'linear-gradient(160deg, #0a1a0f 0%, #0f2318 50%, #0a1a0f 100%)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Georgia', serif"
    }}>
      <div style={{ textAlign: 'center', color: 'white', maxWidth: '600px', padding: '20px' }}>
        <p style={{ color: '#6a9b6a', letterSpacing: '4px', fontSize: '13px', marginBottom: '20px', textTransform: 'uppercase' }}>
          — Welcome to our world —
        </p>
        <h1 style={{
          fontSize: '58px', marginBottom: '20px',
          color: '#c8e6c0', lineHeight: '1.2',
          textShadow: '0 2px 20px rgba(100,180,100,0.2)'
        }}>
          Discover.<br/>Explore.<br/>Belong.
        </h1>
        <p style={{ fontSize: '17px', color: '#7aab7a', lineHeight: '1.9', marginBottom: '35px' }}>
          A curated collection of amazing products at unbeatable prices. Your one-stop shop for everything refined.
        </p>
        <div style={{
          display: 'inline-block', padding: '13px 40px', borderRadius: '6px',
          border: '1px solid #4a7a44', color: '#a8c5a0',
          fontSize: '15px', fontFamily: "'Georgia', serif",
          letterSpacing: '2px', cursor: 'pointer',
          background: 'rgba(74,122,68,0.15)',
          transition: 'all 0.3s'
        }}>✦ Explore Collection</div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{
      minHeight: '90vh',
      background: 'linear-gradient(160deg, #0a1a0f 0%, #0f2318 50%, #0a1a0f 100%)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Georgia', serif"
    }}>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: '12px', padding: '60px 70px',
        textAlign: 'center', maxWidth: '600px',
        border: '1px solid #2d5a27',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <p style={{ color: '#6a9b6a', letterSpacing: '4px', fontSize: '12px', marginBottom: '15px', textTransform: 'uppercase' }}>
          — Our Story —
        </p>
        <h1 style={{ color: '#c8e6c0', fontSize: '36px', marginBottom: '25px' }}>ℹ️ About Us</h1>
        <div style={{ width: '50px', height: '1px', background: '#4a7a44', margin: '0 auto 25px' }} />
        <p style={{ color: '#7aab7a', fontSize: '17px', lineHeight: '2' }}>
          We are a passionate team of developers building amazing web applications using
          <span style={{ color: '#a8c5a0', fontStyle: 'italic' }}> React JS </span>
          and the
          <span style={{ color: '#a8c5a0', fontStyle: 'italic' }}> MERN Stack</span>.
          Our mission is to craft elegant digital experiences that stand the test of time.
        </p>
      </div>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const inputStyle = {
    display: 'block', width: '100%', padding: '13px 18px',
    marginBottom: '15px', borderRadius: '6px',
    border: '1px solid #2d5a27', fontSize: '15px',
    backgroundColor: 'rgba(255,255,255,0.04)', color: '#c8e6c0',
    outline: 'none', boxSizing: 'border-box',
    fontFamily: "'Georgia', serif",
  };

  return (
    <div style={{
      minHeight: '90vh',
      background: 'linear-gradient(160deg, #0a1a0f 0%, #0f2318 50%, #0a1a0f 100%)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Georgia', serif"
    }}>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: '12px', padding: '55px 65px',
        textAlign: 'center', minWidth: '430px',
        border: '1px solid #2d5a27',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <p style={{ color: '#6a9b6a', letterSpacing: '4px', fontSize: '12px', marginBottom: '10px', textTransform: 'uppercase' }}>
          — Get in touch —
        </p>
        <h1 style={{ color: '#c8e6c0', fontSize: '32px', marginBottom: '30px' }}>📞 Contact Us</h1>
        <div style={{ width: '50px', height: '1px', background: '#4a7a44', margin: '0 auto 25px' }} />
        <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
        <input placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <textarea placeholder="Your Message" value={msg} onChange={e => setMsg(e.target.value)}
          style={{ ...inputStyle, height: '110px', resize: 'none', borderRadius: '6px' }} />
        <button onClick={() => alert('✅ Message Sent!')} style={{
          width: '100%', padding: '13px', fontSize: '15px',
          fontFamily: "'Georgia', serif", letterSpacing: '2px',
          background: 'rgba(74,122,68,0.2)', color: '#a8c5a0',
          border: '1px solid #4a7a44', borderRadius: '6px', cursor: 'pointer',
          transition: 'all 0.3s'
        }}
          onMouseOver={e => { e.currentTarget.style.background = '#2d5a27'; e.currentTarget.style.color = '#c8e6c0'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(74,122,68,0.2)'; e.currentTarget.style.color = '#a8c5a0'; }}>
          ✦ Send Message
        </button>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    { id: 1, title: '💻 Laptop Pro', desc: 'High performance laptop for developers', price: '$999' },
    { id: 2, title: '📱 SmartPhone X', desc: 'Latest flagship smartphone', price: '$699' },
    { id: 3, title: '🎧 Headphones', desc: 'Noise cancelling premium headphones', price: '$299' },
    { id: 4, title: '⌚ Smart Watch', desc: 'Track fitness and notifications', price: '$199' },
  ];

  return (
    <div style={{
      minHeight: '90vh',
      background: 'linear-gradient(160deg, #0a1a0f 0%, #0f2318 50%, #0a1a0f 100%)',
      padding: '60px 30px', fontFamily: "'Georgia', serif"
    }}>
      <p style={{ color: '#6a9b6a', letterSpacing: '4px', fontSize: '12px', textAlign: 'center', marginBottom: '10px', textTransform: 'uppercase' }}>
        — Curated for you —
      </p>
      <h1 style={{ color: '#c8e6c0', textAlign: 'center', fontSize: '36px', marginBottom: '15px' }}>🛍️ Our Products</h1>
      <div style={{ width: '50px', height: '1px', background: '#4a7a44', margin: '0 auto 45px' }} />
      <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '10px', padding: '35px 25px',
            width: '220px', textAlign: 'center',
            border: '1px solid #2d5a27',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.6)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)'; }}>
            <h3 style={{ color: '#a8c5a0', fontSize: '18px', marginBottom: '12px' }}>{p.title}</h3>
            <p style={{ color: '#6a9b6a', fontSize: '13px', marginBottom: '15px', lineHeight: '1.7' }}>{p.desc}</p>
            <p style={{ color: '#c8e6c0', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>{p.price}</p>
            <button style={{
              width: '100%', padding: '10px', fontSize: '13px',
              fontFamily: "'Georgia', serif", letterSpacing: '1px',
              background: 'rgba(74,122,68,0.15)', color: '#a8c5a0',
              border: '1px solid #4a7a44', borderRadius: '6px', cursor: 'pointer',
              transition: 'all 0.3s'
            }}
              onMouseOver={e => { e.currentTarget.style.background = '#2d5a27'; e.currentTarget.style.color = '#c8e6c0'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(74,122,68,0.15)'; e.currentTarget.style.color = '#a8c5a0'; }}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '90vh',
      background: 'linear-gradient(160deg, #0a1a0f 0%, #0f2318 50%, #0a1a0f 100%)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Georgia', serif"
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '110px', margin: '0', color: '#2d5a27' }}>404</h1>
        <h2 style={{ fontSize: '26px', color: '#a8c5a0' }}>❌ Page Not Found</h2>
        <p style={{ color: '#6a9b6a', marginBottom: '30px' }}>The page you seek does not exist.</p>
        <Link to="/" style={{
          display: 'inline-block', padding: '12px 35px',
          border: '1px solid #4a7a44', color: '#a8c5a0', borderRadius: '6px',
          textDecoration: 'none', fontFamily: "'Georgia', serif",
          letterSpacing: '2px', fontSize: '14px',
          background: 'rgba(74,122,68,0.15)'
        }}>✦ Return Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;