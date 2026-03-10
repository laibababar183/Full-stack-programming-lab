import './App.css';

function StudentCard(props) {
  return (
    <div style={{
      backgroundColor: props.color || '#f0f0f0',
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px',
      width: '300px'
    }}>
      <h2>👤 {props.name}</h2>
      <p><b>Roll No:</b> {props.rollNo}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>University:</b> {props.university}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎓 Student Cards</h1>
      <StudentCard name="Ali" rollNo="221001" department="Software Engineering" university="Air University" color="#d0f0ff" />
      <StudentCard name="Sara" rollNo="221002" department="AI & ML" university="Air University" color="#d0ffd0" />
      <StudentCard name="Ahmed" rollNo="221003" department="Cyber Security" university="Air University" color="#ffd0d0" />
    </div>
  );
}

export default App;