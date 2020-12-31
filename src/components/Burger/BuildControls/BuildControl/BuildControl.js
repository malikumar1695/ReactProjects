import React from 'react';

import classes from './BuildControl.css';

const BuildControl = (props)=>(
<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.lessHandler} disabled={props.disabled} className={classes.Less}>Less</button>
    <button onClick={props.addHandler} className={classes.More}>More</button>

</div>
);

export default BuildControl;