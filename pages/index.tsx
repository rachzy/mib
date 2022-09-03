import { NextPage } from "next";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect, useRef, useState } from "react";

import DefaultContainer from "../components/DefaultContainer/DefaultContainer";
import LogoTitle from "../components/LogoTitle/LogoTitle";
import MainWrapper from "../components/MainWrapper/MainWrapper";

import classes from "../styles/Index.module.css";

const HomePage: NextPage = () => {
  const router = useRouter();

  const [currentWord, setCurrentWord] = useState(0);
  const [firstWordParagraph, secondWordParagraph, thirdWordParagraph] = [
    useRef() as MutableRefObject<HTMLParagraphElement>,
    useRef() as MutableRefObject<HTMLParagraphElement>,
    useRef() as MutableRefObject<HTMLParagraphElement>,
  ];
  const [introOver, setIntroOver] = useState(false);

  useEffect(() => {
    const wordParagraphs = [
      firstWordParagraph,
      secondWordParagraph,
      thirdWordParagraph,
    ];
    const words = ["Building", "the", "future"];
    if (currentWord >= wordParagraphs.length) return setIntroOver(true);

    words.forEach((word, pos) => {
      wordParagraphs[pos].current.textContent = word;
    });

    setTimeout(
      () => {
        wordParagraphs[currentWord].current.style.opacity = "100%";
        setCurrentWord((currentValue) => currentValue + 1);
      },
      currentWord > 0 ? 500 : 2000
    );
  }, [
    currentWord,
    firstWordParagraph,
    secondWordParagraph,
    thirdWordParagraph,
  ]);
  return (
    <MainWrapper
      centered={true}
      fadeOut={introOver}
      fadeOutFunction={() => {
        router.push("/feather");
      }}
    >
      <LogoTitle withAnimation={true} />
      <DefaultContainer>
        <p className={classes.slogan} ref={firstWordParagraph}></p>
        &nbsp;
        <p className={classes.slogan} ref={secondWordParagraph}></p>
        &nbsp;
        <p className={classes.slogan} ref={thirdWordParagraph}></p>
      </DefaultContainer>
    </MainWrapper>
  );
};

export default HomePage;
