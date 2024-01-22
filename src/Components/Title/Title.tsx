import "./Title.css";

interface TitleProps {
  title: string;
  center?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, center }) => {
  return (
    <h2 className="title" style={center ? { textAlign: "center" } : {}}>
      {title}
    </h2>
  );
};

export default Title;
