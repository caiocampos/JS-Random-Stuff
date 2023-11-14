import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { Logo as LogoNaturaDS } from "@naturacosmeticos/natds-web";
import { eloIsEnabled } from "../utils/elo-utils";
import { Country, Language } from "../commom/types";

export const Logo = ({country, language}: {country: string, language: string}): JSX.Element => {
  const useBModel = eloIsEnabled(country) && language === "pt";

  return (
    <div className="row" style={styles.logoView}>
      <div style={styles.logo}>
        <LogoNaturaDS model={useBModel ? "b" : "a"} />
      </div>
    </div>
  );
};
