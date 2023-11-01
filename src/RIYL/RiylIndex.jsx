import { LazyLoadImage } from "react-lazy-load-image-component";
import "./riyl.css";

export function RiylIndex(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} id={post.id}>
          <div className="riylpost">
            <LazyLoadImage
              className="riylpostimage"
              src={post.photo.url.replace("upload", "upload/w_200,f_auto/")}
            ></LazyLoadImage>
            <h3 className="riylpostheader">{post.title}</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>{post.category}</p>
            <p>{post.favoritepart}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
