import React from 'react';
import './Cell.css';

export default class Cell extends React.PureComponent {

    render() {
        const { value } = this.props;
        const style = {
            backgroundColor: "rgba(127, 255, 0, " + (value+30)/285 + ")"
        };
        return (
            <div className="cell" style={style}/>
        );
    }
}
