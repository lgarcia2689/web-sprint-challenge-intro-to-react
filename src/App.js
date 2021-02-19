import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import {BASE_URL} from './constants/indexstarwars'

const App = () => {
 
  const[character, setCharacter] = useState([])
 
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacter(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  },[])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS {'>'} </h1>
      {
        character.map( fr =>{
          return <Character character={fr}/>
        }

        )
      }
    </div>
  );
}

export default App;