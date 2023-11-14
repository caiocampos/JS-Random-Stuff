"use client";

import LoginPage from "../[country]/[language]/login/page";
import { Country, Language } from "../[country]/[language]/types";
import { useSearchParams } from "next/navigation";

const LoginDynamicPage = () => {
  const query = useSearchParams();
  const country = query.get("country");
  const language = query.get("language");

  const errors = [];

  if (country == null) {
    errors.push({
      id: "country-missing",
      message: "parameter 'country' is missing",
    });
  }

  if (language == null) {
    errors.push({
      id: "language-missing",
      message: "parameter 'language' is missing",
    });
  }

  if (errors.length > 0) {
    return (
      <div>
        {errors.map((error) => (
          <div key={error.id}>{error.message}</div>
        ))}
      </div>
    );
  }

  return (
    <LoginPage
      params={{ country: country as Country, language: language as Language }}
    />
  );
};

export default LoginDynamicPage;
