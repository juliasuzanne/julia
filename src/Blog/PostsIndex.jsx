import { ImagesEdit } from "./ImagesEdit";
import { Modal } from "../Modal";

export function PostsIndex(props) {
  {
    return props.posts.map((post) => (
      <div key={post.id} id={post.id}>
        <Modal show={props.showImage} close={props.handleCloseImage}>
          <ImagesEdit
            image={props.currentImage}
            onDestroyImage={props.destroyImage}
            onUpdateImage={props.updateImage}
          />
        </Modal>

        <img
          onClick={() => props.onShowPost(post)}
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_200,f_auto/v1694744336/Screen_Shot_2023-09-14_at_10.18.08_PM_qf0l5e.png"
        />
        <h3>{post.header}</h3>
        <h5>{post.date}</h5>
        {post.images.map((photo) => (
          <div key={photo.id}>
            <p>{photo.abovewriting}</p>
            <img
              onClick={() => props.onShowImage(photo)}
              className="postimage"
              src={photo.url.replace("upload", "upload/w_300,f_auto/")}
            ></img>
            <p>{photo.belowwriting}</p>
          </div>
        ))}
        {post.paragraphs.map((paragraph) => (
          <div key={paragraph.id}>
            <p>{paragraph.writing}</p>
          </div>
        ))}
      </div>
    ));
  }
}
