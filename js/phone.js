
// Calculate Plus Button
document.getElementById('btn-iPhone-plus').addEventListener('click', function () {
    
    getCasePreviousValueById('iPhone-number-field', true);

});


// Calculate Minus Button
document.getElementById('btn-iPhone-minus').addEventListener('click', function () {

    getCasePreviousValueById('iPhone-number-field', false);

});