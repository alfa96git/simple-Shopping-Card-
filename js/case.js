



// Calculate Plus Button
document.getElementById('btn-case-plus').addEventListener('click', function () {
    
    const caseField = document.getElementById('case-number-field');
    const caseFieldString = caseField.value;
    const previousFieldValue = parseInt(caseFieldString);
    
    const fieldValueTotal = previousFieldValue + 1;
    
    caseField.value = fieldValueTotal;

});



// Calculate Minus Button
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseField = document.getElementById('case-number-field');
    const caseFieldString = caseField.value;
    const previousFieldValue = parseInt(caseFieldString);

    const fieldValueTotal = previousFieldValue - 1;

    caseField.value = fieldValueTotal;

});