
import { useState } from 'react'
import './App.css'
import Container from './components/Container'

function App() {

   const [teme, setTema]=useState(false)
  return (
    <div className={`App ${teme ?"Ligth":""}`}>
      <span className='tema' onClick={()=>{setTema(!teme)}}><i className={`bx bx-${teme? "moon":"sun"}`}></i></span>
      <Container></Container>
    </div>
  )
}

export default App
