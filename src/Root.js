import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

import {MdArrowBack} from "react-icons/md";
import {countries} from './Data';

export default class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'all'}>
                <Router>

                    <div className={'top'}>
                        <h1 className={'heading'}>Football Data</h1>
                    </div>

                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} children={<h1>Countries</h1>} />
                            <Route path ={'/:country'} children={<Country />} />
                        </Switch>
                        <Countries />
                    </div>

                </Router>
            </div>
        );
    }
}

function Country() {
    let {country} = useParams();
    country = country[0].toUpperCase() + country.slice(1);
    return (
        <div className={'col'}>
            <Link to={'/'}><div className={'iconBG'}><MdArrowBack className={'iconFG'} /></div></Link>
            <h1>{country}</h1>
        </div>
    );
}

function Countries() {
    return (
        <div className={'mid'}>
            {countries.map((c) =>
                <Link to={`/${c}`}>
                    <p className={'option'}>{c[0].toUpperCase() + c.slice(1)}</p>
                </Link>
            )}
        </div>
    )
}
