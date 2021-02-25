import React, { FC } from "react";
import { PageLayout } from "../PageLayouts/PageLayout";
import Typography from "@material-ui/core/Typography";
import { OperatorMenu } from "../Components/OperatorMenu";

export const MainPage: FC = () => {
  return (
    <PageLayout>
      <OperatorMenu />
      <Typography variant="h1" component="h2" className="main-title">
        Choose your operator
      </Typography>
    </PageLayout>
  );
};
