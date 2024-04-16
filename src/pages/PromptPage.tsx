import { CSSProperties } from "react";
import { Input, Button } from "@mui/material";
import { useMessageState } from "../utils/MessageState";

const PromptPage = () => {
  const { message, sendMessage } = useMessageState();

  const styles: Record<string, CSSProperties> = {
    body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    input: {
      border: "2px solid #693183",
      borderRadius: "5px",
    },
    button: {
      marginTop: ".5em",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sendMessage(e.target.value);
  };

  const handleClick = () => {
    console.log("Button clicked");
    console.log(message);
    // Do something with the message because I am drawing a blank on how to do it right now
  };

  return (
    <div style={styles.body}>
      <h2>Discover The World</h2>
      <div style={styles.input}>
        <Input
          disableUnderline={true}
          placeholder="Ask Anything..."
          multiline={true}
          rows="5"
          sx={{ width: "50em", padding: "1em" }}
          onChange={handleChange}
        />
      </div>
      <div style={styles.button}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#693183", margin: "0 0 0 52em" }}
          onClick={handleClick}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default PromptPage;
