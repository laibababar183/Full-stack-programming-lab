import './App.css';

function Greeting(props) {
  let message = '';
  let emoji = '';

  if (props.timeOfDay === 'morning') {
    message = 'Good Morning';
    emoji = '🌅';
  } else if (props.timeOfDay === 'afternoon') {
    message = 'Good Afternoon';
    emoji = '☀️';
  } else if (props.timeOfDay === 'evening') {
    message = 'Good Evening';
    emoji = '🌙';
  }

  return (
    <div style={{
      backgroundColor: props.bgColor || '#ffffff',
      padding: '20px',
      margin: '10px',
      borderRadius: '12px',
      width: '300px',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2>{emoji} {message}, {props.name}!</h2>
      <p>Time: {props.timeOfDay}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>👋 Greeting App</h1>
      <Greeting name="Ali" timeOfDay="morning" bgColor="#fffacd" />
      <Greeting name="Sara" timeOfDay="afternoon" bgColor="#e0f7fa" />
      <Greeting name="Ahmed" timeOfDay="evening" bgColor="#fce4ec" />
    </div>
  );
}

export default App;