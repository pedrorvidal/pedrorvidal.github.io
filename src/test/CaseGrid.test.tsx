import { beforeEach, describe, expect, it } from 'vitest';
import { screen, within, fireEvent } from '@testing-library/react';
import CaseGrid from '@/components/CaseGrid';
import { cases } from '@/data/cases';
import { renderWithProviders } from './render';

const visibleCases = cases.filter((c) => !c.secret);
const titles = () => screen.getAllByRole('article').map((a) => within(a).getByRole('heading').textContent);

describe('CaseGrid', () => {
  beforeEach(() => localStorage.setItem('pv-lang', 'en'));

  it('lists featured cases first, then the rest, hiding the secret stage', () => {
    renderWithProviders(<CaseGrid />);
    const featured = visibleCases.filter((c) => c.featured).map((c) => c.title);
    expect(titles()).toHaveLength(visibleCases.length);
    expect(titles().slice(0, featured.length)).toEqual(featured);
    expect(screen.queryByText(/This Portfolio/)).not.toBeInTheDocument();
  });

  it('filters by open source', () => {
    renderWithProviders(<CaseGrid />);
    fireEvent.click(screen.getByRole('button', { name: /Open source/ }));
    const personal = visibleCases.filter((c) => c.kind === 'personal');
    expect(titles()).toHaveLength(personal.length);
    expect(screen.getByRole('button', { name: /Open source/ })).toHaveAttribute('aria-pressed', 'true');
  });

  it('opens the modal and moves to the next stage', () => {
    renderWithProviders(<CaseGrid />);
    const [first, second] = titles();
    fireEvent.click(screen.getAllByRole('button', { name: /Inspect/ })[0]);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { level: 2 })).toHaveTextContent(first!);
    fireEvent.click(within(dialog).getByRole('button', { name: /Next stage/ }));
    expect(within(screen.getByRole('dialog')).getByRole('heading', { level: 2 })).toHaveTextContent(second!);
  });
});
