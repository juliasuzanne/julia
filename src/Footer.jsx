import { ConversationModal } from "./ConversationModal";
import { TextAdventure } from "./TextAdventure";
import { useState } from "react";

export function Footer() {
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
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1711601270/jglogoswim_gecmj4.png"
          />
        </button>
        <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
          <TextAdventure onClose={handleCloseConversation} />
        </ConversationModal>
      </footer>
    </div>
  );
}
