function handleClick(event) {
  // Get the button text
  const button = event.target;
  const buttonText = button.innerText;

  // Get the current result
  const result = document.getElementById("result");

  // Check if the button is a number or an operator
  if (buttonText >= "0" && buttonText <= "9" || buttonText === ".") {
    // If the button is a number or decimal point, add it to the result
    result.value += buttonText;
  } else if (buttonText === "C") {
    // If the button is "C", clear the result
    result.value = "";
  } else if (buttonText === "=") {
    // If the button is "=", calculate the result
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  } else {
    // If the button is an operator, add it to the result
    result.value += " " + buttonText + " ";
  }
}

const buttons = document.querySelectorAll("#calculator button");

for (const button of buttons) {
  button.addEventListener("click", handleClick);
}