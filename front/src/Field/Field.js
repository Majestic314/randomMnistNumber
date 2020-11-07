import React from 'react';
import './Field.css';
import Cell from '../Cell/Cell';

export default class Field extends React.PureComponent {

    render() {
        const { field } = this.props;
        if (field == null) {
            return (
                <div className="placeholder">
                    {"Press the button!"}
                </div>
            );
        }
        return (
            <div className="field">
                {field.map( (row, rowIndex) => (
                    <div className="field-row" key={"field-row-"+rowIndex}>
                        {row.map( (cell, columnIndex) => (
                            <Cell value={cell} key={"row-cell-"+columnIndex}/>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
