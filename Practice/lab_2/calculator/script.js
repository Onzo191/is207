const expressionDisplay = document.getElementById('expression-display');
const resultDisplay = document.getElementById('result-display');
let expression = '';
let lastInputIsOperator = false;

const appendToDisplay = (value) => {
  const lastChar = expression.slice(-1);
  if (isOperator(value)) {
    if (!lastInputIsOperator) {
      expression += ` ${value} `;
      lastInputIsOperator = true;
    } else if (value === '-' && lastChar !== '-') {
      expression += value;
    }
  } else {
    expression += value;
    lastInputIsOperator = false;
  }

  expressionDisplay.innerHTML = expression;
};

const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

const clearDisplay = () => {
  expression = '';
  expressionDisplay.innerHTML = '';
  resultDisplay.innerHTML = '0';
};

const clearEntry = () => {
  if (expression.charAt(expression.length - 1) === ' ') {
    expression = expression.slice(0, -2);
  } else {
    expression = expression.slice(0, -1);
  }
  expressionDisplay.innerHTML = expression;
  lastInputIsOperator = isOperator(expression.charAt(expression.length - 1));
  resultDisplay.innerHTML = '0';
};

const calculateResult = () => {
  if (expression.trim() === '') {
    resultDisplay.innerHTML = '0';
  } else {
    try {
      resultDisplay.innerHTML = eval(expression);
    } catch (error) {
      resultDisplay.innerHTML = 'Lỗi';
    }
  }
};
