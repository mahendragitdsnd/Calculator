function Solve(val) {
    const display = document.getElementById("result");

    if (display.value === "0" && val !== ".") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function Result() {
    const input = document.getElementById("result").value;
    let output;

    try {
        output = math.evaluate(input);
    } catch (error) {
        output = "Error";
    }

    document.getElementById("result").value = output;
}

function Clear() {
    document.getElementById("result").value = "0";
}
