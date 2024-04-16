// messageState.ts
import { useState } from "react";

export const useMessageState = () => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return {
    message,
    sendMessage,
  };
};
