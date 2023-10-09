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
      <br></br>

      <h2>
        {" "}
        Journal tracking my progress and growth as I complete a 2D Point and Click Adventure game in Unity for my IA
        Thesis Project at the Maryland Institute College of Art
      </h2>
      <br></br>
      <div id="footerWeeks">
        <a href="#1" id="weekButton">
          Week 1
        </a>
        <a href="#2" id="weekButton">
          Week 2
        </a>
        <a href="#3" id="weekButton">
          Week 3
        </a>
      </div>
      <br></br>
      <br></br>

      {posts.map((post) => (
        <div key={post.id} id={post.id}>
          <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_200,f_auto/v1694744336/Screen_Shot_2023-09-14_at_10.18.08_PM_qf0l5e.png" />
          <h3>{post.header}</h3>
          <h5>{post.date}</h5>
          {post.images.map((photo) => (
            <div key={photo.id}>
              <p>{photo.abovewriting}</p>
              <img height="200px" src={photo.url}></img>
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
