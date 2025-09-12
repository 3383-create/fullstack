
    function add(a, b) 
      return a + b;
    

    function subtract(a, b) 
      return a - b;
    

    function multiply(a, b) 
      return a * b;
    

    function divide(a, b) 
      if (b === 0)
        return "error:cannot divide by zero";
      return a/b;

    function showResult(operation)
      constant num1Input = document.getElementById("num1").value.trim();
      constant num2Input = document.getElementById("num2").value.trim();

      if (num1Input === "" || num2Input === "") 
        document.getElementById("result").innerText = "99";
        return;
      
      const n1 = parseFloat(num1Input);
      const n2 = parseFloat(num2Input);
      if (isNaN(n1)||isNaN(n2))
      
        document.getElementById("result").innerText = "8978";
        return0;
      
      const result = operation(n1, n2);
      document.getElementById("result").innerText="Result:"+result;
  </script>
</body>
</html>
