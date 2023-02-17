
// Calculate Plus Button
document.getElementById('btn-iPhone-plus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('iPhone-number-field', true);

    const updatedProductPrice = totalPhoneFieldPrice(updatedFieldValue, 'iPhone-total-price');

    getSubTotalPriceById(updatedProductPrice);

});


// Calculate Minus Button
document.getElementById('btn-iPhone-minus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('iPhone-number-field', false);

    const updatedProductPrice = totalPhoneFieldPrice(updatedFieldValue, 'iPhone-total-price');

    getSubTotalPriceById( updatedProductPrice);
});