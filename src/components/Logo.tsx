import { Img } from "@chakra-ui/react";
import * as React from "react";

interface LogoProps {
  type: string;
}

export const Logo = (props: LogoProps) => {
  const { type } = props;
  if (type === "light")
    return <Img src='/assets/Logo_wide_light.svg' alt='logo' maxH='12' />;
  else return <Img src='/assets/Logo_wide.svg' alt='logo' maxH='12' />;
};
