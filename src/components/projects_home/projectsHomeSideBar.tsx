import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import style from "./personalSideBar.module.sass";

function ProjectsSidebar() {
  const [title, setTitle] = useState("");
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [dark, setDark] = useState("");

  function showNav() {
    let nav = document.querySelectorAll(".nav")[0] as HTMLDivElement;
    nav.style.display = "block";
    console.log("sd");
  }

  const handleClick = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Event");
    console.log(event.target);
    setTitle(event.target.value);
  };
  function closeNav() {
    let con = document.getElementsByClassName(style["head"]);
    console.log(con);
    let nav = document.getElementsByClassName(style.nav)[0] as HTMLDivElement;
    console.log(style.nav);
    nav.style.width = "0";
    nav.style.padding = "0";
    nav.style.boxShadow = "none";
  }

  useEffect(() => {
    let theme = window.localStorage.getItem("theme");
    let nav = document.getElementsByClassName(style.nav)[0];

    let allLinks = (document.querySelectorAll(
      `.${style["sec-links"]}`
    ) as any) as Array<HTMLAnchorElement>;
    let allInsights = (document.querySelectorAll(
      `.${style["anchor"]}`
    ) as any) as Array<HTMLAnchorElement>;
    if (theme == "dark") {
      document.body.classList.add("dark-body");
      nav.classList.add("dark-nav");
      //   allLinks.forEach((link: any) => {
      //     link.classList.add("dark-link");
      //   });
      for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.add("dark-link");
      }
      for (let i = 0; i < allInsights.length; i++) {
        allInsights[i].classList.add("dark-insight");
      }
      //   allInsights.forEach((insight: any) => {
      //     insight.classList.add("dark-insight");
      //   });

      window.localStorage.setItem("theme", "dark");
      setDark("dark");
    } else {
      document.body.classList.remove("dark-body");
      nav.classList.remove("dark-nav");
      //   allLinks.forEach((link: any) => {
      //     link.classList.remove("dark-link");
      //   });
      //   allInsights.forEach((insight: any) => {
      //     insight.classList.remove("dark-insight");
      //   });
      for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove("dark-link");
      }
      for (let i = 0; i < allInsights.length; i++) {
        allInsights[i].classList.remove("dark-insight");
      }

      window.localStorage.setItem("theme", "light");
      setDark("light");
    }
  }, [dark]);

  function setDarkMode() {
    let theme = window.localStorage.getItem("theme");

    if (theme == "dark") {
      window.localStorage.setItem("theme", "light");
      setDark("light");
    } else {
      window.localStorage.setItem("theme", "dark");
      setDark("dark");
    }
  }

  return (
    <div>
      <div className={style.nav}>
        <div className={style.close}>
          <button onClick={closeNav} className={style["close-button"]}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className={style.head}>
          <span className={`material-icons ${style["icon-chart"]}`}>
            stacked_line_chart
          </span>
          <div>Dash</div>
        </div>

        <div className={style["nav-items"]}>
          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">assessment</span>
              All Projects
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">extension</span>
              Activities
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">extension</span>
              Features
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">notes</span>
              Personal Notes
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">local_atm</span>
              Personal Budget
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">
                speaker_notes
              </span>
              Personal notes
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">
                calendar_today
              </span>
              Personal Tasks
            </div>
          </Link>
        </div>

        <hr className={"ruler"} />
        <div className={style["insights"]}>
          <h3>Insights</h3>

          <div className={style["container"]}>
            <Link className={style["anchor"]} to="/">
              <div className={style["elements"]}>
                <span className={`${style["icon"]} material-icons`}>
                  all_inbox
                </span>
                Inbox
              </div>
            </Link>

            <Link className={style["anchor"]} to="/">
              <div className={style["elements"]}>
                <span className={`${style["icon"]} material-icons`}>
                  all_inbox
                </span>
                Mail
                <span id={style["notifications"]}>3</span>
              </div>
            </Link>

            <Link className={style["anchor"]} to="/">
              <div className={style["elements"]}>
                <span className={`${style["icon"]} material-icons`}>
                  notifications_none
                </span>
                Notification
              </div>
            </Link>
          </div>
        </div>
        <hr className={style["ruler"]} />
        <div className={style["insights"]}>
          <h3>Theme</h3>
          <div className={style["theme-container"]}>
            <div className={style["theme-elements"]}>
              <button onClick={setDarkMode} className="dark">
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSidebar;
