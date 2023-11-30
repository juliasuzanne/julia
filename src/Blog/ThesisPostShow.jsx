import { LazyLoadImage } from "react-lazy-load-image-component";
export function ThesisPostShow(props) {
  if (props.show) {
    return (
      <div>
        <br></br>
        <h3>{props.post.header}</h3>
        {props.post.images.map((photo) => (
          <div key={photo.id}>
            <p className="thesisblogp_image">{photo.abovewriting}</p>
            <LazyLoadImage
              className="postimage"
              src={photo.url.replace("upload", "upload/w_500,f_auto/")}
            ></LazyLoadImage>
            <p className="thesisblogp_image">{photo.belowwriting}</p>
          </div>
        ))}
        {props.post.paragraphs.map((paragraph) => (
          <div key={paragraph.id}>
            <p className="thesisblogp">{paragraph.writing}</p>
          </div>
        ))}
      </div>
    );
  }
}
