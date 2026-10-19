import { describe, expect, it } from 'vitest';
import { cases, localizeCase } from '@/data/cases';

describe('cases data', () => {
  it('has unique ids', () => {
    const ids = cases.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has a Portuguese summary for every case', () => {
    cases.forEach((c) => {
      expect(c.pt?.summary, c.id).toBeTruthy();
      expect(localizeCase(c, 'pt').summary).toBe(c.pt?.summary);
    });
  });

  it('keeps English text when language is en', () => {
    cases.forEach((c) => expect(localizeCase(c, 'en').summary).toBe(c.summary));
  });
});
