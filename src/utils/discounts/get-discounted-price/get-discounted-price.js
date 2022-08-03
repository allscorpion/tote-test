import { convertCurrencyToNumber } from "../../convert-currency-to-number";
import { formatToCurrency } from "../../format-to-currency";

const checkMealDeal = (chips, pies, i, x) => {
    const mealDealDiscount = 0.8;
    const chip = chips[i];
    const pie = pies[x];

    if (!pie) {
        return;
    }

    const mealDealCost = (chip.cost * mealDealDiscount) + (pie.cost * mealDealDiscount);
    if (pie.dealApplied || (pie.discountPrice && pie.discountPrice < mealDealCost)) {
        // discounted price is better so don't apply the meal deal discount
        checkMealDeal(chips, pies, i, i + 1);
        return;
    }

    pie.dealApplied = true;
    pie.discountPrice = formatToCurrency(convertCurrencyToNumber(pie.cost) * mealDealDiscount);
    chip.discountPrice = formatToCurrency(convertCurrencyToNumber(chip.cost) * mealDealDiscount);
};

export const getDiscountedPrice = (items) => {

    const pies = items.filter(x => x.product === 'Pie');
    const chips = items.filter(x => x.product === 'Chips');

    console.log(pies, chips);

    for (let i = 0; i < chips.length; i++) {
        checkMealDeal(chips, pies, i, i);
    }

    return formatToCurrency([...pies, ...chips].reduce((acc, item) => {
        return acc + convertCurrencyToNumber(item.discountPrice || item.cost);
    }, 0));
};