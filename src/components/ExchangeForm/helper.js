export const nonNumericRegex = /\D/g;

export const currencyFormatter = strAmount => {
    const arrValues = strAmount.split('.');

    const amount = arrValues[0].replace(nonNumericRegex, '');

    const formattedAmount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    const decimals = arrValues[1];

    let formattedResult = formattedAmount;

    if (decimals) {
        formattedResult = `${formattedResult}.${decimals.replace(nonNumericRegex, '')}`
    }

    return formattedResult;
}

export const currencyToFloat = strAmount => {
    const arrValues = strAmount.split('.');

    const amount = arrValues[0].replace(nonNumericRegex, '');

    
    const decimals = arrValues[1];
    let decimalLenght = 0;

    let formattedResult = amount;

    if (decimals) {
        formattedResult = `${formattedResult}.${decimals.replace(nonNumericRegex, '')}`;
        decimalLenght = decimals.length;
    }

    const floatAmount = parseFloat(formattedResult);
    console.log(floatAmount)


    return floatAmount.toFixed(decimalLenght);
}