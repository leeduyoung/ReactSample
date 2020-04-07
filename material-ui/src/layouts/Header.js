import React, { Suspense } from "react";
import { LinearProgress } from "@material-ui/core";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

const Header = ({ route }) => {
  console.log("header route: ", route);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-product">CreateProduct</Link>
          </li>
          <li>
            <Link to="/tooltip">Tooltip</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </nav>

      <div>
        <div>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Header;
