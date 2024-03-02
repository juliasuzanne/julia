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
  }
}
