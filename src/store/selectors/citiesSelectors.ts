import { RootState } from "../store";

export const selectActiveCity = (state: RootState) => state.cities.active;
export const selectCities = (state: RootState) => state.cities;
