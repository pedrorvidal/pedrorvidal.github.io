import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { useKonami } from '@/hooks/useKonami';

const press = (...keys: string[]) => keys.forEach((key) => fireEvent.keyDown(window, { key }));
const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

describe('useKonami', () => {
  it('fires after the full sequence', () => {
    const onUnlock = vi.fn();
    renderHook(() => useKonami(onUnlock));
    press(...CODE);
    expect(onUnlock).toHaveBeenCalledTimes(1);
  });

  it('accepts uppercase B/A and recovers from a wrong key', () => {
    const onUnlock = vi.fn();
    renderHook(() => useKonami(onUnlock));
    press('ArrowUp', 'x', ...CODE.slice(0, 8), 'B', 'A');
    expect(onUnlock).toHaveBeenCalledTimes(1);
  });

  it('ignores keys typed in form fields', () => {
    const onUnlock = vi.fn();
    renderHook(() => useKonami(onUnlock));
    const input = document.createElement('input');
    document.body.appendChild(input);
    CODE.forEach((key) => fireEvent.keyDown(input, { key }));
    expect(onUnlock).not.toHaveBeenCalled();
    input.remove();
  });
});
