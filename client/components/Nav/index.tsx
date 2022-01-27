import Styles from './Nav.module.scss';
import { NavLink } from '../NavLink';
import navs from '../../constdata/Nav';
import {Button} from "@mui/material";

export const Nav = () => {
    return (
        <>
            <nav className = { Styles.nav }>
                {
                    navs.map((nav, index) => (
                        <NavLink href = { nav.link } key = { index }>
                            <Button variant="text">{ nav.title }</Button>
                        </NavLink>
                    ))
                }
            </nav>
        </>
    );
};
