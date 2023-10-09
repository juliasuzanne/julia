import axios from "axios";
import { useEffect, useState } from "react";
import { PhotosCreate } from "./PhotosCreate";
import { ParagraphsCreate } from "./ParagraphsCreate";
import { PostsCreate } from "./PostsCreate";

export function WorkJournal() {
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

  // const handleDestroyDrawing = (photo) => {
  //   console.log("handleDestroyDrawing", photo);
  //   axios.delete(`https://thesisblog.fly.dev/photos/${photo.id}.json`).then((response) => {
  //     handleClose();
  //   });
  // };
  // const handleUpdateImage = (id, params, successCallback) => {
  //   console.log("handleUpdateImage", params);
  //   axios.patch(`https://kate.fly.dev/images/${id}.json`, params).then((response) => {
  //     setImages(
  //       images.map((image) => {
  //         if (image.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return image;
  //         }
  //       })
  //     );
  //     successCallback();
  //     handleClose();
  //   });
  // };

  const handleCreatePhoto = (params, successCallback) => {
    console.log("https://thesisblog.fly.dev/photos.json", params);
    axios.post(`https://thesisblog.fly.dev/photos.json`, params).then((response) => {
      setImages([...images, response.data]);
      successCallback();
    });
  };
  const handleCreateParagraph = (params, successCallback) => {
    console.log("https://thesisblog.fly.dev/paragraphs.json", params);
    axios.post(`https://thesisblog.fly.dev/paragraphs.json`, params).then((response) => {
      successCallback();
    });
  };

  const handleCreatePost = (params, successCallback) => {
    console.log("https://thesisblog.fly.dev/posts.json", params);
    axios.post(`https://thesisblog.fly.dev/posts.json`, params).then((response) => {
      successCallback();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PhotosCreate onCreatePhoto={handleCreatePhoto} />
      <ParagraphsCreate onCreateParagraph={handleCreateParagraph} />
      <PostsCreate onCreatePost={handleCreatePost} />

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
              <p>writing {paragraph.writing}</p>
            </div>
          ))}

          <p>{post.date}</p>
        </div>
      ))}
      <h3 id="week1"> Week 1</h3>
      <p>Goals:</p>
      <p>
        {" "}
        To see what I think is feasible by building out core mechanics of the game. Although I have used Unity before, I
        do not have the extensive experience that would make me extremely confident in achieving the end product I want
        in the amount of time that I want.
      </p>
      <h3 id="week2">Week 2</h3>
      <p> This week I created a new character, started building the background.</p>
      <br></br>
      <h3 id="week3">Week 3</h3>
      <p> So far this week I have: </p>
      <ul>
        Added camera, cinemachine// virtual camera// add extension, confiner, separate bounds empty game object Started
        building mask While animating person Knowing where the skirt meets, had to add a third piece of skirt, will have
        to edit it later from the individual frames Cuphead Started optimizing code, using abstract inheriting classes
        Virtual and protected, abstract Working on transcribing The Tain by The Decemberists to work on soundtrack
        Creating images for scroller game Editing background picture Updated personal website, fixed CORS issue with
        tarot cards, Started pinterest board Working on scroller game Work through creating elements from first scene
        plan Debug and finesse foundational code Create dialog maps and character animations for interactions with
        dialog Animate main character and build shadow self (done 9/13) Navmesh for click walking style
      </ul>
    </div>
  );
}
