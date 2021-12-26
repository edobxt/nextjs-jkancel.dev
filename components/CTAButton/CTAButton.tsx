import Link from 'next/link';
import * as React from 'react';
import styles from "./CTAButton.module.css";

interface Props {
    href: string;
    title: string;
}

export const CTAButton: React.FC<Props> = (props) => {
    return (
        <Link href={props.href} passHref>
            <a className={styles.cta_button}>{props.title}</a>
        </Link>
    );
};