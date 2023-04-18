import { TitleProps } from "../../interfaces/weatherTypes";
import "./Title.css"

function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="main-title">{props.text}</h1>
    </div>
  );
}

export default Title;