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

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <RiylIndex posts={posts} />
    </div>
  );
}
