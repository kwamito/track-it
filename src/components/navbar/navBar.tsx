import style from "./navbar.module.sass";
import stylo from "../sidebar/SideBarHome.module.sass";
import nav_styles from "../projects_home/personalSideBar.module.sass";

function NavBar() {
  const handleNavOpening = () => {
    let nav = document.getElementsByClassName(
      nav_styles["nav"]
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
    <div className={style.navbar}>
      <span
        onClick={handleNavOpening}
        className={`material-icons ${style["some"]}`}
      >
        menu
      </span>
      <span className={style["projet"]}>Projet</span>

      <div className={style["left-nav-items"]}>
        <form action="">
          <input
            placeholder="Search..."
            className={style["searchbar"]}
            type="text"
            name=""
            id=""
          />
        </form>
        <div className={style["bell-icon-container"]}>
          <span className="material-icons bell">notifications</span>
        </div>
        <div className={style["pulse"]}></div>
      </div>
    </div>
  );
}

export default NavBar;
