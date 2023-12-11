import { LazyLoadImage } from "react-lazy-load-image-component";

export function ThesisSinglePost(props) {
  if (props.show == true) {
    return (
      <div>
        <h3>{props.post.header}</h3>
        <h3>{props.post.date}</h3>
        {props.images.map((photo) => (
          <div key={photo.id}>
            <p className="thesisblogp_image">{photo.abovewriting}</p>
            <LazyLoadImage
              className="postimage"
              src={photo.url.replace("upload", "upload/w_500,f_auto/")}
            ></LazyLoadImage>
            <p className="thesisblogp_image">{photo.belowwriting}</p>
          </div>
        ))}
        {props.paragraphs.map((paragraph) => (
          <div key={paragraph.id}>
            <p className="thesisblogp_image">{paragraph.writing}</p>
          </div>
        ))}
      </div>
    );
  }
}
