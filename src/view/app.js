import React from 'react';

import Header from '../components/Header';
import PageRoute from "../pageRoute";
import * as Colors from "../constants/Colors";

export default function App() {
    return(
        <div style={{backgroundColor: Colors.BACKGROUND_COLOR, minHeight: '100vh'}}>
            <Header/>
            <PageRoute/>
        </div>
    )
};
