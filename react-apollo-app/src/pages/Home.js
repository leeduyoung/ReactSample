import React from "react";
import "./Home.css";
import { useQuery } from "@apollo/react-hooks";
import { CATEGORY_QUERY } from "../queries/category";
import { Button } from "@material-ui/core";

function Home() {
  const { loading, error, data } = useQuery(CATEGORY_QUERY);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error :(</p>;

  return (
    <div className="home">
      home
      {data.categories.map((category, index) => (
        <div key={index}>
          {category.id}: {category.name}
        </div>
      ))}
      <Button>hello world!</Button>
    </div>
  );
}

export default Home;
