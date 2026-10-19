import { createContext, useContext } from 'react';

export interface CheatContextValue {
  cheat: boolean;
  toggleCheat: () => void;
}

export const CheatContext = createContext<CheatContextValue>({
  cheat: false,
  toggleCheat: () => {},
});

export const useCheat = () => useContext(CheatContext);
