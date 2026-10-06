import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = ()=>{
    console.log("clicked",counter);
    //counter = counter + 1;
    setCounter(prevCounter =>  prevCounter+1);
    setCounter(prevCounter =>  prevCounter+1);
    setCounter(prevCounter =>  prevCounter+1);
    setCounter(prevCounter =>  prevCounter+1);
    setCounter(prevCounter =>  prevCounter+1);
 
  }

  const removeValue = () =>{
    console.log("clicked", counter);
    setCounter(counter - 1);

  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove Value {counter}</button>
      <p>footer</p>

    </>
  )

  
}

export default App
