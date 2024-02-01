import axios from "axios";
import "../CSS/WeekButtons.css";
import { useEffect, useState } from "react";
import { ThesisSinglePost } from "./ThesisSinglePost";
import { PostModal } from "./PostModal";
import React from "react";

export default function SelectTest() {
  const [selectedFruit, setSelectedFruit] = useState("orange");
  const [selectedVegs, setSelectedVegs] = useState(["corn", "tomato"]);

  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [isShowPostVisible, setIsShowPostVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleShowModal = () => {
    console.log("show modal");
    setIsModalVisible(true);
  };

  const handleSetCurrentImage = (image) => {
    setCurrentImage(image);
  };

  const handleHideModal = () => {
    console.log("Hide modal");
    setIsModalVisible(false);
  };

  const handleShowIndividualPost = (p) => {
    console.log("handleIndexPosts");
    axios.get(`https://thesisblog.fly.dev/posts/${p}.json`).then((response) => {
      console.log(response.data);
      setIsShowPostVisible(true);
      setPost(response.data);
      setImages(response.data.images);
      setParagraphs(response.data.paragraphs);
    });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <label>
        Pick a fruit:
        <select value={selectedFruit} onChange={(e) => handleShowIndividualPost(e.target.value)}>
          <option value="1">week 1</option>
          <option value="2">Banana</option>
          <option value="3">Orange</option>
        </select>
      </label>
      <hr />
      <label>
        Pick all your favorite vegetables:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={(e) => {
            const options = [...e.target.selectedOptions];
            const values = options.map((option) => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <p>Your favorite fruit: {selectedFruit}</p>
      <p>Your favorite vegetables: {selectedVegs.join(", ")}</p>

      <div id="refreshpage">
        <h2 className="title"> IA THESIS PROJECT BLOG</h2>
        <a href="https://www.pinterest.com/grimes2570/thesis-game-inspiration/" target="blank">
          {" "}
          Pinterest Board
        </a>
        &emsp;
        <a href="https://github.com/juliasuzanne/partsandpieces" target="blank">
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
        {/* <button onClick={() => setPostIndex(1)}>show post 14</button> */}
        <br></br>
        <br></br>
        <br></br>
        <ThesisSinglePost
          show={isShowPostVisible}
          handleShowModal={handleShowModal}
          handleSetCurrentImage={handleSetCurrentImage}
          post={post}
          images={images}
          paragraphs={paragraphs}
        ></ThesisSinglePost>
        <PostModal show={isModalVisible} currentImage={currentImage} close={handleHideModal}></PostModal>
      </div>
    </div>
  );
}
