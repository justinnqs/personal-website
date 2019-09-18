import React from 'react';
import { NavBar } from '../organisms/NavBar';
import { Terminal } from '../molecules/Terminal';

const NavTemplate = (props) => {
    return(
        <React.Fragment>
            <NavBar></NavBar>
            <Terminal/>
            {props.children}
        </React.Fragment>
    )
}

export default NavTemplate;