const Header = (props) => {
     return (
      <>
      <center>
       <h4 style={{'background-color': '#EAE5E4'}}> {props.courseName}</h4>
       </center>
      </>

     )
}

const Part1 = (props) => {
  return (
    <center><p>{props.Part} : {props.Exercises}</p> </center>
  )
}

const Part2 = (props) => {
  return (
  <center> <p>{props.Part} : {props.Exercises} </p></center>
  )
}

const Part3 = (props) => {
  return (
     <center><p>{props.Part} : {props.Exercises}</p></center>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 Part={props.parts[0].name} Exercises={props.parts[0].exercises} />
      <Part2 Part={props.parts[1].name} Exercises={props.parts[1].exercises} />
      <Part3 Part={props.parts[2].name} Exercises={props.parts[2].exercises} />
    </div>
  )
}


const Total = (props) => {
  return (
   <><center>
    <p style={{'font-weight': 'bold'}}>Total Number of exercises: {props.Parts[0].exercises+props.Parts[1].exercises+props.Parts[2].exercises}</p>
    </center>
   </>
  )
}


const App =()=>{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1><Header courseName={course.name} /> </h1>
      <Content parts={course.parts} />
      <Total Parts={course.parts} />
    
    </div>
  )
}

export default App