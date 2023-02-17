
// Calculate Plus Button
document.getElementById('btn-case-plus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('case-number-field', true);

    const updatedProductPrice = totalCaseFieldPrice(updatedFieldValue, 'case-total-price');

    const caseTotalPrice = getSubTotalPriceById('case-total-price');

    totalProductAmount(caseTotalPrice, 0);

});


function totalProductAmount(casePrice, phonePrice) {
    // totalProductPrice = parseInt(updatedProductPrice);
    // console.log(updatedProductPrice, totalProductPrice);
    let totalAmount = casePrice + phonePrice;
    const subTotalPrice = document.getElementById('product-subtotal').innerText;
    document.getElementById('product-subtotal').innerText = totalAmount;
}



function getSubTotalPriceById(productAmount) {
    const productPrice = document.getElementById(productAmount).innerText;
    const updatedProductPrice = parseInt(productPrice);
    return updatedProductPrice;
}



// Calculate Minus Button
document.getElementById('btn-case-minus').addEventListener('click', function () {

    const updatedFieldValue = getCasePreviousValueById('case-number-field', false);

    const updatedProductPrice = totalCaseFieldPrice(updatedFieldValue, 'case-total-price');

    const caseTotalPrice = getSubTotalPriceById('case-total-price');


});

