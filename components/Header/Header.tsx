import * as React from 'react';
import styles from "./Header.module.css";
import Link from 'next/link';

interface Props { }

export const Header: React.FC<Props> = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.container}>
                {/* Logo */}
                <li><Link href={"/"} passHref><a>Logo</a></Link></li>

                {/* Pages */}
                <li className={styles.links}>
                    <ul>
                        <li>
                            <Link href="/projects" passHref><a>Projects</a></Link>
                        </li>

                        <li>
                            <Link href={"/resume"} passHref><a>Resume</a></Link>
                        </li>

                        <li>
                            <Link href={"/blog"} passHref><a>Blog</a></Link>
                        </li>

                        <li>
                            <Link href={"/about"} passHref><a>About me</a></Link>
                        </li>

                        <li>
                            <Link href={"/contact"} passHref><a>Contact</a></Link>
                        </li>
                    </ul>
                </li>

                {/* Theme Switch */}
                <li>Theme Switch</li>
            </ul>
        </nav>
    );
};