import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import classes from "./MainWrapper.module.css";

interface IProps {
  children: React.ReactNode;
  centered?: boolean;
  fadeIn?: boolean;
  fadeOut?: boolean;
  fadeOutFunction?: () => void;
}

const MainWrapper: FunctionComponent<IProps> = ({
  children,
  centered,
  fadeIn,
  fadeOut,
  fadeOutFunction,
}) => {
  const mainWrapperDiv = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!fadeOut) return;
    setTimeout(() => {
      mainWrapperDiv.current.style.marginTop = "-100vh";
    }, 1000);

    if (!fadeOutFunction) return;
    setTimeout(() => {
      fadeOutFunction();
    }, 2000);
  }, [fadeOut, fadeOutFunction]);

  return (
    <div
      ref={mainWrapperDiv}
      className={`${classes.mainWrapper} ${centered ? classes.centered : ""} ${fadeIn ? classes.fadeIn : ""}`}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
