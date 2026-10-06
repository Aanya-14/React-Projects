import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("beige")
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">Test
        </div>
        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 ">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >orange</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >green</button>
        
        
          </div>
      
    </div>
    </>
  )
}

export default App
