export type Country = "ar" | "br" | "co" | "cl" | "pe" | "my" | "mx";
export type Language = "en" | "es" | "pt";

export const countries: Country[] = ["ar", "br", "co", "cl", "pe", "my", "mx"];
export const languages: Language[] = ["en", "es", "pt"];

export interface PageParams {
  country: Country;
  language: Language;
}

export interface PageProps {
  params: PageParams;
}

export const generateParams = async (): Promise<PageParams[]> =>
  countries.flatMap((country) =>
    languages.map((language) => ({
      country,
      language,
    }))
  );
