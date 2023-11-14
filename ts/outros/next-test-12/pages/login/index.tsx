import { useRouter } from "next/router";
import LoginPage from "../[country]/[language]/login";
import { Country, Language } from "../../commom/types";
import { useEffect, useState } from "react";

const LoginDynamicPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (router.query.country) {
      setCountry(router.query.country as string);
    }
    if (router.query.language) {
      setLanguage(router.query.language as string);
    }
    setLoading(false);
  }, [router]);

  const errors = [];

  if (loading) {
    return <></>;
  }

  if (country === undefined) {
    errors.push({
      id: "country-missing",
      message: "parameter 'country' is missing",
    });
  }

  if (language === undefined) {
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
