import React from 'react';
import style from './projectsCard.module.sass';
import { useHistory, Link } from 'react-router-dom';

function renderPriority(level: string) {


    console.log(level, level)
    if (level === 'H') {
        return (

            <button className={`${style['high']}`}>
                HIGH PRIORITY
            </button>

        )
    }
    else if (level === 'M') {
        return (
            <button className={`${style['medium']} medium`}>
                MEDIUM PRIORITY
            </button>
        )
    }
    else {
        return (

            <button className={`${style['low']} low`}>
                LOW PRIORITY
            </button>

        )
    }
}


function convertToDate(date: string) {
    let newDate = new Date(date);
    let convertedDate = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
    return convertedDate;
}



function ProjectCard(props: any) {
    console.log(props.contributors)
    const linkStyle = {
        'text-decoration': 'none',
        'color': 'black'
    }

    function renderIconOrRenderFirstLetterInName(icon_url: any) {
        const backgroundStyle = {
            'backgroundImage': `url(${icon_url})`
        }
        if (icon_url != null) {
            return (
                <span style={backgroundStyle} className={style["project-logo"]}></span>
            )
        }
        else {
            return (
                <span className={style['icon-no-show']}>
                    {props.title.slice(0, 1)}
                </span>
            )
        }
    }
    console.log(props.contributors[2])
    // let contributors = props.contributors[5]
    // let lengthOfContributors = props.contributors.length
    // let subtractedLength = contributors.length - lengthOfContributors

    function renderAvatarOrFirstLetterInName(contributor: any) {
        const contributorBackGround = {
            'backgroundImage': `url(${contributor.profile_image})`
        }
        if (contributor.profile_image != null) {
            return (
                <div style={contributorBackGround} className={style['contributor-avatar']}></div>
            )
        }

    }
    let theme = window.localStorage.getItem('theme');
    if (theme == 'dark') {
        let card = document.querySelector(style['project-card-body']);
        console.log(card)
        card?.classList.add('project-card-body-dark')
        window.localStorage.setItem('theme', 'dark')
    }
    else {
        document.body.classList.remove('dark-body');
        window.localStorage.setItem('theme', 'light')
    }

    const widthStyle = {
        'width': `${props.tasksCompleted}%`
    }
    return (
        <div>
            <Link style={linkStyle} to={`project/${props.id}`}>
                <div className={style['project-card-body']}>
                    <div className={style["project-card-top"]}>
                        <div className={style['imp']}>
                            {/* <span className={style["project-logo"]}></span> */}
                            {renderIconOrRenderFirstLetterInName(props.icon_url)}
                            <p className={style['project-title']}>{props.title}</p>
                        </div>

                        <div className={style['logos']}>
                            <span className={`${style['star-icon']} material-icons`}>
                                star
                        </span>
                            <span className={`${style['more-icon']} material-icons`}>
                                more_vert
                        </span>
                        </div>

                    </div>
                    <div className={style['progress-priority']}>
                        <button className={style['select-progress']}>
                            SELECT PROGRESS
                    </button>
                        {/* {props.priority === "M" ? "" : "ldfj"} */}
                        {renderPriority(props.priority)}
                    </div>
                    <div className={style['tasks-done']}>
                        Tasks Done: {props.tasks_done}
                    </div>

                    <div className={style['progress-group']}>
                        <div className={style['tasks-completed-back']}>
                            <div className={style['tasks-completed']} style={widthStyle}></div>
                        </div>
                    </div>

                    <div className={style['tag-group']}>
                        <button className={style['tag']}>
                            ISO APP
                    </button>
                    </div>

                    <div className={style['project-contributors-avatars']}>
                        {/* {contributors.map(contribut => {

                        return (
                            <div key={contribut} className={style['contributor-avatar']}></div>
                        )
                    })} */}

                        <div className={style['contributor-avatar']}></div>
                        <div className={style['contributor-avatar']}></div>
                        <div className={style['contributor-avatar']}></div>
                        <div className={style['contributor-avatar']}></div>
                        {/* {contributors.map((contributer: any) => {
                        return (
                            renderAvatarOrFirstLetterInName(contributer)
                        )
                    })} */}
                        <div className={style['more-avatar']}>+{2}</div>
                    </div>

                    <div className={style['project-due-date']}>
                        <div className={style['due-date']}>
                            CREATED: {props.timesince}
                        </div>
                    </div>


                </div>
            </Link>

        </div>
    )
}

export default ProjectCard;