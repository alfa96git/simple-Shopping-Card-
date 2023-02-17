
function getCasePreviousValueById(caseFieldIdName, isTrue) {
    const caseFieldName = document.getElementById(caseFieldIdName).value;
    const previousFieldValue = parseInt(caseFieldName);

    if (isTrue == true && previousFieldValue < 5) {
        updatedFieldValue = previousFieldValue + 1;

    } else if (isTrue == false && previousFieldValue > 1) {
        updatedFieldValue = previousFieldValue - 1;
    } else {
        alert("Product Out-Of-Stock");
    }

    document.getElementById(caseFieldIdName).value = updatedFieldValue;
    return updatedFieldValue;
}




function totalFieldPrice(updatedFieldValue, previousProductPrice) {
    const caseTotalPrice = updatedFieldValue * 50;
    document.getElementById(previousProductPrice).innerText = caseTotalPrice;
}