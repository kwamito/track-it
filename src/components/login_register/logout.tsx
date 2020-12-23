import React from 'react';
import style from './logout.module.sass'

function Logout() {
    return (
        <div>
            <div className={style['button-container']}>
                <button className={style['logout-button']}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Logout;