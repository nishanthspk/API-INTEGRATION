import { useState } from 'react'
import './App.css'

const App =() => {
  async function apicall() {
    const response = await fetch();

  const data = await response.json();
  console.log(data);
}

  return (
    <>
        <div>
        <h1>BOOK API</h1>
        <Button onClick={apicall}></Button>
        </div>
    </>
  )
}

export default App
