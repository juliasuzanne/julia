import axios from "axios";
import { useEffect, useState } from "react";
import { PhotosCreate } from "./PhotosCreate";
import { ParagraphsCreate } from "./ParagraphsCreate";
import { PostsCreate } from "./PostsCreate";
import { Modal } from "./Modal";
import { PostsEdit } from "./PostsEdit";
import { PostsIndex } from "./PostsIndex";

export function WorkJournal() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
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

  const handleClose = () => {
    console.log("handleClose");
    setIsModalVisible(false);
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setCurrentPost(post);
    setIsModalVisible(true);
  };

  const handleUpdatePosts = (id, params, successCallback) => {
    console.log("handleUpdatePosts", params);
    axios.patch(`https://thesisblog.fly.dev/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((thispost) => {
          if (thispost.id === response.data.id) {
            return response.data;
          } else {
            return thispost;
          }
        })
      );
      handleIndexPosts();
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPost = (post) => {
    console.log("handleDestroyDrawing", post);
    axios.delete(`https://thesisblog.fly.dev/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PhotosCreate onCreatePhoto={handleCreatePhoto} />
      <ParagraphsCreate onCreateParagraph={handleCreateParagraph} />
      <PostsCreate onCreatePost={handleCreatePost} />
      <Modal show={isModalVisible} close={handleClose}>
        <PostsEdit post={currentPost} onDestroyPost={handleDestroyPost} onUpdatePost={handleUpdatePosts} />
      </Modal>

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
        <a href="#4" id="weekButton">
          Week 4
        </a>
        <a href="#5" id="weekButton">
          Week 5
        </a>
        <a href="#6" id="weekButton">
          Week 6
        </a>
        <a href="#7" id="weekButton">
          Week 7
        </a>
        <a href="#8" id="weekButton">
          Week 8
        </a>
        <a href="#9" id="weekButton">
          Week 9
        </a>
      </div>
      <br></br>
      <br></br>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
    </div>
  );
}
