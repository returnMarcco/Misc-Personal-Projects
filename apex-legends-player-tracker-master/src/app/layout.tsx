'use client';

// Imports
// -----------

// React Components
import HeaderNavBar from './common_components/header_nav_bar/HeaderNavBar';
import FooterBar from './common_components/footer_bar/FooterBar';

// Styles
import layoutStyles from './styles/layout-style.module.css';
import styles from './styles/style.module.css';

// End of imports

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Apex Legends Player Tracker</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" /> { /* Optimization for mobile-device displays */ }
            </head>
            <body>
                <div className={layoutStyles.rootLayoutFlexColumnWrapper}>
                    <HeaderNavBar />
                    <div className={styles.pageWrapper}>
                        {children}
                    </div>
                    <FooterBar />
                </div>
            </body>
        </html>
    );
}
