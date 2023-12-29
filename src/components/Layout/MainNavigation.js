import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  Layout,
  Fit,
  Alignment,
  useRive,
  useStateMachineInput,
} from "rive-react";

import logo39Img from "../../assets/39logo.png";
import hamburger from "../../assets/hamburger.riv";

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  collectionHide,
  collectionToggle,
} from "../../features/mainNav/mainNav-Slice";
import { useDispatch, useSelector } from "react-redux";

const MainNavigation = () => {
  const collectionShow = useSelector((state) => state.mainNav.collectionShow);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //animation
  const STATE_MACHINE_NAME = "State Machine";
  const INPUT_NAME = "Switch";
  const { rive: hamburgerRive, RiveComponent: HamburgerComponent } = useRive({
    src: hamburger,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
  });

  const petBanOnClickInput = useStateMachineInput(
    hamburgerRive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  const homeClickHandler = () => {
    navigate("-39SquareFeetStudio/");
    dispatch(collectionHide());
    if (collectionShow) {
      petBanOnClickInput.fire();
    }
  };

  const aboutClickHandler = () => {
    navigate("-39SquareFeetStudio/about");
    dispatch(collectionHide());
    petBanOnClickInput.fire();
  };

  const howtoClickHandler = () => {
    navigate("-39SquareFeetStudio/howto");
    dispatch(collectionHide());
    petBanOnClickInput.fire();
  };

  const exampleClickHandler = () => {
    navigate("-39SquareFeetStudio/example");
    dispatch(collectionHide());
    petBanOnClickInput.fire();
  };

  const meowClickHandler = () => {
    dispatch(collectionToggle());
    petBanOnClickInput.fire();
  };

  const NavCollection = () => {
    return (
      <div>
        <div className={classes.backdrop} onClick={meowClickHandler} />
        <div id="NavCollection" className={classes.navCollection}>
          <button className={classes.colBtn} onClick={howtoClickHandler}>
            如何開始
          </button>
          {/* <button className={classes.colBtn} onClick={aboutClickHandler}> */}
          {/*   關於Pet伴 */}
          {/* </button> */}
          {/* <button className={classes.colBtn} onClick={exampleClickHandler}> */}
          {/*   成功案例 */}
          {/* </button> */}
        </div>
      </div>
    );
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className="flex w-full justify-between px-2">
          <div className="flex space-x-4">
            <div>
              <button onClick={homeClickHandler} className={classes.appLogo}>
                {/* <Logo className="w-32 mr-2" alt="logo" /> */}
                <img
                  src={logo39Img}
                  className="w-32 mr-2"
                  alt={"山石九平工作室Logo"}
                />
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button className={classes.btn} onClick={howtoClickHandler}>
              如何開始
            </button>
            {/* <button className={classes.btn} onClick={exampleClickHandler}> */}
            {/*   成功案例 */}
            {/* </button> */}
          </div>
          <div className={"md:hidden flex w-full justify-end items-center"}>
            <HamburgerComponent
              className={"w-16 h-16"}
              onClick={meowClickHandler}
            />
          </div>
        </div>
        {collectionShow && <NavCollection />}
      </nav>
    </header>
  );
};

export default MainNavigation;
