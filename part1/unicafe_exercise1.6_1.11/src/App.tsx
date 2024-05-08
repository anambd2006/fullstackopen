import { useState } from 'react'
import './App.css'

/*Button handles the functionality of each feedback submission button.*/
const Button = ({handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

/*StatisticLine for displaying a single statistic, e.g. the average score*/
const StatisticLine = ({text, value}) => {
  return (
          <tr>
            <td>{text}</td> 
            <td>{value} {text==='Positive' ? '%' : ''}</td>
          </tr>
  )
}

const Statistics =({good, neutral, bad})=>{

const total=good+neutral+bad

//checking feedback given or not
  if(total===0){
    return (
      <p>no feedback given</p>
    )
  }

  return(
    <div>
      <table>
          <tbody>
        <StatisticLine value={good} text="Good" />
        <StatisticLine value={neutral} text="Nuetral" />
        <StatisticLine value={bad} text="Bad" />
        <StatisticLine value={total} text="All" />
        <StatisticLine value={((good-bad)/(total)).toFixed(2)} text="Average" />
        <StatisticLine value={(good*100/(total)).toFixed(2)} text="Positive" />
        </tbody>
      </table> 
    </div>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const getGood =()=>{
    setGood(good+1)
  }

  const getNeutral =()=>{
    setNeutral(neutral+1)
  }

  const getBad =()=>{
    setBad(bad+1)
  }


  return (
    <>
      <div>
        <h3>Give feedback</h3>
        <Button handleClick={getGood} text='Good' />
        <Button handleClick={getNeutral} text='Neutral' />
        <Button handleClick={getBad} text='Bad' />
        
        <br />
        <br />
        
        <h3>Statistics</h3>
         <Statistics good={good} neutral={neutral} bad={bad} />
        

      </div>  
            
            </>
  )
}

export default App
