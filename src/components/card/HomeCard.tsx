import React from 'react';
import style from './HomeCard.module.sass'

function HomeCard() {
    return (
        <div>
            <div className={style.card}>
                <div className={style.title}>
                    Attendance Apps
                    <span className={`material-icons menu`}>
                        more_horiz
                    </span>
                </div>

                <div className={style.time}>
                    Oct 3, 2020
                </div>
                <p>
                    Employee can confirm the
                    attendance online
                </p>
                <div className={style.bottom}>
                    <div className={style.avatarContainer}>
                        <a className={style.avatar}></a>
                        <a className={style.avatar}></a>
                        <a className={style.avatar}></a>
                    </div>
                    <div className={style['second-group']}>
                        <span className={`material-icons ${style['icons']}`}>
                            assignment_turned_in
                        </span>
                        <span className={'over'}>
                            2/5
                        </span>
                    </div>

                    <div className={'share'}>
                        <span className={`material-icons ${style['link-icon']}`}>
                            attach_file
                        </span>
                        <span>
                            4
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeCard;