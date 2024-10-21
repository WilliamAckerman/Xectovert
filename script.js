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
        resultMessage.innerText = `${numValue} converted to octal is:`;
        convertNum = numValue.toString(8);
    }
    else if(hexBtn.checked) {
        resultMessage.innerText = `${numValue} converted to hexadecimal is:`;
        convertNum = numValue.toString(16);
        convertNum = convertNum.toUpperCase();
    }

    result.innerText = convertNum;
    resultDiv.style.display = "block";

    event.preventDefault();
}