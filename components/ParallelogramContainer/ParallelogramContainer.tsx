import { FunctionComponent } from "react";
import classes from "./ParallelogramContainer.module.css";

interface IProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

const ParallelogramContainer: FunctionComponent<IProps> = ({
  children,
  size,
}) => {
  return (
    <div className={`${classes.parallelogramContainer} ${classes[size]}`}>
      {children}
    </div>
  );
};

export default ParallelogramContainer;
