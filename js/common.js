function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getTextValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}

function setValueById(id, value) {
    const elementField = document.getElementById(id);
    elementField.innerText = value;
}