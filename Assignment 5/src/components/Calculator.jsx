import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b === 0 ? "Cannot divide by zero" : a / b);
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={() => calculate("+")} style={styles.button}>+</button>
        <button onClick={() => calculate("-")} style={styles.button}>−</button>
        <button onClick={() => calculate("*")} style={styles.button}>×</button>
        <button onClick={() => calculate("/")} style={styles.button}>÷</button>
      </div>

      {result !== null && (
        <div style={styles.result}>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    width: "200px",
  },
  buttonContainer: {
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "18px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default Calculator;

