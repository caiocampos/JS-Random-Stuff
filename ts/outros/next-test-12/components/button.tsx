import styles from "../styles/styles";
import React from "react";
import { Button as ButtonNaturaDS } from "@naturacosmeticos/natds-web";

interface IButtonProps {
  text?: string;
  color?: "default" | "inherit" | "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  navigationPath?: string;
  style?: React.CSSProperties | undefined;
  containerStyle?: React.CSSProperties | undefined;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick(event: React.FormEvent<HTMLButtonElement>): Promise<void>;
  itemRef?: React.RefObject<HTMLButtonElement>;
  id?: string;
  keepEnabled?: boolean;
}

interface IButtonInputState {
  loading: boolean;
}

export class Button extends React.Component<IButtonProps, IButtonInputState> {
  public constructor(props: IButtonProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      containerStyle,
      id,
      disabled,
      color,
      variant,
      style,
      itemRef,
      text,
    } = this.props;
    return (
      <div className="row" style={{ ...styles.buttonView, ...containerStyle }}>
        <ButtonNaturaDS
          id={id}
          onClick={async (event) => this.handleButtonClick(event)}
          disabled={disabled || this.state?.loading}
          color={color ?? "primary"}
          variant={variant ?? "contained"}
          fullWidth
          style={style}
          ref={itemRef}
          type="button"
        >
          {text}
        </ButtonNaturaDS>
      </div>
    );
  }

  private async handleButtonClick(
    event: React.FormEvent<HTMLButtonElement>
  ): Promise<void> {
    if (!this.props.keepEnabled) {
      this.setState({ loading: true });
    }
    await this.props.onClick(event);
    if (!this.props.keepEnabled) {
      this.setState({ loading: false });
    }
  }
}
