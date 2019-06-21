import React from 'react';
import style from '../containers/app.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={style.Todo} onClick={this.props.customClickEvent}>{this.props.text}</li>
        )
    };
}

export default Todo;