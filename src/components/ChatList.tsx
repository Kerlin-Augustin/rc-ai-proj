import uuid from "react-uuid";

const ChatList = () => {
  const chatList: string[] = [];

  const styles = {
    chatList: {
      border: "1px solid #693183",
      borderRadius: "5px",
      padding: "1em",
      margin: ".5em 0",
      listStyle: "none",
      cursor: "pointer",
    },
  };

  return (
    <div>
      <li key={uuid()} style={styles.chatList}>
        {chatList}
      </li>
    </div>
  );
};

export default ChatList;
