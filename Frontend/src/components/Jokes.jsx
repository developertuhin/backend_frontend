import { useState,useEffect } from 'react'
import axios from 'axios'

import '../App.css'

function Jokes() {
const [jokes,setJokes]=useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})

  return (
    <>
     <h1>Total Jokes : {jokes.length}</h1>
      <div className="jokes">
     
      {
        jokes.map((joke,index)=>(
          <div key={joke.id} className='joke-card'>
            <h3>Title : {joke.title}</h3>
            <p>Content : {joke.content}</p>
            
          </div>
        ))
      }
      </div>
    </>
  )
}

export default Jokes
