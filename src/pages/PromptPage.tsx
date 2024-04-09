import { CSSProperties } from "react";
import { Input } from "@mui/material";

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
      // padding: "0 20em",
      borderRadius: "5px",
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
          sx={{ width: "50em" }}
        />
      </div>
    </div>
  );
};

export default PromptPage;
