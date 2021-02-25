import React, { FC } from "react";
import { PageLayout } from "../PageLayouts/PageLayout";
import { RefillForm } from "../Components/RefillForm";

export const RefillPage: FC = () => {
  return (
    <PageLayout>
      <RefillForm />
    </PageLayout>
  );
};
