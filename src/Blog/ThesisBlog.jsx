import axios from "axios";
import { thesisposts } from "./postarchive";

import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function ThesisBlog() {
  const [posts, setPosts] = useState(thesisposts);

  const [images, setImages] = useState([]);

  // const handleIndexPosts = () => {
  //   console.log("handleIndexPosts");
  //   axios.get(`https://thesisblog.fly.dev/posts.json`).then((response) => {
  //     console.log(response.data);
  //     setPosts([...posts, response.data]);
  //     setPosts(response.data);
  //   });
  // };

  // useEffect(handleIndexPosts, []);

  return (
    <div>
      <br></br>

      <h2> IA Thesis Project Blog of Progress</h2>

      <a href="https://www.pinterest.com/grimes2570/thesis-game-inspiration/" target="blank">
        {" "}
        Pinterest Board{" "}
      </a>
      <br></br>
      <a href="https://github.com/juliasuzanne/partsandpieces" target="blank">
        {" "}
        Github (Main)
      </a>
      <br></br>

      <a href="https://github.com/juliasuzanne/Scroller" target="blank">
        {" "}
        Github (Scroller Game){" "}
      </a>
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
        <a href="#4" id="weekButton">
          Week 4
        </a>
        <a href="#8" id="weekButton">
          Week 5
        </a>
        <a href="#9" id="weekButton">
          Week 6
        </a>
        <a href="#10" id="weekButton">
          Week 7
        </a>
        <a href="#11" id="weekButton">
          Week 8
        </a>
        <a href="#12" id="weekButton">
          Week 9
        </a>
        <a href="#13" id="weekButton">
          Week 10
        </a>
        <a href="#14" id="weekButton">
          Week 11
        </a>
        <a href="#15" id="weekButton">
          Week 12
        </a>
        <a href="#16" id="weekButton">
          Week 13
        </a>
        <a href="#17" id="weekButton">
          Week 14
        </a>
      </div>
      <br></br>
      <br></br>

      {posts.map((post) => (
        <div key={post.id} id={post.id}>
          <LazyLoadImage src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_200,f_auto/v1694744336/Screen_Shot_2023-09-14_at_10.18.08_PM_qf0l5e.png" />
          <h3>{post.header}</h3>
          <h5>{post.date}</h5>
          {post.images.map((photo) => (
            <div key={photo.id}>
              <p className="thesisblogp_image">{photo.abovewriting}</p>
              <LazyLoadImage
                className="postimage"
                src={photo.url.replace("upload", "upload/w_500,f_auto/")}
              ></LazyLoadImage>
              <p className="thesisblogp_image">{photo.belowwriting}</p>
            </div>
          ))}
          {post.paragraphs.map((paragraph) => (
            <div key={paragraph.id}>
              <p className="thesisblogp">{paragraph.writing}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
