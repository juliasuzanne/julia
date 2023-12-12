import "../CSS/Modal.css";

export function PostModal(props) {
  if (props.show == true) {
    return (
      <div id="modal-background">
        <section id="modal-main">
          {props.children}
          <img id="modalImagePost" src={props.currentImage} />
          <button className="close" type="button" onClick={props.close}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
