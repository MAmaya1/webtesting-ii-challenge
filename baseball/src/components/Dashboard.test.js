import React from 'react';
import Dashboard from '../components/Dashboard';
import Display from '../components/Display';

import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';

describe('<Dashboard/>', () => {
    it('renders dashboard', () => {
        render(<Dashboard/>)
    })

    it('should increment ball count', () => {
        const { getByText } = render(<Display/>)
        const button = getByText(/ball/i);
        fireEvent.click(button);
        getByText(/balls:/i)
    })

    it('should increment foul count', () => {
        const { getByText } = render(<Display/>)
        const button = getByText(/foul/i);
        fireEvent.click(button);
        getByText(/fouls:/i)
    })

    it('should increment strike count', () => {
        const { getByText } = render(<Display/>)
        const button = getByText(/strike/i);
        fireEvent.click(button);
        getByText(/strikes:/i)
    })

    it('should increment out count', () => {
        const { getByText } = render(<Display/>)
        const button = getByText(/out/i);
        fireEvent.click(button);
        getByText(/outs:/i)
    })
})

// Test data coming into display, test functionality in Dashboard