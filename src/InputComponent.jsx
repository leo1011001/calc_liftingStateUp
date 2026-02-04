import React from 'react';
import './InputComponent.css';

function InputComponent({ inputs, onInputChange, onCalculate, onReset }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const getOperationName = (operation) => {
    switch (operation) {
      case '+': return 'Събиране';
      case '-': return 'Изваждане';
      case '*': return 'Умножение';
      case '/': return 'Деление';
      default: return operation;
    }
  };

  return (
    <div className="input-container">
      <h2 className="input-title">Въвеждане на данни</h2>
      
      <div className="input-group">
        <label className="input-label">
          Първо число:
          <input
            type="number"
            name="number1"
            value={inputs.number1}
            onChange={handleChange}
            placeholder="Въведете число"
            className="number-input"
          />
        </label>
      </div>

      <div className="input-group">
        <label className="input-label">
          Второ число:
          <input
            type="number"
            name="number2"
            value={inputs.number2}
            onChange={handleChange}
            placeholder="Въведете число"
            className="number-input"
          />
        </label>
      </div>

      <div className="input-group">
        <label className="input-label">
          Избор на операция:
          <select
            name="operation"
            value={inputs.operation}
            onChange={handleChange}
            className="operation-select"
          >
            <option value="+">Събиране (+)</option>
            <option value="-">Изваждане (-)</option>
            <option value="*">Умножение (×)</option>
            <option value="/">Деление (÷)</option>
          </select>
        </label>
      </div>

      <div className="button-group">
        <button 
          onClick={onCalculate}
          className="calculate-button"
          disabled={!inputs.number1 || !inputs.number2}
        >
          Изчисли
        </button>
        
        <button 
          onClick={onReset}
          className="reset-button"
        >
          Изчисти
        </button>
      </div>

      <div className="current-values">
        <h3>Текущи стойности:</h3>
        <p>Число 1: <strong>{inputs.number1 || 'не е въведено'}</strong></p>
        <p>Число 2: <strong>{inputs.number2 || 'не е въведено'}</strong></p>
        <p>Операция: <strong>{getOperationName(inputs.operation)}</strong></p>
      </div>
    </div>
  );
}

export default InputComponent;