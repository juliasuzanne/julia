import axios from "axios";

import { useEffect, useState } from "react";

export function ThesisBlog() {
  const [posts, setPosts] = useState([]);

  const [images, setImages] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get(`https://thesisblog.fly.dev/posts.json`).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <h2>
        {" "}
        Unfiltered journal tracking my progress and growth as I complete a 2D Point and Click Adventure game in Unity
      </h2>
      <br></br>
      <br></br>
      <div id="footerWeeks">
        <a href="#week1" id="weekButton">
          Week 1
        </a>
        <a href="#week2" id="weekButton">
          Week 2
        </a>
        <a href="#week3" id="weekButton">
          Week 3
        </a>
      </div>
      <br></br>
      <br></br>

      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.header}</p>
          <p>{post.date}</p>
          {post.images.map((photo) => (
            <div key={photo.id}>
              <p>{photo.name}</p>
              <p>{photo.url}</p>
              <p>{photo.abovewriting}</p>
              <p>{photo.belowwriting}</p>
            </div>
          ))}
          {post.paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <p>{paragraph.writing}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
