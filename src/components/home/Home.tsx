import React from 'react';
import NavBar from '../navbar/navBar'
import SideBar from '../sidebar/sideBar'
import style from './Home.module.sass';
import TaskCard from '../tasks/taskCard'
import { Link } from 'react-router-dom'


function Home() {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <SideBar />
            <div className={style['main']}>
                <NavBar />
                <div className={style['heads']}>
                    <h3 className={style['status']}>Pending</h3>
                    <Link to="#" className={style['see-all']}>See All</Link>

                </div>
                <div className={style['cards']}>
                    {nums.map(num => {
                        return (
                            <TaskCard />
                        )
                    })}

                </div>

                <div className={style['heads']}>
                    <h3 className={style['status']}>Completed</h3>
                    <Link to="#" className={style['see-all']}>See All</Link>

                </div>
                <div className={style['cards']}>
                    {nums.map(num => {
                        return (
                            <TaskCard />
                        )
                    })}

                </div>

                <div className={style['heads']}>
                    <h3 className={style['status']}>Expired</h3>
                    <Link to="#" className={style['see-all']}>See All</Link>

                </div>
                <div className={style['cards']}>
                    {nums.map(num => {
                        return (
                            <TaskCard />
                        )
                    })}

                </div>


            </div>


        </div>

    )
}

export default Home;