import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isloadingPost, setLoadingPost] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoadingPost(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setLoadingPost(false);
    }

    fetchPosts();
  }, []);

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
      {!isloadingPost && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post key={post.body} theme={post.body} author={post.author} />
            );
          })}
        </ul>
      )}
      {!isloadingPost && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no posts yet</h2>
        </div>
      )}
      {isloadingPost && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
