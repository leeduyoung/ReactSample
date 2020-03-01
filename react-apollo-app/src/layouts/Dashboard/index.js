import React, { Suspense } from "react";
import { LinearProgress } from "@material-ui/core";
import { renderRoutes } from "react-router-config";

const DashboardLayout = ({ route }) => {
  return (
    <div>
      <div>header</div>
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
