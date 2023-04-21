import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post theme={enteredBody} author={enteredAuthor} />
        <Post theme="Engineering is awesome" author="Ray" />
      </ul>
    </>
  );
}

export default PostsList;
