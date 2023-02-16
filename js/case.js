function getCaseFieldNumberById(caseValue){
    const caseFieldNumber = document.getElementById(caseValue);
    const caseFieldNumberString = caseFieldNumber.value;
    const previousCaseFieldNumber = parseInt(caseFieldNumberString);

    const newCaseFieldNumber = previousCaseFieldNumber + 1;
     caseFieldNumber.value = newCaseFieldNumber;
}







// Calculate Plus Button
document.getElementById('btn-case-plus').addEventListener('click', function () {
    
    const caseField = document.getElementById('case-number-field');
    const caseFieldString = caseField.value;
    const previousFieldValue = parseInt(caseFieldString);
    
    const fieldValueTotal = previousFieldValue + 1;
    
    caseField.value = fieldValueTotal;


    // getCaseFieldNumberById('case-number-field');
});



// Calculate Minus Button
document.getElementById('btn-case-minus').addEventListener('click', function () {

    // const caseFieldNumber = document.getElementById('case-number-field');
    // const caseFieldNumberString = caseFieldNumber.value;
    // const previousFieldNumberValue = parseInt(caseFieldNumberString);

    // const newCaseFieldValueNumber = previousFieldNumberValue - 1;

    // caseFieldNumber.value = newCaseFieldValueNumber;

    getCaseFieldNumberById('case-number-field');
});