import React from "react";
import style from "../containers/app.css"

const Title = props => <div><h1 className={style.AppTitle}>{props.title}</h1><p className={style.Task}> Number of Tasks: {props.length}</p></div>

export default Title;