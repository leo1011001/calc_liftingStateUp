import React from 'react';
import './ResultComponent.css';

function ResultComponent({ result, error, inputs }) {
  const getOperationSymbol = (operation) => {
    switch (operation) {
      case '+': return '+';
      case '-': return '-';
      case '*': return '×';
      case '/': return '÷';
      default: return operation;
    }
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
    <div className="result-container">
      <h2 className="result-title">Резултат</h2>
      
      <div className="expression-display">
        <div className="expression-box">
          <span className="expression-number">{inputs.number1 || '?'}</span>
          <span className="expression-operator">
            {getOperationSymbol(inputs.operation)}
          </span>
          <span className="expression-number">{inputs.number2 || '?'}</span>
          <span className="expression-equals">=</span>
        </div>
      </div>

      {error ? (
        <div className="error-display">
          <div className="error-icon">⚠️</div>
          <div className="error-message">{error}</div>
        </div>
      ) : result !== null ? (
        <div className="result-display">
          <div className="result-value">
            {result.toLocaleString('bg-BG', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 6
            })}
          </div>
          <div className="result-details">
            <p>Резултат от {getOperationName(inputs.operation).toLowerCase()}</p>
          </div>
        </div>
      ) : (
        <div className="placeholder-display">
          <p className="placeholder-text">
            Въведете числа и изберете операция, след което натиснете "Изчисли"
          </p>
        </div>
      )}

      <div className="info-section">
        <h3 className="info-title">Информация за операцията:</h3>
        <ul className="info-list">
          <li>
            <strong>Събиране (+):</strong> Добавяне на две числа
          </li>
          <li>
            <strong>Изваждане (-):</strong> Изваждане на второто число от първото
          </li>
          <li>
            <strong>Умножение (×):</strong> Умножаване на две числа
          </li>
          <li>
            <strong>Деление (÷):</strong> Деление на първото на второто число
          </li>
        </ul>
      </div>

      <div className="lifting-state-info">
        <p>
          <strong>Lifting State Up:</strong> Състоянието се управлява от родителския компонент и се предава като props към този компонент.
        </p>
      </div>
    </div>
  );
}

export default ResultComponent;