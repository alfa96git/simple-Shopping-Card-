// Get Case Value using getCaseValueById function.
function getCaseValueById(caseValue){
    const caseValues = document.getElementById(caseValue);
    const caseValueString = caseValues.value;
    const updatedCaseValue = parseInt(caseValueString);

    caseValues.value = updatedCaseValue;

    const caseValueTotal = updatedCaseValue + 1;
    caseValueTotal.innerText = caseValues;
    // return updatedCaseValue;
}



// Get Previous Case Value as a Integer.
function getFieldValueById(caseValue){
    const caseField = document.getElementById(caseValue);
    const caseFieldString = caseValue.innerText;
    const previousFieldValue = parseInt(caseValueString);

    return previousCaseValue;
}
