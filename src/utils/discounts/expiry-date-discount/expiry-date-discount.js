import { convertCurrencyToNumber } from "../../convert-currency-to-number";
import { formatToCurrency } from "../../format-to-currency";
import { getAmountOfDaysBetweenDates } from "../../get-amount-of-days-between-dates";

export const expiryDateDiscount = (item, percentDiscount) => {
    const todaysDate = new Date();
    if (getAmountOfDaysBetweenDates(new Date(item.expiryDate), todaysDate) === 0) {
        item.discountPrice = formatToCurrency(convertCurrencyToNumber(item.cost) * percentDiscount);
    }
    return item;
};