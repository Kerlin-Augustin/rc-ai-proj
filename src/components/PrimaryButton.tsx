import { CSSProperties } from "react";

interface PrimaryButtonProps {
  label: string;
  backgroungColor?: string;
  margin?: string;
}

const styles: Record<string, CSSProperties> = {
  button: {
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

const PrimaryButton = ({
  label,
  backgroungColor = "#693183",
  margin,
}: PrimaryButtonProps) => {
  const buttonColor: CSSProperties = {
    ...styles.button,
    backgroundColor: backgroungColor,
    margin: margin,
  };
  return <button style={buttonColor}>{label}</button>;
};

export default PrimaryButton;
