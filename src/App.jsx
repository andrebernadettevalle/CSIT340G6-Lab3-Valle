const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BS Computer Science Coursework',
    parts: [
      {
        name: 'CSIT340 Web Development',
        exercises: 3
      },
      {
        name: 'IT317 IT Project Management',
        exercises: 3
      },
      {
        name: 'CSIT284 Mobile Development',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Andre Bernadette Valle" code="CSIT340" section="G6" />
    </div>
  )
}

export default App