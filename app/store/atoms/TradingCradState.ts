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

interface IncedecvalueState {
  val: number;

  setInc: () => void;
  setdec: () => void;
}

export const useamountincdecStore = create<IncedecvalueState>((set) => ({
  val: 0,

  setInc: () =>
    set((state) => {
      if (state.val < 10) {
        return { val: state.val + 1 };
      }
      return state;
    }),
  setdec: () =>
    set((state) => {
      if (state.val > 0) {
        return { val: state.val - 1 };
      }
      return state;
    }),
}));
