import './App.css'
import React,{useState} from 'react'


function App() {
    const [input,setInput] = useState('')
    const [error,setError] = useState(false)

    const click = (value) =>
    {
        setInput((prevInput)=>prevInput+value)
    }
    const calculate = ()=>
    {
        try{
            setInput(eval(input).toString());
        }
        catch(error){
            setInput('Syntax Error')
            setError(true)
        }
    }
    const clear = () =>
    {
        setInput('')
    }
    const del = () =>
    {
        setInput((prevInput)=>prevInput.slice(0,-1))
    }
  return (
    <>
            <div className="calculator">
                <input type="text" value={input} className='output' readOnly />
                <button className='span' onClick={clear}>AC</button>
                <button className='del' onClick={del}>DEL</button>
                <button onClick={()=> click('%')}>%</button>
                <button onClick={()=> click('1')}>1</button>
                <button onClick={()=> click('2')}>2</button>
                <button onClick={()=> click('3')}>3</button>
                <button onClick={()=> click('*')}>*</button>
                <button onClick={()=> click('4')}>4</button>
                <button onClick={()=> click('5')}>5</button>
                <button onClick={()=> click('6')}>6</button>
                <button onClick={()=> click('+')}>+</button>
                <button onClick={()=> click('7')}>7</button>
                <button onClick={()=> click('8')}>8</button>
                <button onClick={()=> click('9')}>9</button>
                <button onClick={()=> click('-')}>-</button>
                <button onClick={()=> click('.')}>.</button>
                <button onClick={()=> click('0')}>0</button>
                <button onClick={calculate} className='span'>=</button>
            </div>
             
    </>
  )
}

export default App