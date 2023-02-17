
function getCasePreviousValueById(caseFieldIdName, isTrue) {
    const caseFieldName = document.getElementById(caseFieldIdName).value;
    const previousFieldValue = parseInt(caseFieldName);

    if (isTrue == true && previousFieldValue < 5) {
        updatedFieldValue = previousFieldValue + 1;

    } else if (isTrue == false && previousFieldValue > 0) {
        updatedFieldValue = previousFieldValue - 1;
    } else {
        alert("Product Out-Of-Stock");
    }

    document.getElementById(caseFieldIdName).value = updatedFieldValue;
    return updatedFieldValue;
}


function totalPhoneFieldPrice(updatedFieldValue, previousProductPrice) {

    const caseTotalPrice = updatedFieldValue * 1200;
    document.getElementById(previousProductPrice).innerText = caseTotalPrice;

    return caseTotalPrice;
}


function totalCaseFieldPrice(updatedFieldValue, previousProductPrice) {

    const caseTotalPrice = updatedFieldValue * 50;
    document.getElementById(previousProductPrice).innerText = caseTotalPrice;

    return caseTotalPrice;
}




function getSubTotalPriceById(updatedProductPrice) {

    // totalProductPrice = parseInt(updatedProductPrice);
    // console.log( updatedProductPrice, totalProductPrice);
    // const subTotalPrice = document.getElementById('product-subtotal').innerText;
    // document.getElementById('product-subtotal').innerText = totalProductPrice;

    document.getElementById('product-subtotal').innerText = parseInt(updatedProductPrice);
}

