import { beforeEach, describe, expect, it } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';
import { renderWithProviders } from './render';

describe('Header', () => {
  beforeEach(() => localStorage.setItem('pv-lang', 'en'));

  it('switches the language, persists it and updates <html lang>', () => {
    renderWithProviders(<Header />);
    expect(screen.getAllByRole('link', { name: 'Stages' })[0]).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: 'Ver em português' })[0]);

    expect(screen.getAllByRole('link', { name: 'Fases' })[0]).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(localStorage.getItem('pv-lang')).toBe('pt');
  });

  it('toggles the dark theme class', () => {
    renderWithProviders(<Header />);
    expect(document.documentElement).toHaveClass('dark');
    fireEvent.click(screen.getAllByRole('button', { name: 'Switch to light theme' })[0]);
    expect(document.documentElement).toHaveClass('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });
});
