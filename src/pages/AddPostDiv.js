import { useContext, useState } from "react";
import styles from "./AddPostDiv.module.css";
import { PostContext } from "../PostProvider";

export default function AddPostDiv() {
  const { handleAddPost } = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    handleAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className={styles.main}>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title..."
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Post Description..."
        />
        <button onClick={handleSubmit}>Add Post</button>
      </form>
    </div>
  );
}
