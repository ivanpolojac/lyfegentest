import { render, screen } from '@testing-library/react';
import LaunchCard from './index';

describe('Launch Card', () => {
  test('Renders without issues', () => {
    const launch = {
      name: 'Test Launch',
      details: 'Test Details',
    };
    render((
      <LaunchCard launch={launch} />
    ));
    const labelElement = screen.getByText(launch.name);
    expect(labelElement).toBeInTheDocument();
  });

  test('Renders No Data when noData param is true', () => {
    render((
      <LaunchCard noData />
    ));
    const labelElement = screen.getByText('No Data');
    expect(labelElement).toBeInTheDocument();
  });
});
