<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Calculator with Functions</title>
</head>
<body>
  <h2>Calculator (Addition, Subtraction, Multiplication, Division)</h2>
  <input type="number" id="num1" placeholder="Enter first number" />
  <input type="number" id="num2" placeholder="Enter second number" />
  <br /><br />
  <button onclick="showResult(add)">Add</button>
  <button onclick="showResult(subtract)">Subtract</button>
  <button onclick="showResult(multiply)">Multiply</button>
  <button onclick="showResult(divide)">Divide</button>
  <p id="result">Result: </p>

  <script>
    function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    function multiply(a, b) {
      return a * b;
    }

    function divide(a, b) {
      if (b === 0) {
        return "❌ Cannot divide by zero!";
      }
      return a / b;
    }

    function showResult(operation) {
      const num1Input = document.getElementById("num1").value.trim();
      const num2Input = document.getElementById("num2").value.trim();

      if (num1Input === "" || num2Input === "") {
        document.getElementById("result").innerText = "⚠️ Enter both numbers.";
        return;
      }

      const n1 = parseFloat(num1Input);
      const n2 = parseFloat(num2Input);

      if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerText = "⚠️ Please enter valid numbers.";
        return;
      }

      const result = operation(n1, n2);
      document.getElementById("result").innerText = "Result: " + result;
    }
  </script>
</body>
</html>
