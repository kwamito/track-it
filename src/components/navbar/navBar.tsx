import React from 'react';
import style from './navbar.module.sass'

function NavBar() {
    return (
        <div className={style.navbar}>
            <span className={`material-icons ${style['some']}`}>
                menu
                 </span>
                 <span className={style['projet']}>
                     Projet
                 </span>

            <div className={style['left-nav-items']}>
                <form action="">
                    <input placeholder="Search..." className={style['searchbar']} type="text" name="" id="" />
                </form>
                <div className={style['bell-icon-container']}>
                        <span className="material-icons bell">
                        notifications
                        
                    </span>
                    </div>
                    <div className={style['pulse']}>

                    </div>
            </div>


        </div>
    )
}

export default NavBar;