import { CSSProperties } from "react";
import { Input, Button } from "@mui/material";

const PromptPage = () => {
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

  return (
    <div style={styles.body}>
      <h2>Discover The World</h2>
      <div style={styles.input}>
        <Input
          disableUnderline={true}
          placeholder="Ask Anything"
          multiline={true}
          rows="5"
          sx={{ width: "50em", padding: "1em" }}
        />
      </div>
      <div style={styles.button}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#693183", margin: "0 0 0 52em" }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default PromptPage;
