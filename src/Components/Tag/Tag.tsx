import "./styles.css";

const colors: Record<string, IColors> = {
  blue: {
    text: "#1d39c4",
    backgroundColor: "#f0f5ff",
    borderColor: "#adc6ff",
  },
  green: {
    text: "#389e0d",
    backgroundColor: "#f6ffed",
    borderColor: "#b7eb8f",
  },
  red: {
    text: "#d4380d",
    backgroundColor: "#fff2e8",
    borderColor: "#ffbb96",
  },
};

export type ITagProps = {
  tag: string;
  color: string;
};

export type IColors = {
  text: string;
  backgroundColor: string;
  borderColor: string;
};

export const Tag: React.FC<ITagProps> = (props) => {
  const currentColor = colors[props.color] ?? colors.blue;

  return (
    <span
      className="tag"
      style={{
        color: currentColor.text,
        backgroundColor: currentColor.backgroundColor,
        borderColor: currentColor.borderColor,
      }}
    >
      {props.tag}
    </span>
  );
};
