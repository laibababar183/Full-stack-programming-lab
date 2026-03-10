import './App.css';

function CourseItem(props) {
  return (
    <div style={{
      border: '2px solid #4a90e2',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9ff',
      width: '350px'
    }}>
      <h3>📚 {props.courseName}</h3>
      <p><b>Instructor:</b> {props.instructor}</p>
      <p><b>Duration:</b> {props.duration}</p>
      <p><b>Type:</b>
        <span style={{
          color: props.courseType === 'Online' ? 'green' : 'orange',
          fontWeight: 'bold'
        }}>
          {' '}{props.courseType}
        </span>
      </p>
    </div>
  );
}

const courses = [
  { courseName: "React JS", instructor: "Mr. Sharif", duration: "8 weeks", courseType: "Online" },
  { courseName: "Node.js", instructor: "Mr. Ali", duration: "6 weeks", courseType: "Offline" },
  { courseName: "MongoDB", instructor: "Ms. Sara", duration: "4 weeks", courseType: "Online" },
  { courseName: "Express.js", instructor: "Mr. Ahmed", duration: "5 weeks", courseType: "Offline" },
  { courseName: "HTML & CSS", instructor: "Mr. Usman", duration: "3 weeks", courseType: "Online" },
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📋 Course List</h1>
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          courseType={course.courseType}
        />
      ))}
    </div>
  );
}

export default App;