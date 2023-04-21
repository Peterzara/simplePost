import Post from './Post'
import classes from "./PostsList.module.css";

function PostsList(props) {
    return (
      <ul className={classes.posts}>
        <Post theme="Coding is cool" author="Ray" />
        <Post theme="Engineering is awesome" author="Ray" />
      </ul>
    );
}

export default PostsList;