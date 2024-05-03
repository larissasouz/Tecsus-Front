import { render, screen } from '@testing-library/react';
import Dashboard from '../../../src/pages/DashboardAgua';

describe('Test renderização de Dashboard', () => {

    it('renderização do sidebar', () => {
      render(<Dashboard />);
      const sidebar = screen.getByTestId('sidebar');
      expect(sidebar).toBeInTheDocument();
    });

    it('renderização do title', () => {
        render(<Dashboard />);
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
      });

      it('renderização do powerBi', () => {
        render(<Dashboard />);
        const powerbi = screen.getByTestId('powerbi');
        expect(powerbi).toBeInTheDocument();
      });
  
  });

  