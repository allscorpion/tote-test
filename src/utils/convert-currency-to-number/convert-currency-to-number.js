export const convertCurrencyToNumber = (currency) => {
    return parseFloat(currency.replace(/,/g, ''));
};