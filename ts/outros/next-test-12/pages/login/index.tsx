"use client";

import { useRouter } from "next/router";
import LoginPage from "../[country]/[language]/login";
import { Country, Language } from "../../commom/types";

const LoginDynamicPage = () => {
  const router = useRouter();
  const country = router.query.country;
  const language = router.query.language;

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
    <LoginPage country={country as Country} language={language as Language} />
  );
};

export default LoginDynamicPage;
