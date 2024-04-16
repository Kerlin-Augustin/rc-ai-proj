import { CSSProperties } from "react";
import PrimaryButton from "../components/PrimaryButton";
import ChatList from "../components/ChatList";
import NewChat from "../components/NewChat";

const styles: Record<string, CSSProperties> = {
  sideBar: {
    width: "20%",
    height: "100vh",
    backgroundColor: "#c637b724",
    float: "left",
    position: "relative",
  },
  h2: {
    textAlign: "center",
  },
  buttons: {
    textAlign: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
  },
  ul: {
    padding: "0",
  },
};

const SideBar = () => {
  return (
    <div style={styles.sideBar}>
      <div style={styles.h2}>
        <NewChat />
      </div>
      <div>
        <ul style={styles.ul}>
          <ChatList chatList={[]} />
        </ul>
      </div>
      <div style={styles.buttonsContainer}>
        <div style={styles.buttons}>
          <PrimaryButton label="Enable Text-To-Speech" />
        </div>
        <div style={styles.buttons}>
          <PrimaryButton label="UserName" margin="1em 0" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
