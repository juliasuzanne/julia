import { LazyLoadImage } from "react-lazy-load-image-component";

export function RiylIndex(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} id={post.id}>
          {/* <LazyLoadImage src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_200,f_auto/v1694744336/Screen_Shot_2023-09-14_at_10.18.08_PM_qf0l5e.png" /> */}
          <h3>{post.title}</h3>
          <h5>{post.description}</h5>
          <p className="thesisblogp_image">{post.category}</p>
          <LazyLoadImage className="postimage" src={post.photo_url}></LazyLoadImage>
          <p className="thesisblogp_image">{post.favoritepart}</p>
        </div>
      ))}
    </div>
  );
}
