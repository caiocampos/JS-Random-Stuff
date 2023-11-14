import { Country } from "../commom/types";

export const eloIsEnabled = (country: string): boolean =>
  ["co"].includes(country);

export const showCountryFlag = (
  country?: Country,
  alwaysShowFlag = false
): Country | undefined =>
  country && (alwaysShowFlag || !eloIsEnabled(country)) ? country : undefined;
