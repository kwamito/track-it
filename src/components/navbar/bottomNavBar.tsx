import React from "react";
import style from "./bottomNavBar.module.sass";
import styles from "../projects_home/personalSideBar.module.sass";
import stylo from "../sidebar/SideBarHome.module.sass";

function BottomNavBar() {
  const handleClick = (e: any) => {
    e.target.classList.add(`${style["active"]}`);
  };
  const handleNavOpening = () => {
    let nav = document.getElementsByClassName(
      styles["nav"]
    )[0] as HTMLDivElement;
    let snav = document.getElementsByClassName(
      stylo["nav"]
    )[0] as HTMLDivElement;
    if (nav) {
      nav.style.width = "170px";
      nav.style.padding = "20px";
    } else {
      snav.style.width = "170px";
      snav.style.padding = "20px";
    }

    console.log(nav);
  };

  return (
    <div>
      <div className={style["bottom-nav-container"]}>
        <div>
          <span
            onClick={handleNavOpening}
            className={`material-icons ${style["bottom-icons"]}`}
          >
            widgets
          </span>
        </div>

        <div>
          <span className={`material-icons ${style["bottom-icons"]}`}>
            sticky_note_2
          </span>
        </div>
        <div>
          <span
            className={`material-icons ${style["bottom-icons"]} ${style["add-button"]}`}
          >
            add
          </span>
        </div>

        <div>
          <span className={`material-icons ${style["bottom-icons"]}`}>
            notifications
          </span>
          <div className={style["pulse"]}></div>
        </div>
        <div>
          <span className={`material-icons ${style["bottom-icons"]}`}>
            add_task
          </span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
