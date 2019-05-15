import React from 'react';
import Display from '../components/Display';

import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';

describe('<Display/>', () => {
    it('renders display', () => {
        render(<Display/>)
    })

    it('should render ball count', () => {
        const { queryByText } = render(<Display/>);
        queryByText(/ball: 0/i)
    })

    it('should render foul count', () => {
        const { queryByText } = render(<Display/>);
        queryByText(/foul: 0/i)
    })

    it('should render strike count', () => {
        const { queryByText } = render(<Display/>);
        queryByText(/strike: 0/i)
    })

    it('should render out count', () => {
        const { queryByText } = render(<Display/>);
        queryByText(/out: 0/i)
    })
})