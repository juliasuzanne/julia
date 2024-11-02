import axios from "axios";
import { RiylIndex } from "./RiylIndex";
import { riylposts } from "./riylposts";
import { useEffect, useState } from "react";

export function Riyl() {
  const [posts, setPosts] = useState(riylposts);

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
