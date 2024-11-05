import React, { useState, useEffect } from "react";

// Edit post form
function EditPost({ postId }) {
  const [title, setTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [body, setBody] = useState("");

  // Load existing post data
  useEffect(() => {
    fetch(`/editPost?post=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.post) {
          setTitle(data.post.title);
          setCreatorName(data.post.name);
          setBody(data.post.message);
        }
      })
      .catch((error) => {
        console.error("Error loading post data:", error);
      });
  }, [postId]);

  // Handle form submission for editing the post
  function handleForm(event) {
    event.preventDefault();
    fetch("/editPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: postId, title, name: creatorName, message: body }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Edit successful");
        }
      });
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleForm}>
        <div className="editPost">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="creatorName">Creator Name</label>
          <input
            type="text"
            name="creator_name"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
          />

          <label htmlFor="body">Content</label>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <button type="submit">Update Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
