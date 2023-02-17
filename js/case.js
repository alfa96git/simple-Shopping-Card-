
// Calculate Plus Button
document.getElementById('btn-case-plus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('case-number-field', true);


    // const caseTotalPrice = updatedFieldValue * 50;
    // document.getElementById('case-total-price').innerText = caseTotalPrice;

    totalFieldPrice(updatedFieldValue, 'case-total-price');

});


// Calculate Minus Button
document.getElementById('btn-case-minus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('case-number-field', false);
    totalFieldPrice(updatedFieldValue, 'case-total-price');

});

