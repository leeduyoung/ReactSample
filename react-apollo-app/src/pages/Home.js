import React from "react";
import "./Home.css";
import { useQuery } from "@apollo/react-hooks";
import { CATEGORY_QUERY } from "../queries/category";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(2)
  },
  homeContainer: {
    fontSize: 20
  },
}))

function Home() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(CATEGORY_QUERY);
  const history = useHistory();

  if (loading) return <p>loading...</p>;
  if (error) return <p>error :(</p>;

  return (
    <div className={clsx(classes.rootContainer, classes.homeContainer)}>
      home
      {data.categories.map((category, index) => (
        <div key={index}>
          {category.id}: {category.name}
        </div>
      ))}
      <Button onClick={() => history.push('/post')}>Go Post Page</Button>
    </div>
  );
}

export default Home;
