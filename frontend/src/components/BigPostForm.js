import React, { useState } from "react";

// posts form
function BigPostForm() {
  const [title, setTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [body, setBody] = useState("");

  // handle form submission
  function handleForm(event) {
    event.preventDefault();
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, name: creatorName, message: body }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Post created successfully");
        }
      });
  }

  // handle delete post
  function handleDelete(id) {
    fetch(`/deletePost?post=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Post deleted successfully");
        }
      });
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleForm}>
        <div className="createPost">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="creator_name">Creator Name</label>
          <input
            type="text"
            name="creator_name"
            placeholder="Creator Name"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
          />

          <label htmlFor="body">Content</label>
          <textarea
            id="textResize"
            name="body"
            placeholder="Write your post here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit">Create Post</button>
        </div>
      </form>

      <hr />
      <h1>Posts</h1>

      {/* Sample posts array for display purposes */}
      {/* Replace `posts` with fetched posts data from the backend */}
      {[{ id: 1, title: "Sample Post", creator_name: "John", body: "Sample content" }].map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>By: {post.creator_name}</p>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </div>
      ))}
    </div>
  );
}

export default BigPostForm;
