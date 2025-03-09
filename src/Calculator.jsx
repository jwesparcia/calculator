import React, { useState } from 'react';

const Calculator = () => {
    const [num, setNum] = useState(""); 
    const [error, setError] = useState(false); 

    const handleButton = (value) => {
        if (error) {
            setError(false);
            setNum(value); 
        } else {
            setNum(prev => prev + value);
        }
    };

    const calculate = () => {
        try {
            setNum(eval(num).toString());  
        } catch {
            setError(true);
            setNum("Syntax error.");
        }
    };

    return (
        <>
            <div className="main">
                <div className="parent">
                    <input type="text" value={num} readOnly />
                    <button onClick={() => handleButton("7")}>7</button>
                    <button onClick={() => handleButton("8")}>8</button>
                    <button onClick={() => handleButton("9")}>9</button>
                    <button onClick={() => handleButton("+/-")}>+/-</button>
                    <button onClick={() => handleButton("→")}>→</button>
                    <button onClick={() => handleButton("4")}>4</button>
                    <button onClick={() => handleButton("5")}>5</button>
                    <button onClick={() => handleButton("6")}>6</button>
                    <button onClick={() => handleButton("*")}>*</button>
                    <button onClick={() => handleButton("/")}>/</button>
                    <button onClick={() => handleButton("1")}>1</button>
                    <button onClick={() => handleButton("2")}>2</button>
                    <button onClick={() => handleButton("3")}>3</button>
                    <button onClick={() => handleButton("-")}>-</button>
                    <button className="equal" onClick={calculate}>=</button>
                    <button className="C" onClick={() => { setNum(""); setError(false); }}>C</button>
                    <button onClick={() => handleButton("0")}>0</button>
                    <button onClick={() => handleButton(".")}>.</button>
                    <button onClick={() => handleButton("+")}>+</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;
