import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: `${faker.hacker.phrase()}`,
  };
}

const PostContext = createContext();

function PostProvider({ children }) {
  // console.log(createRandomPost());

  const [posts, setPosts] = useState(() => {
    return Array.from({ length: 30 }, () => createRandomPost());
  });

  const [searchQuery, setSearchQuery] = useState("");
  // const [isFakeDark, setIsFaskeDark] = useState(false);

  const searchPost =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const postLength = searchPost ? searchPost.length : posts.length;
  // console.log(postLength);

  function handleClearPost() {
    setPosts([]);
  }

  function handleAddPost(post) {
    console.log(post);
    setPosts((posts) => [post, ...posts]);
  }
  return (
    <PostContext.Provider
      value={{
        postLength,
        setSearchQuery,
        searchQuery,
        handleClearPost,
        handleAddPost,
        searchPost,
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
