import { FunctionComponent } from "react";
import classes from "./LogoTitle.module.css";

interface IProps {
  withAnimation?: boolean;
}

const LogoTitle: FunctionComponent<IProps> = ({ withAnimation }) => {
  return (
    <h1
      className={`${classes.logoTitle} ${
        withAnimation ? classes.animation : ""
      }`}
    >
      mib
    </h1>
  );
};

export default LogoTitle;
