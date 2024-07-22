// Imports
// ----------

// React
import React from 'react';

// Styles
import styles from './styles/style.module.css';

// End of imports

export default function HomePage(): React.ReactElement {
    return (
        <div className={styles.homePageWrapper}>
            <h1>Home</h1>
        </div>
    );
}
