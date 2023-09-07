
const Header = (props) => {
  return (
    <h1>{props.header.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts.parts[0].name} {props.parts.parts[0].exercises}</p>
      <p>{props.parts.parts[1].name} {props.parts.parts[1].exercises}</p>
      <p>{props.parts.parts[2].name} {props.parts.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  let total = 0;
  for (let i = 0; i < props.parts.parts.length; i++) {
    total += props.parts.parts[i].exercises;
  }
  return (
    <p>Number of exercises {total} </p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course}/>
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}


export default App
