import classes from './Layout.module.css';
import { Fragment } from 'react/cjs/react.production.min';
import MainNavigation from './MainNavigation';


const Layout = () =>{

    return <Fragment>

    <MainNavigation/>

    <main className={classes.main}>{props.children}</main>

    </Fragment>



}

export default Layout;