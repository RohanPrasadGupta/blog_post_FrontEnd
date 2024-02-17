import React from "react";

export default function Posts({ title, body, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
