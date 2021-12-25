import * as React from 'react';
import styles from './SideText.module.css';

interface Props {
    title: string;
}

export const SideText: React.FC<Props> = (props) => {
    return (
        <div className={styles.element}>
            <span>{props.title}</span>
        </div>
    );
};