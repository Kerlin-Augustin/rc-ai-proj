/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from "react";
import PromptPage from "../pages/PromptPage";

const NewChat = () => {
  const [newPromptPage, setNewPromptPage] = useState<ReactElement<
    any,
    any
  > | null>(null);

  const handleClick = () => {
    setNewPromptPage(<PromptPage />);
  };

  return (
    <div>
      <h1 onClick={handleClick}>{newPromptPage}New Chat</h1>
    </div>
  );
};

export default NewChat;
