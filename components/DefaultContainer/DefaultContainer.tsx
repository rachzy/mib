import { FunctionComponent } from "react";
import classes from "./DefaultContainer.module.css";

interface IProps {
  children: React.ReactNode;
  column?: boolean;
}

const DefaultContainer: FunctionComponent<IProps> = ({ children, column }) => {
  return (
    <div
      className={classes.defaultContainer}
      style={column ? { flexDirection: "column" } : {}}
    >
      {children}
    </div>
  );
};

export default DefaultContainer;
