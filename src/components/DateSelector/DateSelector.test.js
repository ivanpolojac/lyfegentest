import { render, screen } from '@testing-library/react';
import { DateTime } from 'luxon';
import DateSelector from './index';

import TestProvider from 'tests/TestProvider';

describe('Date Selector', () => {
  test('Renders without issues', () => {
    render((
      <TestProvider>
        <DateSelector value={DateTime.now()} onChange={() => {}} />
      </TestProvider>
    ));
    const labelElement = screen.getAllByText(/Launch Date/i);
    expect(labelElement).toHaveLength(2);
  });
});
