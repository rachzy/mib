import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent, useState } from "react";

import classes from "./Menu.module.css";

interface IElement {
  title: string;
  href?: string;
}

interface IProps {
  elements: IElement[];
  displayLogo?: boolean;
}

const Menu: FunctionComponent<IProps> = ({ elements, displayLogo }) => {
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(false);

  const renderProjects = () => {
    return elements.map((element, pos) => {
      return (
        <Fragment key={element.title}>
          <Link
            href={
              element.href ? element.href : `/${element.title.toLowerCase()}`
            }
          >
            <li
              onClick={() => {
                setMenuActive((currentValue) => !currentValue);
              }}
            >
              {element.title}
            </li>
          </Link>
          {pos < elements.length - 1 ? (
            <div className={classes.separator}></div>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
  };

  return (
    <header className={classes.header}>
      {displayLogo ? (
        <picture className={classes.logo}>
          <source
            srcSet={require(`../../asset/images/mib-logo-no-background.png`)}
            type={"image/png"}
          />
          <Image
            onClick={() => {
              router.push("/");
            }}
            style={{ width: "100%" }}
            width={70}
            height={70}
            src={require("../../asset/images/mib-logo-no-background.png")}
            alt="mib logo"
          />
        </picture>
      ) : (
        ""
      )}
      <ul className={classes.menu}>{renderProjects()}</ul>
      <div
        onClick={() => {
          setMenuActive((currentValue) => !currentValue);
        }}
        className={classes.hamburgerLines}
      >
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </div>
      <div
        className={`${classes.menuMobile} ${menuActive ? classes.active : ""}`}
      >
        <ul>{renderProjects()}</ul>
      </div>
    </header>
  );
};

export default Menu;
