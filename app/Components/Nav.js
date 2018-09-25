/* @flow */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <ul className="nav">
            <li>
                <NavLink exact to='/' activeClassName='active' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/battle' activeClassName='active'>Battle</NavLink>
            </li>
            <li>
                <NavLink to='/popular' activeClassName='active'>Popular</NavLink>
            </li>
            <li>
                <NavLink to='/form' activeClassName='active'>form</NavLink>
            </li>

            <li>
                <NavLink to='/loading' activeClassName='active'>Loading</NavLink>
            </li>
        </ul>
    )
}