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
            <p> {paragraph.writing}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <br></br>
        <br></br>
        <img
          width="50%"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1701351793/Screen_Shot_2023-11-30_at_8.43.05_AM_iqntx4.png"
        ></img>
        <br></br> <br></br>
        <br></br>
        <h2> view week by clicking a tab below: </h2>
        <br></br>
        <p>
          {" "}
          <em> if tabs are not visible, please give the site a moment to load the data ... </em>{" "}
        </p>
      </div>
    );
  }
}
