import React, { useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import BGDesktop from "../../images/bg-pattern-desktop.svg";
import Logo from "../../images/logo.svg";
import HeroDesktop from "../../images/hero-desktop.jpg";
import HeroMobile from "../../images/hero-mobile.jpg";
import IconArrow from "../../images/icon-arrow.svg";
import IconError from "../../images/icon-error.svg";
import classes from "./ComingSoon.module.scss";
const ComingSoon = () => {
  const inputRef = useRef("");
  const [isError, setIsError] = useState(false);

  const handleSumbit = (e) => {
    setIsError(false);
    e.preventDefault();
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        inputRef.current.value
      )
    ) {
      alert("A email was submitted: " + inputRef.current.value);
      inputRef.current.value = "";
    } else {
      setIsError(true);
    }
  };
  const media = useMediaQuery("only screen and (max-width:1000px)");
  return (
    <main className={classes.row}>
      <div className={classes["coming-soon"]}>
        <img
          src={BGDesktop}
          alt="Background Pattern"
          className={classes["coming-soon__background"]}
        />
        <div className={classes["coming-soon__group"]}>
          <img
            src={Logo}
            alt="Logo of Base Apparel"
            className={classes["coming-soon__logo"]}
          />
          {media && (
            <img
              src={HeroMobile}
              alt="Hero mobile"
              className={classes["coming-soon__hero-mobile"]}
            />
          )}
          <h1 className={classes["coming-soon__heading--1"]}>
            We're <br />
            <span>coming soon</span>
          </h1>
          <p className={classes["coming-soon__text"]}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            className={classes["coming-soon__form"]}
            onSubmit={handleSumbit}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Email Address"
              className={`${classes["coming-soon__input"]} ${
                isError ? classes.error : ""
              }`}
            />
            {isError && (
              <img
                src={IconError}
                alt="Icon for an error"
                className={classes["coming-soon__error"]}
              />
            )}
            <button className={classes["coming-soon__button"]} type="submit">
              <img src={IconArrow} alt="Icon of arrow" />
            </button>
          </form>
          {isError && (
            <p className={classes["coming-soon__text-error"]}>
              Please provide a valid email
            </p>
          )}
        </div>
      </div>
      <div className={classes.display__desktop}>
        {!media && (
          <img
            src={HeroDesktop}
            alt="Hero Desktop"
            className={classes["coming-soon__hero-desktop"]}
          />
        )}
      </div>
    </main>
  );
};

export default ComingSoon;
