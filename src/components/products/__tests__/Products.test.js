import React from 'react';
import { renderWithProviders } from '../../../../__tests__/utils/test-utils';
import { Products } from '../products';


describe('Product tests', () => {
    it('renders the loader when there\'s no items', () => {
        const render = renderWithProviders(<Products items={[]} />);

        expect(render.asFragment()).toMatchSnapshot();
    });

    it('renders the items when we have some', () => {
        const render = renderWithProviders(<Products items={[
            {
                "id": 1,
                "product": "Pie",
                "cost": 3.20,
                "expiryDate": "2022-08-08T00:00:00.000Z"
            }
        ]} />);

        expect(render.asFragment()).toMatchSnapshot();
    });
})