import React from 'react';
import ProjectsSidebar from '../projects_home/projectsHomeSideBar';
import NavBar from '../navbar/navBar';
import home_style from './userHomepage.module.sass';


function UserHomePage() {
    return (
        <div>
            <div><ProjectsSidebar /></div>
            <div className={home_style['main']}>
                <div><NavBar /></div>
                <h3 className={home_style['head-text']}>Percentage of your tasks completed</h3>
                <div className={home_style['ring-main']}>
                    <svg className={home_style['user-tasks-ring']} viewBox="0 0 35 35">
                        <circle r='15.915' cx='50%' cy='50%' stroke-dasharray="60, 100" className={home_style['home-ring']}></circle>

                        <title>Completed tasks</title>
                    </svg>

                </div>
                <h2 className={home_style['percentage']}>60%</h2>
            </div>

        </div>
    )
}

export default UserHomePage;