import axios from "axios";
import "../CSS/WeekButtons.css";
import { useEffect, useState } from "react";
import { ThesisSinglePost } from "./ThesisSinglePost";
import { PostModal } from "./PostModal";
import React from "react";

export function ThesisPost() {
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
      <br></br>
      <br></br>
      <p> Select a button from below to view notes from each week. </p>
      <div id="weekMenu">
        <p id="weekTitle"> ₊✩‧₊˚౨ৎ˚₊✩‧₊ PICK A WEEK: </p>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
            1
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(2)}>
            2
          </button>
        </a>

        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(3)}>
            3
          </button>
        </a>

        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(4)}>
            4
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(8)}>
            5
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(9)}>
            6
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(10)}>
            7
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(11)}>
            8
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(12)}>
            9
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(13)}>
            10
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(14)}>
            11
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(15)}>
            12
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(16)}>
            13
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(17)}>
            14
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(19)}>
            15
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(20)}>
            16
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(21)}>
            17
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(21)}>
            17
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(22)}>
            18
          </button>
        </a>

        {/* <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
          Week 15
        </button> */}

        {/* <p id="weekTitle"> ⋆｡‧˚ʚ♡ɞ˚‧｡⋆ SPRING: </p> */}
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(23)}>
            BR
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(24)}>
            22
          </button>
        </a>
        <a href="#refreshpage">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(25)}>
            23
          </button>
        </a>
        {/* <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
          Week 15
        </button> */}
      </div>
    </div>
  );
}
