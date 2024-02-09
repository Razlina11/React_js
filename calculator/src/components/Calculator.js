import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

function Calculator() {
    const [expression, setExpression] = useState('');

    const handleClick = (value) => {
        setExpression(prevExpression => prevExpression + value);
    };

    const calculateResult = () => {
        try {
            const result = evaluate(expression);
            setExpression(result.toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    const clearInput = () => {
        setExpression('');
    };

    return (
        <div className="calculator">
            <input type="text" value={expression} disabled />
            <div className="buttons">
                <div className="button-row">
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('/')}>/</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('*')}>*</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('-')}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button onClick={calculateResult}>=</button>
                    <button onClick={() => handleClick('+')}>+</button>
                </div>
                <div className="button-row">
                    <button onClick={clearInput}>Clear</button>
                </div>
            </div>
        </div>
    );
}
export default Calculator;
