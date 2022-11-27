function operations(operation) {
    var formInput = document.getElementById("display")
    switch (operation) {
        case "sqrt":
            formInput.value = Math.sqrt(formInput.value);
            break;
        case "ln":
            formInput.value = Math.log(formInput.value);
            break;
        case "exp":
            formInput.value = Math.exp(formInput.value);
            break;
        case "compute":
            formInput.value = eval(formInput.value);
            break;
        case "square":
            formInput.value = eval(formInput.value) * eval(formInput.value);
            break;
        default:
            break;
    }
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
                ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!")
                return false
            }
        }
    }
    return true
}

function addtoDisplay(keyPressed) {
    var formInput = document.getElementById("display")
    if (formInput.value == null || formInput.value == "0")
        formInput.value = keyPressed
    else
        formInput.value += keyPressed
}

function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

function onErase() {
    var formInput = document.getElementById("display")
    formInput.value = formInput.value.substring(0, formInput.value.length - 1)
}
var val = 0.0;

function percent(input) {
    val = input.value;
    input.value = input.value + "%";
}