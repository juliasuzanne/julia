import axios from "axios";
import "../CSS/WeekButtons.css";
import { ThesisPostShow } from "./ThesisPostShow";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function ThesisPost() {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get(`https://thesisblog.fly.dev/posts.json`).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost");
    setCurrentPost(post);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsModalVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <h2 className="title"> IA THESIS PROJECT BLOG</h2>
      <a href="https://www.pinterest.com/grimes2570/thesis-game-inspiration/" target="blank">
        {" "}
        Pinterest Board
      </a>
      &emsp;
      <a href="https://github.com/juliasuzanne/House_Game" target="blank">
        {" "}
        Github (Main)
      </a>
      &emsp;
      <a href="https://github.com/juliasuzanne/Scroller"> Github (Scroller Game) </a>
      &emsp;
      <a href="/draft" target="blank">
        {" "}
        Play the current draft!
      </a>
      <div id="weekMenu">
        {posts.map((post) => (
          <div key={post.id}>
            <button id="weekButton2" onClick={() => handleShowPost(post)}>
              {post.header}
            </button>
          </div>
        ))}
      </div>
      <ThesisPostShow
        show={isModalVisible}
        // onShowDrawing={handleShowSlide}
        post={currentPost}
        onClose={handleClose}
      ></ThesisPostShow>
    </div>
  );
}
