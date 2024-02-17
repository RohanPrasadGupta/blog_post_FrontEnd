import { useContext } from "react";
import styles from "./SearchHeader.module.css";
import { PostContext } from "../PostProvider";

export default function SearchHeader() {
  const { postLength, setSearchQuery, searchQuery, handleClearPost } =
    useContext(PostContext);

  return (
    <div className={styles.main}>
      <div className={styles.logoDiv}>
        <h1>Logo</h1>
        <h2>Blog Post</h2>
      </div>
      <div className={styles.CounterDiv}>Found {postLength} Post</div>
      <div className={styles.SearchDiv}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search Blog..."
          value={searchQuery}
        />
        <button onClick={handleClearPost}>Clear Posts</button>
      </div>
    </div>
  );
}
