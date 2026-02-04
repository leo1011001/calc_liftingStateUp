import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ResultComponent from './ResultComponent';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    number1: '',
    number2: '',
    operation: '+'
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateResult = (num1, num2, operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setError('Моля, въведете валидни числа!');
      setResult(null);
      return;
    }

    let calculationResult;
    switch (operation) {
      case '+':
        calculationResult = n1 + n2;
        break;
      case '-':
        calculationResult = n1 - n2;
        break;
      case '*':
        calculationResult = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setError('Грешка: деление на 0 е невъзможно!');
          setResult(null);
          return;
        }
        calculationResult = n1 / n2;
        break;
      default:
        calculationResult = 0;
    }

    setError('');
    setResult(calculationResult);
  };

  const handleInputChange = (name, value) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = () => {
    calculateResult(inputs.number1, inputs.number2, inputs.operation);
  };

  const handleReset = () => {
    setInputs({
      number1: '',
      number2: '',
      operation: '+'
    });
    setResult(null);
    setError('');
  };

  return (
    <div className="app">
      <h1 className="app-title">React Калкулатор</h1>
      <p className="app-subtitle">Пример, използвайки Lifting State Up</p>
      
      <div className="app-container">
        <InputComponent 
          inputs={inputs}
          onInputChange={handleInputChange}
          onCalculate={handleCalculate}
          onReset={handleReset}
        />
        
        <ResultComponent 
          result={result}
          error={error}
          inputs={inputs}
        />
      </div>
      
      <div className="instructions">
        <h3>Как работи?</h3>
        <ol>
          <li>Въведете две числа</li>
          <li>Изберете операция</li>
          <li>Натиснете "Изчисли"</li>
          <li>Вижте резултата отдясно</li>
        </ol>
        <p className="state-info"><strong>Важно:</strong> Състоянието се съхранява в родителския компонент (App.js) и се предава надолу към децата.</p>
      </div>
    </div>
  );
}

export default App;