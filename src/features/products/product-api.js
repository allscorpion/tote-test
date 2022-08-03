import productsJson from './__mocks__/products.json';

// A mock function to mimic making an async request for data
export const getProducts = () => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve({ data: productsJson }), 2000);
    });
}