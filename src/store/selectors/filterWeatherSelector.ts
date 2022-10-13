import { RootState } from "../store";

export const selectFilterActive = (state: RootState) => state.filter.active;
export const selectFilterAll = (state: RootState) => state.filter;
