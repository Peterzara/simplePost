import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(newPost) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [newPost, ...existingPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post key={post.body} theme={post.body} author={post.author} />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no posts yet</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
