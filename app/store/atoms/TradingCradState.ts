// store/TradingCardState.ts (Zustand equivalent of Recoil atom)

import { create } from "zustand";

interface TradingCardState {
  noOfTraders: number;
  title: string;
  description: string;
  setTradingCardState: (state: Partial<TradingCardState>) => void;
}

export const useTradingCardStore = create<TradingCardState>((set) => ({
  noOfTraders: 0,
  title: "Default Title",
  description: "Default Description",
  setTradingCardState: (state) =>
    set((currentState) => ({ ...currentState, ...state })),
}));
