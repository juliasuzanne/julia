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
          <img height="200px" src="src/assets/counterJulia.gif" />
        </button>
        <ConversationModal show={isConversationVisible} onClose={handleCloseConversation}>
          <TextAdventureDefault onClose={handleCloseConversation} />
        </ConversationModal>
      </footer>
    </div>
  );
}
