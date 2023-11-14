import React, { ReactNode } from "react";
import { styles } from "../styles/styles";
import { Logo, Image } from ".";
import {
  FlagArgentina,
  FlagBrasil,
  FlagChile,
  FlagColombia,
  FlagMalaysia,
  FlagPeru,
  FlagMexico,
} from "../assets/country-flags";
import { Typography } from "@naturacosmeticos/natds-web";
import packageJson from "../package.json";

interface ContainerProps {
  country?: string;
  company?: string;
  language?: string;
  extra?: ReactNode;
}

export class Container extends React.Component<ContainerProps> {
  public render(): JSX.Element {
    return (
      <div style={styles.containerView}>
        <div style={{ ...styles.container, textAlign: "center" }}>
          <Logo country={this.props.country} language={this.props.language} />
          {this.props.children}
          {this.props.country && (
            <Image
              src={this.getCountryFlag(this.props.country)}
              alt=""
              maxWidth="semi"
            />
          )}
          {this.props.extra}
        </div>
        <div style={{ position: "fixed", bottom: 0, right: "10px" }}>
          <Typography color="textSecondary" variant="caption">
            V-{packageJson.version}
          </Typography>
        </div>
      </div>
    );
  }

  private getCountryFlag(country: string): string {
    switch (country.toLowerCase()) {
      case "my":
        return FlagMalaysia;
      case "br":
        return FlagBrasil;
      case "co":
        return FlagColombia;
      case "cl":
        return FlagChile;
      case "pe":
        return FlagPeru;
      case "ar":
        return FlagArgentina;
      case "mx":
        return FlagMexico;
      default:
        return "";
    }
  }
}
