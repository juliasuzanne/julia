import axios from "axios";
import "../CSS/WeekButtons.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function ThesisPost() {
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  const handleShowIndividualPost = (p) => {
    console.log("handleIndexPosts");
    console.log("handleIndexPosts");
    axios.get(`https://thesisblog.fly.dev/posts/${p}.json`).then((response) => {
      console.log(response.data);
      setPost(response.data);
      setImages(response.data.images);
      setParagraphs(response.data.paragraphs);
    });
  };

  return (
    <div id="START">
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
      {/* <button onClick={() => setPostIndex(1)}>show post 14</button> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>{post.header}</h3>
      <h3>{post.date}</h3>
      {images.map((photo) => (
        <div key={photo.id}>
          <p className="thesisblogp_image">{photo.abovewriting}</p>
          <LazyLoadImage
            className="postimage"
            src={photo.url.replace("upload", "upload/w_500,f_auto/")}
          ></LazyLoadImage>
          <p className="thesisblogp_image">{photo.belowwriting}</p>
        </div>
      ))}
      {paragraphs.map((paragraph) => (
        <div key={paragraph.id}>
          <p className="thesisblogp_image">{paragraph.writing}</p>
        </div>
      ))}
      <br></br>
      <p> Select a button from the left to view notes from each week. </p>
      <div id="weekMenu">
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
            Week 1
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(2)}>
            Week 2
          </button>
        </a>
        <br></br>

        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(3)}>
            Week 3
          </button>
        </a>
        <br></br>

        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(4)}>
            Week 4
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(8)}>
            Week 5
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(9)}>
            Week 6
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(10)}>
            Week 7
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(11)}>
            Week 8
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(12)}>
            Week 9
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(13)}>
            Week 10
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(14)}>
            Week 11
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(15)}>
            Week 12
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(16)}>
            Week 13
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(17)}>
            Week 14
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(18)}>
            Week 15
          </button>
        </a>
        <br></br>
        <a href="#START">
          <button id="weekButton2" onClick={() => handleShowIndividualPost(19)}>
            Week 16
          </button>
        </a>
        <br></br>
        {/* <button id="weekButton2" onClick={() => handleShowIndividualPost(1)}>
          Week 15
        </button> */}
      </div>
    </div>
  );
}
