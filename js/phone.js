
// Calculate Plus Button
document.getElementById('btn-iPhone-plus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('iPhone-number-field', true);


    
    // const caseTotalPrice = updatedFieldValue * 1200;
    // document.getElementById('iPhone-total-price').innerText = caseTotalPrice;

    totalFieldPrice(updatedFieldValue, 'case-total-price');

});


// Calculate Minus Button
document.getElementById('btn-iPhone-minus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('iPhone-number-field', false);

    totalFieldPrice(updatedFieldValue, 'case-total-price');
});