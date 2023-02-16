function getCasePreviousValueById(caseFieldIdName, isTrue){
    const caseFieldName = document.getElementById(caseFieldIdName).value;
    const previousFieldValue = parseInt(caseFieldName);

    if( isTrue == true && previousFieldValue < 5){
        updatedFieldValue = previousFieldValue + 1;
        document.getElementById(caseFieldIdName).value = updatedFieldValue;
    } else if (isTrue == false && previousFieldValue >0){
        updatedFieldValue = previousFieldValue - 1;
        document.getElementById(caseFieldIdName).value = updatedFieldValue;
    } else{
        alert("Product Out-Of-Stock");
    }
}
