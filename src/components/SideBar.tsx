import { CSSProperties } from "react";
import PrimaryButton from "./PrimaryButton";

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
};

const SideBar = () => {
  return (
    <div style={styles.sideBar}>
      <div>
        <h2 style={styles.h2}>New Chat</h2>
      </div>
      <div>
        <ul>Description of Chat</ul>
      </div>
      <div style={styles.buttonsContainer}>
        <div style={styles.buttons}>
          <PrimaryButton label="Enable Text-To-Speech" />
        </div>
        <div style={styles.buttons}>
          <PrimaryButton label="UserName" margin="1em 0 1em 0" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
