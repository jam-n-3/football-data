import './App.css';
import React from 'react';

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'all'}>

                <div className={'top'}>
                    <h1 className={'heading'}>Football Data</h1>
                </div>

                <div className={'content'}>
                    <h1>Countries</h1>
                    <div className={'mid'}>
                        <p className={'option'}>Scotland</p>
                        <p className={'option'}>England</p>
                    </div>
                </div>

            </div>
        );
    }
}
