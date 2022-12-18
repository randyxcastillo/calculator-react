import "./Calculator.css"
import * as math from 'mathjs';
import {useState, useRef } from "react";


const Calculator = () => {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("");
  const ref = useRef(null);
  
  function getVal(text) {
    switch (text) {
      case '+':
        return '+'
      case 'x':
        return '*'
      case '√':
        return 'sqrt('
      case 'x!':
        return '!'
      case '−':
        return '-'
      case '÷':
        return '/'
      case 'tan':
        return 'tan(deg '
      case 'cos':
        return 'cos(deg '
      case 'x y':
        return '^'
      case 'sin':
        return 'sin(deg '
      case 'log':
        return 'log('
      case 'ln':
        return 'ln('
      case 'EXP':
        return '*10^'
      default:
        return text;
    }
  }

  function ln2log() {
    const ln = 'ln(', closure = ')', val = input
    let start = val.indexOf(ln)
    let end = val.indexOf(closure, start)
    let num = val.substring(start + 3, end);
  
    if (start !== -1) {
      setInput(val.substring(0, start) + "log(" + num + ",e)" + val.substring(end + 1, val.length))
    }
  }
  

  return (
    <div ref={ref} className="wrapper">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.3.1/math.js"
        integrity="sha512-Q1qOFs0DNtp9bviP8uSyPm0d1ES7zw8BXZ7AF2XCWIVKHObK6U7mkMZ+SGOf1vF71zI/60lO+FjBTrzaYGRqnw=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <div className="buttons">
        <div className="output">
          <input type="text" className="result" value={result} disabled="disabled" />
          <input type="text" className="input" value={input} disabled="disabled" placeholder="0" />
        </div>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>Deg</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>x!</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>(</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>)</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>%</button>
        <button className="function-buttton" onClick={() => {
          setResult("")
          setInput("")
        }}>AC</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>sin</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>ln</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>7</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>8</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>9</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>÷</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>cos</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>log</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>4</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>5</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>6</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>x</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>tan</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>√</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>1</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>2</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>3</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>−</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>EXP</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>x <span className="exponent">y</span></button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>0</button>
        <button className="number-button" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>.</button>
        <button className="result-button" onClick={() => {
          try {
            ln2log()
            let res = math.evaluate(input);
            math.format(res, { precision: 10 });
            setResult(res)
            setInput("")
          } catch (error) {
            setResult("Error!")
            setInput("")
          }
        }}>=</button>
        <button className="function-buttton" onClick={(e) => {setInput(input + getVal(e.target.innerText))}}>+</button>
      </div>
    </div>
  )
}

export default Calculator;