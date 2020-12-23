import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import style from "./SideBarHome.module.sass";
import HomeCard from "../card/HomeCard";
import cards_style from "../team_card/teamCard.module.sass";

function Sidebar(props: any) {
  const [title, setTitle] = useState("");
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [dark, setDark] = useState("");

  function showNav() {
    let nav = document.querySelectorAll(".nav")[0] as HTMLDivElement;
    nav.style.display = "block";
    console.log("sd");
  }

  function closeNav() {
    // let con = document.getElementsByClassName(style["head"]);
    // console.log(con);
    let nav = document.querySelector(`.${style.nav}`) as HTMLDivElement;
    console.log(style.nav);
    nav.style.width = "0";
    nav.style.padding = "0";
    nav.style.boxShadow = "none";
  }

  useEffect(() => {
    let theme = window.localStorage.getItem("theme");
    if (theme == "dark") {
      document.body.classList.add("dark-body");
      let nav = document.getElementsByClassName(style.nav)[0];
      let cards = document.querySelectorAll(
        `.${cards_style["team-card-body"]}`
      );
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("darko");
      }
      // cards.forEach((card))
      //card?.classList.add("darko");
      let allLinks = (document.querySelectorAll(
        `.${style["sec-links"]}`
      ) as any) as Array<HTMLAnchorElement>;
      let allInsights = (document.querySelectorAll(
        `.${style["insight-elements"]}`
      ) as any) as Array<HTMLAnchorElement>;
      allLinks.forEach((link: any) => {
        link.classList.add("dark-link");
      });
      allInsights.forEach((insight: any) => {
        insight.classList.add("dark-insight");
      });
      nav.classList.add("dark-nav");
      window.localStorage.setItem("theme", "dark");
      setDark("dark");
    } else {
      document.body.classList.remove("dark-body");
      let nav = document.getElementsByClassName(style.nav)[0];
      let cards = document.querySelectorAll(
        `.${cards_style["team-card-body"]}`
      );
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("darko");
      }
      let allLinks = (document.querySelectorAll(
        `.${style["sec-links"]}`
      ) as any) as Array<HTMLAnchorElement>;
      let allInsights = (document.querySelectorAll(
        `.${style["insight-elements"]}`
      ) as any) as Array<HTMLAnchorElement>;

      allLinks.forEach((link: any) => {
        link.classList.remove("dark-link");
      });
      allInsights.forEach((insight: any) => {
        insight.classList.remove("dark-insight");
      });
      nav.classList.remove("dark-nav");
      window.localStorage.setItem("theme", "light");
      setDark("light");
    }
  }, [dark]);

  function setDarkMode() {
    let theme = window.localStorage.getItem("theme");
    console.log(theme);
    console.log(dark);
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
      <div className={`${style.nav} nav`}>
        <div className={style.close}>
          <button onClick={closeNav} className={style["close-button"]}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className={style.head}>
          <span className={`material-icons ${style["icon-chart"]}`}>
            stacked_line_chart
          </span>
          <div>Projet</div>
        </div>

        <div className={style["nav-items"]}>
          <Link
            to={`/project/${props.projectId}`}
            className={style["sec-links"]}
          >
            <div className={`${style["elements"]}`}>
              <span className="material-icons ml-4 mr-2 icon">assessment</span>
              Dashboard
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">extension</span>
              Analytics
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">
                people_outline
              </span>
              Contributors
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={`${style["elements"]}`}>
              <span className="material-icons ml-4 mr-2 icon">extension</span>
              Features
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={`${style["elements"]}`}>
              <span className="material-icons ml-4 mr-2 icon">notes</span>
              Notes
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">timeline</span>
              Timelines
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={`${style["elements"]}`}>
              <span className="material-icons ml-4 mr-2 icon">notes</span>
              Documentation
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">groups</span>
              Teams
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">local_atm</span>
              Budget
            </div>
          </Link>
          <Link
            to={`/project/${props.projectId}/tasks`}
            className={style["sec-links"]}
          >
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">
                calendar_today
              </span>
              Project Tasks
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={style["elements"]}>
              <span className="material-icons ml-4 mr-2 icon">gavel</span>
              Rules
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={`${style["elements"]}`}>
              <span className="material-icons ml-4 mr-2 icon">
                speaker_notes
              </span>
              Personal notes
            </div>
          </Link>

          <Link to="/" className={style["sec-links"]}>
            <div className={`${style["elements"]}`}>
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
              <div className={`${style["insight-elements"]} links`}>
                <span className={`${style["icon"]} material-icons`}>
                  all_inbox
                </span>
                Inbox
              </div>
            </Link>

            <Link className={style["anchor"]} to="/">
              <div className={`${style["insight-elements"]} links`}>
                <span className={`${style["icon"]} material-icons`}>
                  all_inbox
                </span>
                Mail
                <span id={style["notifications"]}>3</span>
              </div>
            </Link>

            <Link className={style["anchor"]} to="/">
              <div className={`${style["insight-elements"]} links`}>
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
        <hr />
        <button className={style["logout-button"]}>
          <span className="material-icons">power_settings_new</span>
          <title>Logout</title>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
