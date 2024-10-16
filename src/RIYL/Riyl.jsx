import axios from "axios";
import { RiylIndex } from "./RiylIndex";

import { useEffect, useState } from "react";

export function Riyl() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get(`https://riyl.fly.dev/infos.json`).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts(), []);

  return (
    <div>
      <h2 className="title"> Media Consumption</h2>
      <h5 className="subtitle">
        {" "}
        Keeping record of all the media I consume while creating my thesis project FA23-SP24
      </h5>
      <br />
      <br />
      <RiylIndex posts={posts} />
    </div>
  );
}
