// Inverse of server-side rendering
'use client';

// Imports
// ----------

// React
import React from 'react';

// Components
import AppBar from '@mui/material/AppBar';
import BreadCrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

// Styling
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../styles/theme';
import Image from 'next/image';

// Assets
import ApexLegendsLogo from './assets/img/apex-legends-header-img-multiple-chars.png';

// End of Imports

export default function HeaderNavBar(): React.ReactNode {
    return (
        <ThemeProvider theme={theme}>
            <nav aria-label='NavBarContainer'>
                <AppBar aria-label='HeaderNavBar' position='sticky'>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Image
                            alt='Apex Legends header image. Multiple characters posing'
                            src={ApexLegendsLogo}
                            width={140}
                            height={80}
                        >
                        </Image>
                        <BreadCrumbs 
                            aria-label='BreadCrumbMenuHeaderMenu'
                            color={theme.palette.secondary.contrastText}
                            separator='>'
                            sx={{
                                fontFamily: 'monospace',
                                fontSize: 'small',
                            }}
                        >
                            <Link
                                aria-label="HomePageLink"
                                color={theme.palette.secondary.contrastText} 
                                href='/'
                                sx={{
                                    'fontFamily': 'monospace',
                                    'fontSize': 'large',
                                    '&:hover': {
                                        color: theme.palette.secondary.light,
                                        fontWeight: '700',
                                        transition: '0.2s',
                                    }
                                }}
                                underline='hover'
                            >
                                Home
                            </Link>
                            <Link
                                aria-label='AboutPageLink'
                                color={theme.palette.secondary.contrastText} 
                                href='/about'
                                sx={{
                                    'fontFamily': 'monospace',
                                    'fontSize': 'large',
                                    '&:hover': {
                                        color: theme.palette.secondary.light,
                                        fontWeight: '700',
                                        transition: '0.2s',
                                    }
                                }}
                                underline='hover' 
                            >
                                About
                            </Link>
                        </BreadCrumbs>
                    </Toolbar>
                </AppBar>
            </nav>
        </ThemeProvider>
    );
}