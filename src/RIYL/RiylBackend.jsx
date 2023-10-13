import axios from "axios";
import { useEffect, useState } from "react";
import { RiylCreate } from "./RiylCreate";
import { RiylIndex } from "./RiylIndex";
import { Modal } from "../Modal";
import { RiylEdit } from "./RiylEdit";

export function RiylBackend() {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get(`https://riyl.fly.dev/infos.json`).then((response) => {
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

  const handleCreatePost = (params, successCallback) => {
    console.log("https://riyl.fly.dev/infos.json", params);
    axios.post(`https://riyl.fly.dev/infos.json`, params).then((response) => {
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
    axios.patch(`https://riyl.fly.dev/infos/${id}.json`, params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
      setPosts(response.data);
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
      <RiylCreate onCreatePost={handleCreatePost} />
      <Modal show={isModalVisible} close={handleClose}>
        <RiylEdit post={currentPost} onDestroyPost={handleDestroyPost} onUpdatePost={handleUpdatePosts} />
      </Modal>

      <h2> Media Consumption Log</h2>

      <RiylIndex posts={posts} onShowPost={handleShowPost} />
    </div>
  );
}
