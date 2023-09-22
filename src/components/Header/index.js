import React from 'react';
import {MENU_OPTIONS} from '../../constants/StaticRrcords';
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import * as Colors from "../../constants/Colors";

export default function Header() {
    return(
        <div style={{
            display: 'flex',
            height: 70,
            alignItems: 'center',
            backgroundColor: Colors.PRIMARY_COLOR
        }}>
            <div style={{
                width: 100
            }}>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            {MENU_OPTIONS.map(menu => <div key={menu.key+'__menu'} style={{
                padding: '20px 10px',
                cursor: 'pointer',
            }}>
                <Link to={menu.link} style={{color: '#FFFFFF'}}>{menu.name}</Link>
            </div>)}
        </div>
    )
}