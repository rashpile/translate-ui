import React, { FunctionComponent, ReactNode, useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import About from './About';
import Translate from './Translate/Translate';

type Props = {
    children: ReactNode
}

interface PageElement {
    page: ReactNode,
    title: string
}

const AppLayout = ({ children }: Props) => {

    const [appPage, setPage] = useState({
        page: <Translate/>,
        title: "Home"
    })

    const [anchorEl, setAnchorEl] = useState<Element | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setPage({
            page: <About />,
            title: "About"
        })
        setAnchorEl(null);
    };

    const handleHome = () => {
        setPage({
            page: <Translate />,
            title: "Home"
        })
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleHome}>Home</MenuItem>
                            <MenuItem onClick={handleClose}>About</MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {appPage.title}
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    {appPage.page}
                </Container>
            </Box>

        </div>

    );
}

export default AppLayout;