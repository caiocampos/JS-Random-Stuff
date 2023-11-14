import React, { CSSProperties } from "react";
import { Typography, Link as LinkNaturaDS } from "@naturacosmeticos/natds-web";

interface ILink {
  url: string;
  text: string;
  style?: CSSProperties;
}

export const Link = ({ url, text, style }: ILink) => (
  <Typography paragraph>
    <LinkNaturaDS
      color="textPrimary"
      href={url}
      underline="none"
      variant="body2"
      style={style}
    >
      {text}
    </LinkNaturaDS>
  </Typography>
);
