import { useState } from "react";

function Calculator () {
    const [clicked,setClicked] = useState("");

    const calculateResult  = () =>{
        try{
            setClicked(eval(clicked))
        }catch{
            setClicked("error")
        }
    }

    return(
    <>
        <div className="main-container">
            <input className="output" readOnly placeholder='0' value={clicked}></input>
            <button onClick={()=>setClicked((prev) => prev+ "7")}>7</button>
            <button onClick={()=>setClicked((prev) => prev + "8")}>8</button>
            <button onClick={()=>setClicked((prev) => prev+9)}>9</button>
            <button className="operator" onClick={()=>setClicked((prev => prev + " + "))}>+</button>
            <button onClick={()=>setClicked((prev => prev + "4"))}>4</button>
            <button onClick={()=>setClicked((prev => prev + "5"))}>5</button>
            <button onClick={()=>setClicked((prev => prev + "6"))}>6</button>
            <button className="operator" onClick={()=>setClicked((prev => prev + " - "))}>-</button>
            <button onClick={()=>setClicked((prev => prev + "1"))}>1</button>
            <button onClick={()=>setClicked((prev => prev + "2"))}>2</button>
            <button onClick={()=>setClicked((prev => prev + "3"))}>3</button>
            <button className="operator" onClick={()=>setClicked((prev => prev + " * "))}>*</button>
            <button onClick={()=>setClicked((prev => prev + "0"))}>0</button>
            <button onClick={()=>setClicked((prev => prev + "."))}>.</button>
            <button className="c" onClick={() => setClicked("")}>C</button>
            <button className="operator" onClick={()=>setClicked((prev => prev + " / "))}>/</button>
            <button className="equal" onClick={calculateResult}>=</button>
        </div>
    </>
    );
}

export default Calculator;