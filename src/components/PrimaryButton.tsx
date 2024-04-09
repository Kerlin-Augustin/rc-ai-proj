import { CSSProperties } from "react";
import { Button } from "@mui/material";
interface PrimaryButtonProps {
  label: string;
  backgroungColor?: string;
  margin?: string;
}

const PrimaryButton = ({
  label,
  backgroungColor = "#693183",
  margin,
}: PrimaryButtonProps) => {
  const buttonColor: CSSProperties = {
    backgroundColor: backgroungColor,
    margin: margin,
  };
  return (
    <Button variant="contained" style={buttonColor}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
