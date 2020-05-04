import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar'

const layout = (props) => (
  <Aux>
    <Toolbar />
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
