import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class homePage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                    <Link to="/create" className="">Create</Link>

                    </li>
                    <li>
                    <Link to="/view" className="">View</Link>
 
                    </li>
                </ul>

            </div>
        )
    }
}
