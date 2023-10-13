import { LazyLoadImage } from "react-lazy-load-image-component";
import "./riyl.css";

export function RiylIndexEdit(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div onClick={() => props.onShowPost(post)} className="riylpost" key={post.id} id={post.id}>
          {/* <LazyLoadImage src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_200,f_auto/v1694744336/Screen_Shot_2023-09-14_at_10.18.08_PM_qf0l5e.png" /> */}
          <LazyLoadImage
            onClick={() => props.onShowPost(post)}
            className="riylpostimage"
            src={post.photo_url}
          ></LazyLoadImage>
          <h3 className="riylpostheader">{post.title}</h3>
          <br />
          <br />
          <br />
          <br />

          <p>{post.category}</p>
          <p>{post.favoritepart}</p>
        </div>
      ))}
    </div>
  );
}
