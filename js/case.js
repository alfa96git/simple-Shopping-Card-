
// Calculate Plus Button
document.getElementById('btn-case-plus').addEventListener('click', function () {
    
    getCasePreviousValueById('case-number-field', true);

});


// Calculate Minus Button
document.getElementById('btn-case-minus').addEventListener('click', function () {

    getCasePreviousValueById('case-number-field', false);

});