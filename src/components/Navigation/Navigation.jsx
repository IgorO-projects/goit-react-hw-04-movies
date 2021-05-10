import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={styles.nav__list}>
            <li>
                <NavLink 
                exact
                to="/" 
                className={styles.nav__link}
                activeClassName={styles.nav__link_active}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                to="/movies" 
                className={styles.nav__link}
                activeClassName={styles.nav__link_active}>
                    Movies
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation;