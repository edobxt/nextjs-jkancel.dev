import * as React from 'react';
import styles from "./Header.module.css";

interface Props { }

export const Header: React.FC<Props> = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.container}>
                {/* Logo */}
                <li>Logo</li>

                {/* Pages */}
                <li className={styles.links}>
                    <ul>
                        <li>Projects</li>
                        <li>Resume</li>
                        <li>Blog</li>
                        <li>About me</li>
                        <li>Contact</li>
                    </ul>
                </li>

                {/* Theme Switch */}
                <li>Theme Switch</li>
            </ul>
        </nav>
    );
};