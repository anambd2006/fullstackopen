import { useState } from 'react'
import './App.css'

/*finding the highest number of votes*/
const MostVotes = ({votes, anecdotes}) => {
  const biggest = Math.max(...votes)
  const biggestIndex = votes.indexOf(biggest)
  const mostVotes = anecdotes[biggestIndex]
  
  if (biggest === 0) {
 
    return <p>Nothing yet</p>
  
  }
 
  else return (
    <>
    <p>{mostVotes}</p>
    <p>has {votes[biggestIndex]} votes</p>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote]=useState(anecdotes.map(()=>0))
  

/*to display anecdotes*/  
const randomAnecdotes=() => {

  setSelected(Math.floor(Math.random()*anecdotes.length))
 }

 /*to count votes*/
const handleVote =()=>{
  const newVotes = [...vote]
  newVotes[selected] += 1
  setVote(newVotes)  
}

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      has {vote[selected]} votes 
      <button onClick={handleVote}>vote</button>
      <button onClick={randomAnecdotes}>next anecdotes</button>
      <h2>Anecdote of the most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={vote}/> 
    </div>
  )
}

export default App