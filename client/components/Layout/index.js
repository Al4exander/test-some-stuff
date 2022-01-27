import { Nav } from '../Nav';

import Styles from './Layout.module.scss';

export const Layout = (props) => {
    return (
        <>
            <Nav />
            <section className = { Styles.layout }>
                { props.children }
            </section>
        </>
    );
};

