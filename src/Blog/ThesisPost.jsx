import axios from "axios";
import "../CSS/WeekButtons.css";
import { useEffect, useState } from "react";
import { ThesisSinglePost } from "./ThesisSinglePost";
import { PostModal } from "./PostModal";
import React from "react";
import { Snowflakes } from "../Snowflakes";
import { Header } from "../Header";

export function ThesisPost() {
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);
  const [isShowPostVisible, setIsShowPostVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  let [selectedFruit, setSelectedFruit] = useState("0");
  const [mostRecentPost, setMostRecentPost] = useState("39");

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
      <Header currentPage={"home"} />
      <h2 className="title">
        {" "}
        IA THESIS PROJECT <div id="title2"> BLOG</div>
      </h2>
      {/* <a href="https://www.pinterest.com/grimes2570/thesis-game-inspiration/" target="blank">
        {" "}
        Pinterest Board
      </a> */}
      &emsp;
      <a href="https://github.com/juliasuzanne/partsandpieces" target="blank">
        {" "}
        Github (Main)
      </a>
      &emsp;
      <br></br>
      <a href="/currentgame" target="blank">
        Play the current version
      </a>
      {/* <a href="https://github.com/juliasuzanne/Scroller"> Github (Scroller Game) </a> */}
      &emsp;
      {/* <a href="/draft" target="blank">
        {" "}
        Play the first iteration
      </a> */}
      {/* <button onClick={() => setPostIndex(1)}>show post 14</button> */}
      <br></br>
      <br></br>
      <br></br>
      <label id="select">
        SELECT TO VIEW WEEK: &nbsp;
        <select
          value={selectedFruit}
          onChange={(e) => {
            setSelectedFruit(e.target.value);
            handleShowIndividualPost(e.target.value);
            console.log(selectedFruit);
          }}
        >
          <option value="0">Select</option>
          <option value="1">Week 1</option>
          <option value="2"> Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="8">Week 5</option>
          <option value="9">Week 6</option>
          <option value="10">Week 7</option>
          <option value="11">Week 8</option>
          <option value="12">Week 9</option>
          <option value="13">Week 10</option>
          <option value="14">Week 11</option>
          <option value="15">Week 12</option>
          <option value="16">Week 13</option>
          <option value="17">Week 14</option>
          <option value="19">Week 15</option>
          <option value="20">Week 16</option>
          <option value="21">Week 17</option>
          <option value="22">Week 18</option>
          <option value="23">Winter Break</option>
          <option value="24">Week 22</option>
          <option value="25">Week 23</option>
          <option value="26">Week 24</option>
          <option value="27">Week 25</option>
          <option value="28">Week 26</option>
          <option value="29">Week 27</option>
          <option value="30">Week 28</option>
          <option value="31">Week 29</option>
          <option value="32">Week 30</option>
          <option value="33">Week 31</option>
          <option value="34">Week 32</option>
          <option value="35">Week 33</option>
          <option value="36">Week 34</option>
          <option value="37">Week 35</option>
          <option value="38">Week 36</option>
          <option value="39">Final Week/Art Walk</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href="#refreshpage">
        <button
          id="previousbutton"
          onClick={() => {
            if (selectedFruit == 8) {
              setSelectedFruit(4);
              handleShowIndividualPost(4);
            } else if (selectedFruit == 19) {
              handleShowIndividualPost(17);

              setSelectedFruit(17);
            } else if (selectedFruit == 1) {
              setSelectedFruit(mostRecentPost);
              handleShowIndividualPost(mostRecentPost);
            } else if (selectedFruit == 0) {
              setSelectedFruit(mostRecentPost);
              handleShowIndividualPost(mostRecentPost);
            } else {
              handleShowIndividualPost(+selectedFruit - 1);
              setSelectedFruit(+selectedFruit - 1);
            }

            console.log(selectedFruit);
          }}
        >
          &larr; PREVIOUS
        </button>
      </a>
      <a href="#refreshpage">
        <button
          id="nextbutton"
          onClick={() => {
            if (selectedFruit == 4) {
              setSelectedFruit(8);
              handleShowIndividualPost(8);
            } else if (selectedFruit == 17) {
              handleShowIndividualPost(19);

              setSelectedFruit(19);
            } else if (selectedFruit == mostRecentPost) {
              setSelectedFruit(1);
              handleShowIndividualPost(1);
            } else if (selectedFruit == 0) {
              setSelectedFruit(1);
              handleShowIndividualPost(1);
            } else {
              handleShowIndividualPost(+selectedFruit + 1);
              setSelectedFruit(+selectedFruit + 1);
            }

            console.log(selectedFruit);
          }}
        >
          NEXT &rarr;
        </button>
      </a>
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
      {/* <p> Select a button from below to view notes from each week. </p>
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
          <button id="weekButton2" onClick={() => handleShowIndividualPost(22)}>
            18
          </button>
        </a>

        {/* <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
          Week 15
        </button> */}
      {/* <p id="weekTitle"> ⋆｡‧˚ʚ♡ɞ˚‧｡⋆ SPRING: </p> */}
      {/* <a href="#refreshpage">
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
        </a> */}
      {/* <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
          Week 15
        </button> */}
    </div>
  );
}
