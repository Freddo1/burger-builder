import React from 'react';

import classes from './ToggleSideDrawer.module.css';

const ToggleSideDrawer = (props) => (
    <div className={classes.ToggleSideDrawer} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default ToggleSideDrawer;