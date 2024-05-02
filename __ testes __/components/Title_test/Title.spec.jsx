import { render, screen } from '@testing-library/react';
import Dashboard from '../../../src/pages/DashboardAgua';

describe('Test renderização de Title', () => {

    it('renderização do componente completo', () => {
      render(<Dashboard />);
      const title = screen.getByTestId('title');
      expect(title).toBeInTheDocument();
    });

  });
