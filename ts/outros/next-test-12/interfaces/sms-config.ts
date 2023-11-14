import { Country } from "../commom/types";

export interface SMSConfig {
  resend?: ResendSMSConfig;
  reset?: ResetSMSConfig;
}

interface ResendSMSConfig {
  countries: Country[];
}

interface ResetSMSConfig {
  countries: Country[];
}
