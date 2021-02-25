import React, { FC } from "react";
import { Container } from "@material-ui/core";

export const PageLayout: FC = ({ children }: any) => {
  return <Container >{children}</Container>;
};
