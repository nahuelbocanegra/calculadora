import React, { useState } from "react";

export default function Container() {
  const [result, setResult]=useState("")

  const handleClick=(e)=>{
     setResult(result.concat(e.target.name))
  }
  const total=()=>{
     try {
      const resultado= eval(result.toString());
      setResult(resultado.toString());
     

     } catch (error) {
       setResult("Error")
     }
  }  
  return (
    <section className="calculadora">
      <article className="tv">
        <input className="div-tv" value={result} onChange={(e)=>{setResult(e.target.value)}}/>
      </article>
      <article className="cal-fun">
        <button name="1" onClick={handleClick} className="data uno">1</button>
        <button name="2" onClick={handleClick} className="data dos">2</button>
        <button name="3" onClick={handleClick} className="data tres">3</button>
        <button name="4" onClick={handleClick} className="data cuatro">4</button>
        <button name="5" onClick={handleClick} className="data cinco">5</button>
        <button name="6" onClick={handleClick} className="data seis">6</button>
        <button name="7" onClick={handleClick} className="data siete">7</button>
        <button name="8" onClick={handleClick} className="data ocho">8</button>
        <button name="9" onClick={handleClick} className="data nueve">9</button>
        <button name="0" onClick={handleClick} className="data cero">0</button>
        <button  onClick={()=>{total()}} className="data igual">=</button>
        <button name="*" onClick={handleClick} className="data multi">x</button>
        <button name="+" onClick={handleClick} className="data suma">+</button>
        <button name="-" onClick={handleClick} className="data resta">-</button>
        <button name="." onClick={handleClick} className="data punto">.</button>
        <button name="/" onClick={handleClick} className="data division">/</button>
        <button name="c" onClick={()=>{setResult("")}} className="data borrar">c</button>
      </article>
    </section>
  );
}
