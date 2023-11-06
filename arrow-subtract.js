const subtract = (a, b) => a - b;

window.addEventListener("load", function(){
    const subtractA = Number(prompt("Select a number"));
    const subtractB = Number(prompt("Select another number"))
    let subtractTotal = subtract(subtractA, subtractB);
    document.body.innerHTML += `${subtractA} - ${subtractB} =` + subtractTotal;
    document.body.style.fontSize = "100px"
})