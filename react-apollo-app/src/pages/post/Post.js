import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Post = () => {

  const history = useHistory();

  return (
    <div>
      Post Page

      <Button onClick={() => history.push('/post/1')}>Post 1</Button>
      <Button onClick={() => history.push('/post/2')}>Post 2</Button>
      <Button onClick={() => history.push('/post/3')}>Post 3</Button>
    </div>
  )
}

export default Post;