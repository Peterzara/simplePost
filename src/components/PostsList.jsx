import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList(props) {
  const [enteredBody, setBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={classes.posts}>
        <Post theme={enteredBody} author={enteredAuthor} />
        <Post theme="Engineering is awesome" author="Ray" />
      </ul>
    </>
  );
}

export default PostsList;
