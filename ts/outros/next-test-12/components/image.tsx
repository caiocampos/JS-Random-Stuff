import { Image as ImageNaturaDS } from "@naturacosmeticos/natds-web";
import { SizePropValue } from "@naturacosmeticos/natds-web/dist/hooks/useSizeStyleProp";
import React from "react";
import styles from "../styles/styles";

interface IImageProps {
  alt: string;
  src: string;
  maxWidth?: SizePropValue;
}

export class Image extends React.Component<IImageProps> {
  constructor(props: IImageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="row">
        <div
          style={{
            ...styles.centerRow,
            marginBottom: "20px",
            paddingBottom: "20px",
          }}
        >
          <ImageNaturaDS
            alt={this.props.alt ?? ""}
            src={this.props.src}
            maxWidth={this.props.maxWidth ?? "auto"}
          />
        </div>
      </div>
    );
  }
}
