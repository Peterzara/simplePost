import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddNewPost }) {
  const [enteredBody, setBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    // event.preventDefault();
    const newPost = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddNewPost(newPost);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={changeAuthorHandler}
          />
        </p>
        <p className={classes.actions}>
          <button>Submit</button>
          <Link type="button" to="..">
            Cancel
          </Link>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
