import React from 'react';
import style from './taskCard.module.sass'


function TaskCard(props: any) {
    return (
        <div>
            <div className={style['card-body']}>
                <div className={style['card-title']}>
                    {props.title}
                    <span className={`material-icons ${style['more-icon']}`}>
                        more_vert
                    </span>
                </div>
                <div className={style['avatar-due']}>
                    <div className={style['date']}>
                        {props.due != null ? `Due: ${props.due}` : 'Due date not set'}
                    </div>
                    <div className={style['avatar-group']}>
                        <div className={style['avatar']}></div>
                        <div className={style['avatar']}></div>
                        <div className={style['avatar']}></div>
                        <div className={`${style['avatar']} ${style['remaining']}`}>+3</div>
                    </div>
                </div>

                <div className={style.percent}>
                    50%
                </div>
                <div className={style['progress']}>
                    <div className={style['background']}>
                        <div className={style['completion']}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskCard;