// Header Component
const Header = (props) => {
  return <h1>{props.course}</h1>
}

// Part Component
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Content Component
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

// Total Component
const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises: {total}</p>
}

// Footer Component
const Footer = (props) => {
  return (
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <p>{props.studentName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 Web Development',
    parts: [
      {
        name: 'CSIT321 Applications Development and Emerging Technologies',
        exercises: 3
      },
      {
        name: 'CSIT327 Information Management 2',
        exercises: 3
      },
      {
        name: 'CSIT340 Industry Elective 1',
        exercises: 4
      }
    ]
  }

  const studentInfo = {
    fullName: 'Andre Bernadette Valle', 
    code: 'CSIT340',
    sec: 'G6'                 
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer 
        studentName={studentInfo.fullName} 
        courseCode={studentInfo.code} 
        section={studentInfo.sec} 
      />
    </div>
  )
}

export default App