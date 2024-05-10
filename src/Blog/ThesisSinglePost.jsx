import { LazyLoadImage } from "react-lazy-load-image-component";
import { PostModal } from "./PostModal";
import { useState } from "react";

export function ThesisSinglePost(props) {
  if (props.show == true) {
    return (
      <div>
        <h3 className="postheader">{props.post.header}</h3>
        <h3 className="postheader2">{props.post.date}</h3>
        <p>click on images to make them bigger</p>
        {props.images.map((photo) => (
          <div key={photo.id}>
            <p className="thesisblogp_image">{photo.abovewriting}</p>
            <LazyLoadImage
              className="postimage"
              src={photo.url.replace("upload", "upload/w_500,f_auto/")}
              onClick={() => {
                props.handleSetCurrentImage(photo.url);
                props.handleShowModal();
              }}
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
  } else {
    return (
      <div>
        <h3 className="postheader">Thank you for visiting my thesis blog</h3>
        <h4 className="postheader2">
          This blog showcases and tracks my progress as I complete my thesis as part of MICA's Interactive Arts Thesis
          class.
        </h4>
        <p> Use the dropdown menu above to view weekly progress updates.</p>
        <img
          className="showimage"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715307914/C4AB90F2-143A-4B18-9FA8-0D14E1506DA3_1_105_c_dwurwe.jpg"
        ></img>
      </div>
    );
  }
}
