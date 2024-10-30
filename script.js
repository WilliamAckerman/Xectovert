const conversion = () => {
    const number = document.getElementById("number").value;
    const numValue = parseInt(number);

    const octBtn = document.getElementById("octBtn");
    const hexBtn = document.getElementById("hexBtn");

    const resultDiv = document.getElementById("resultDiv");
    const resultMessage = document.getElementById("resultMessage");
    const result = document.getElementById("result");

    let convertNum = 0;

    if(octBtn.checked) {
        // Outputs the message of what the number converted to octal is
        resultMessage.innerText = `${numValue} converted to octal is:`;

        // Converts the number to octal
        convertNum = numValue.toString(8);
    }
    else if(hexBtn.checked) {
        // Outputs the message of what the number converted to octal is
        resultMessage.innerText = `${numValue} converted to hexadecimal is:`;

        // Converts the number to hexadecimal
        convertNum = numValue.toString(16);

        // Any lowercase letters in the hexadecimal number are converted to uppercase
        convertNum = convertNum.toUpperCase();
    }

    // Updates the text of result to the converted number
    result.innerText = convertNum;

    // Displays resultDiv
    resultDiv.style.display = "block";

    // Used to prevent page refreshing upon form submission
    event.preventDefault();
}