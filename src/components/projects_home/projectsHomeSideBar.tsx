import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import style from './SideBarHome.module.sass';
import HomeCard from '../card/HomeCard'


function ProjectsSidebar() {
    const [title, setTitle] = useState('');
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


    function showNav() {
        let nav = document.querySelectorAll('.nav')[0] as HTMLDivElement;
        nav.style.display = 'block'
        console.log('sd')

    }

    const handleClick = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Event");
        console.log(event.target)
        setTitle(event.target.value)
    }
    function closeNav() {
        let con = document.getElementsByClassName(style['head'])
        console.log(con)
        let nav = document.querySelector(style.nav) as HTMLDivElement;
        console.log(style.nav)
        nav.style.width = '0'
        nav.style.padding = '0'
        nav.style.boxShadow = 'none'

    }

    return (
        <div>


            <div className={style.nav}>
                <div className={style.close}>
                    <button onClick={closeNav} className={style['close-button']}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>

                </div>

                <div className={style.head}>

                    <span className={`material-icons ${style['icon-chart']}`}>
                        stacked_line_chart
                    </span>
                    <div>
                        Dash
                    </div>
                </div>

                <div className={style['nav-items']}>
                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                assessment
                            </span>

                               All Projects

                        </div>
                    </Link>


                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                extension
                            </span>

                                Activities

                        </div>
                    </Link>

                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                extension
                            </span>

                                Features

                        </div>
                    </Link>

                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                notes
                            </span>

                                Personal Notes

                        </div>
                    </Link>



                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                local_atm
                            </span>

                                Personal Budget

                        </div>
                    </Link>




                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                speaker_notes
                            </span>

                                Personal notes

                        </div>
                    </Link>

                    <Link to="/" className={style['sec-links']}>
                        <div className={style['elements']}>
                            <span className="material-icons ml-4 mr-2 icon">
                                calendar_today
                            </span>

                                Personal Tasks

                        </div>
                    </Link>
                </div>

                <hr className={'ruler'} />
                <div className={style['insights']}>
                    <h3>Insights</h3>

                    <div className={style['container']}>
                        <Link className={style['anchor']} to='/'>
                            <div className={style['elements']}>
                                <span className={`${style['icon']} material-icons`}>
                                    all_inbox
                                </span>
                                Inbox
                            </div>
                        </Link>

                        <Link className={style['anchor']} to='/'>
                            <div className={style['elements']}>
                                <span className={`${style['icon']} material-icons`}>
                                    all_inbox
                                </span>
                                Mail
                                <span id={style['notifications']}>
                                    3
                                </span>
                            </div>
                        </Link>

                        <Link className={style['anchor']} to='/'>
                            <div className={style['elements']}>
                                <span className={`${style['icon']} material-icons`}>
                                    notifications_none
                                </span>
                                Notification
                            </div>
                        </Link>
                    </div>
                </div>
                <hr className={style['ruler']} />
                <div className={style['insights']}>
                    <h3>Theme</h3>
                    <div className={style["theme-container"]}>
                        <div className={style['theme-elements']}>
                            <button className="dark">Toggle Dark Mode</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProjectsSidebar;