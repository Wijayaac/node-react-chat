import { useEffect } from "react";
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
const privateKey = import.meta.env.VITE_CHAT_PROJECT_ID;

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(privateKey, props.user.username, props.user.secret);
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
