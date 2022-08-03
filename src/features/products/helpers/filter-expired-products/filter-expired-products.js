import { getAmountOfDaysBetweenDates } from "../../../../utils";

export const filterExpiredProducts = (products) => {
    const todaysDate = new Date();
    const filteredProducts = [...products].filter((product) => {
        if (!product.expiryDate) return true;
        return getAmountOfDaysBetweenDates(new Date(product.expiryDate), todaysDate) >= 0;
    });
    return filteredProducts;
}