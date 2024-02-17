import { useContext } from "react";
import Posts from "../components/Posts";
import styles from "./HomePage.module.css";
import { PostContext } from "../PostProvider";

export default function HomePage() {
  // console.log(posts.map((post) => post));
  const { posts, searchPost } = useContext(PostContext);
  const allPosts = searchPost ? searchPost : posts;

  return (
    <>
      <div className={styles.PostStyle}>
        {allPosts.map((post, index) => {
          return (
            <Posts
              className={styles.item}
              key={index}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    </>
  );
}
