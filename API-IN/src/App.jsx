import { useState } from 'react'
import './App.css'



function App() {

  const [count, setCount] = useState(0)
  
  const App =() => {
    async function apicall() {
      const response = await fetch(
         'https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley'
      );
  
    const data = await response.json();
    console.log(data);
  }
  }
  
  return (
    <>
      <div>
        <h1 className='text-black '>BOOK API</h1>
        <Button onClick={App}></Button>
      </div> 
    </>
  )
}


export default App
