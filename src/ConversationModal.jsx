import "./ConversationModal.css";

export function ConversationModal(props) {
  if (props.show) {
    return (
      <div className="cmodal-background">
        <section className="cmodal-main">
          <div className="arrow-left"></div>

          {props.children}
          <button className="plain" type="button" onClick={props.onClose}>
            (leave conversation)
          </button>
        </section>
      </div>
    );
  }
}
