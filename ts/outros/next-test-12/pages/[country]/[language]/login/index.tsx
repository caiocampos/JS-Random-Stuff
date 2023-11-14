import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Country,
  Language,
  PageParams,
  countries,
  generateParams,
  languages,
} from "../../../../commom/types";
import { Button, Input, Link } from "../../../../components";
import { Container } from "../../../../components/container";
import styles from "../../../../styles/styles";
import { Provider, buildTheme } from "@naturacosmeticos/natds-web";
import { eloIsEnabled } from "../../../../utils/elo-utils";
import { ThemeBrandName } from "@naturacosmeticos/natds-web/dist/Themes/ThemeBrandName";
import { IThemeWebBase } from "@naturacosmeticos/natds-web/dist/Themes/IThemeWeb";

export const getSelectedTheme = (
  company: string,
  country: Country
): IThemeWebBase => {
  if (eloIsEnabled(country)) {
    return buildTheme("consultoriaDeBeleza", "light");
  }
  return buildTheme(getSelectedCompany(company), "light");
};

export const getSelectedCompany = (company: string): ThemeBrandName => {
  if (company === "avon") {
    return "avon";
  } else {
    return "natura";
  }
};

const defaultCompany = "natura";

const LoginPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = getSelectedTheme(defaultCompany, props.country);
  return (
    <Provider theme={theme}>
      <Container
        country={props.country}
        language={props.language}
        company={defaultCompany}
      >
        <div className="row" style={styles.centerRow}>
          <div style={{ width: "300px", margin: "10px" }}>
            <Input
              id="username"
              type="text"
              value=""
              placeholder="username"
              onChange={(): void => {}}
              helpText=""
              state=""
              autoComplete="off"
            />
          </div>
        </div>

        <div className="row" style={styles.centerRow}>
          <div
            className="passwordInput"
            style={{ width: "300px", margin: "10px" }}
          >
            <Input
              id="password"
              type="password"
              placeholder="password"
              onChange={(): void => {}}
              helpText=""
              state=""
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row" style={styles.centerRow}>
          <div style={{ margin: "10px", width: "300px" }}>
            <Button
              id="signInButton"
              onClick={async (): Promise<void> => {}}
              text="login"
              keepEnabled={true}
            />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Link
            style={{ fontWeight: "bold" }}
            text="Forgot password?"
            url="/forgot-password"
          />
        </div>
        <Link
          style={{ fontWeight: "bold" }}
          text="Resend first access email"
          url="/resend-temporary-password"
        />
      </Container>
    </Provider>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const hasCountry = countries.includes(context.params?.country as Country);
  const hasLanguage = languages.includes(context.params?.language as Language);

  if (!hasCountry || !hasLanguage) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      country: context.params.country,
      language: context.params.language,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsWithParams = (await generateParams()).map(
    ({ country, language }: PageParams) => ({ params: { country, language } })
  );
  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default LoginPage;
