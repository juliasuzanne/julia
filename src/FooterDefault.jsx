import { ConversationModal } from "./ConversationModal";
import { TextAdventureDefault } from "./TextAdventureDefault";
import { useState } from "react";

export function FooterDefault() {
  let [isConversationVisible, setIsConversationVisible] = useState(false);

  const handleShowConversation = () => {
    setIsConversationVisible(true);
  };

  const handleCloseConversation = () => {
    setIsConversationVisible(false);
  };

  return (
    <div>
      <footer id="footer">
        <button onClick={handleShowConversation}>
          <img
            height="200px"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568349/counterJulia_eh7ehf.gif"
          />
        </button>
        <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
          <TextAdventureDefault onClose={handleCloseConversation} />
        </ConversationModal>
      </footer>
    </div>
  );
}
