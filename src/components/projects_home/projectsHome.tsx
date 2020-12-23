import React, { useEffect, useState } from 'react';
import ProjectSideBar from './projectsHomeSideBar';
import ProjectCard from './projectsCard';
import style from './projectHome.module.sass';
import NavBar from '../navbar/navBar';
import axios from 'axios';
import BottomNavBar from '../navbar/bottomNavBar';

function ProjectsList() {
    const [projects, setProjects] = useState<any[]>([]);
    const [contributors, setContributors] = useState<any[]>([]);
    function retrieveProjects() {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        let api = "http://127.0.0.1:8000/project/my-projects/";
        axios.get(api).then(response => {
            console.log(response);
            setProjects(response.data);
            setContributors(response.data.contributors)

        })
    }

    let theme = window.localStorage.getItem('theme');
    if (theme == 'dark') {
        document.body.classList.add('dark-body');
        window.localStorage.setItem('theme', 'dark')
    }
    else {
        document.body.classList.remove('dark-body');
        window.localStorage.setItem('theme', 'light')
    }

    useEffect(() => {
        // const interval = setInterval(() => {
        //     retrieveProjects();
        // }, 10000)
        retrieveProjects()

    }, [])

    console.log(contributors)

    return (
        <div>
            <ProjectSideBar />

            <div className={style['main']}>
                <div className={style['projects-nav-container']}>
                    <NavBar />
                </div>
                <div className={style['project-nav-container-bottom']}>
                    <BottomNavBar />
                </div>

                <div className={style['cover']}>
                    {projects.map(project => {
                        return (
                            <div className={style['projects']} key={project.id}>
                                <ProjectCard tasksCompleted={project.tasks_completed}
                                    tasks_done={project.tasks_done} key={project.id}
                                    title={project.title} priority={project.priority}
                                    created={project.created} timesince={project.time_since_created}
                                    icon_url={project.icon} contributors={project.contributors} id={project.id} />
                            </div>



                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default ProjectsList;