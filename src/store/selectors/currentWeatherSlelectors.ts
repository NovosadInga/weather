import { RootState } from "../store";

export const selectCurrentData = (state: RootState) => state.current.data;
export const selectCurrentAll = (state: RootState) => state.current;
